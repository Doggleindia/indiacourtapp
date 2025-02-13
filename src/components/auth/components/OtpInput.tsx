import {
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";
import React, { useRef } from "react";

type Props = {
  otpValues: string[];
  setOtpValues: React.Dispatch<React.SetStateAction<string[]>>;
  onSubmit: () => void;
};

export default function OtpInput({ otpValues, setOtpValues, onSubmit }: Props) {
  const inputs = useRef<TextInput[]>([]);

  const handleChangeText = async (text: string, index: number) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = text;
    setOtpValues(newOtpValues);

    // Automatically focus the next input or call the verification function
    if (text.length !== 0) {
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1]?.focus();
      } else if (newOtpValues.every((digit) => digit.trim() !== "")) {
        // If all OTP fields are filled, automatically call the verification function
        onSubmit();
      }
    } else if (text.length === 0 && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace") handleChangeText("", index);
  };

  return (
    <View style={styles.otpContainer}>
      {otpValues.map((value, index) => (
        <TextInput
          ref={(ref) => {
            if (ref) inputs.current[index] = ref;
          }}
          style={[styles.otpInput, value !== "" && { borderColor: "#C08729" }]}
          key={index}
          keyboardType="number-pad"
          maxLength={1}
          selectTextOnFocus
          contextMenuHidden
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          value={value}
          multiline={true}
        />
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 40,
    fontFamily: "Mulish-Bold",
  },
  subheading: {
    fontSize: 18,
    fontFamily: "Mulish-Medium",
    marginTop: 20,
  },
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 8,
    textAlign: "center",
    justifyContent: "space-between",
  },
  otpInput: {
    borderBottomWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
    backgroundColor: "transparent",
    borderColor: "#B9B9B9",
    flex: 1,
    color: "#FFF0B9",
  },

  continueButton: {
    borderRadius: 100,
    alignSelf: "center",
    marginTop: "auto",
    paddingHorizontal: 24,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
});
