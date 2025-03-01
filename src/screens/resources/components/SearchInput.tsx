import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import SubmitButton from "@/screens/auth/components/SubmitButton";

type Props = {
  inputProps?: TextInputProps;
  showButton?: boolean;
};

export default function SearchInput({ inputProps, showButton = true }: Props) {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          {...inputProps}
        />
        {text !== "" && (
          <TouchableOpacity onPress={() => setText("")}>
            <AntDesign name="closecircleo" color="#C08729" size={20} />
          </TouchableOpacity>
        )}
      </View>

      {showButton && (
        <SubmitButton
          onPress={() => {}}
          label="Search"
          buttonStyles={{
            borderRadius: 0,
            height: "100%",
            paddingHorizontal: 8,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    flexDirection: "row",
    borderColor: "#C08729",
    alignItems: "center",
    gap: 2,
    paddingHorizontal: 4,
    flex: 1,
  },
  input: {
    justifyContent: "flex-end",
    flex: 1,
  },
});
