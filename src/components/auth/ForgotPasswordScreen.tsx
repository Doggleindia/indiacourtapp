import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Input from "./components/Input";
import { useRouter } from "expo-router";
import LogoTitle from "./components/LogoTitle";
import SubmitButton from "./components/SubmitButton";
const BackgroundImage = require("../../../assets/images/auth/supreme_court.png");

export default function ForgotPasswordScreen() {
  const router = useRouter();

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
          <LogoTitle title="Forgot Password" />

          <View style={{ width: "80%", gap: 16 }}>
            <Input label="Email Address" placeholder="xxx@gmail.com" />

            <SubmitButton
              label="Submit"
              onPress={() => router.push("/(auth)/changePassword")}
            />

            <Text
              style={{
                textAlign: "center",
                color: "#F4F9FF",
                fontSize: 12,
                marginVertical: 8,
              }}
            >
              We will send you a message to set or reset your new password
            </Text>
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
