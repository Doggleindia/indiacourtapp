import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Input from "./components/Input";
import { useRouter } from "expo-router";
import LogoTitle from "./components/LogoTitle";
import SubmitButton from "./components/SubmitButton";
const BackgroundImage = require("../../../assets/images/auth/supreme_court.png");

export default function ChangePasswordScreen() {
  const router = useRouter();

  return (
    <>
      <ImageBackground source={BackgroundImage} style={styles.background}>
        <View style={styles.overlay} />
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <LogoTitle title="Change Password" />

          <View style={{ width: "80%" }}>
            <View style={{ gap: 25 }}>
              <Input
                label="Enter New Password"
                placeholder="*********"
                secureText
              />

              <Input
                label="Confirm Password"
                placeholder="*********"
                secureText
              />

              <SubmitButton
                label="Submit"
                onPress={() => router.dismissTo("/(auth)")}
              />
            </View>
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
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  forgotPassword: { textAlign: "right", color: "white" },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingVertical: 40,
  },
});
