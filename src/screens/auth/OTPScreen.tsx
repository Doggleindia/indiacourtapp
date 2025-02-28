import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import OtpInput from "./components/OtpInput";
import { useRouter } from "expo-router";
import { Octicons } from "@expo/vector-icons";
import LogoTitle from "./components/LogoTitle";
import SubmitButton from "./components/SubmitButton";
const BackgroundImage = require("../../../assets/images/auth/supreme_court.png");

const OTP_DIGITS = 6;

export default function OTPScreen() {
  const router = useRouter();
  const [isVerified, setIsVerified] = useState(false);
  const [otpValues, setOtpValues] = useState<string[]>(
    Array(OTP_DIGITS).fill("")
  );
  const onSubmit = () => setIsVerified(true);

  return (
    <>
      <ImageBackground source={BackgroundImage} style={styles.background}>
        <View style={styles.overlay} />
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 40,
          }}
          showsVerticalScrollIndicator={false}
        >
          <LogoTitle
            title={
              !isVerified ? "OTP Verification" : "OTP Verified Successfully"
            }
          />
          <View style={{ width: "80%", gap: 16 }}>
            {isVerified ? (
              <View style={{ alignItems: "center", marginBottom: 14 }}>
                <Octicons
                  name="check-circle-fill"
                  size={50}
                  color="#00C000"
                  style={{ backgroundColor: "white", borderRadius: 50 }}
                />
              </View>
            ) : (
              <>
                <Text style={{ fontSize: 16, color: "#FFF" }}>
                  Enter the OTP sent to your email address
                </Text>

                <OtpInput
                  onSubmit={onSubmit}
                  otpValues={otpValues}
                  setOtpValues={setOtpValues}
                />

                <Text
                  style={{
                    fontSize: 12,
                    color: "#FFF",
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Didn't you receive the OTP?
                  <Text style={{ color: "#C08729" }}> Resend OTP</Text>
                </Text>
              </>
            )}

            <SubmitButton
              label={isVerified ? "Continue" : "Verify"}
              onPress={() => router.replace("/(tabs)/(home)")}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "pink",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  forgotPassword: { textAlign: "right", color: "white" },
});
