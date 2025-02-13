import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "./components/Input";
import { useRouter } from "expo-router";
import LogoTitle from "./components/LogoTitle";
import SubmitButton from "./components/SubmitButton";
const BackgroundImage = require("../../../assets/images/auth/supreme_court.png");

export default function ChangePasswordScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
            </View>

            <SubmitButton
              label="Submit"
              onPress={() => router.dismissTo("/(auth)")}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
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
