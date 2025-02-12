import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../input/Input";
import { Button } from "react-native-paper";
import { useRouter } from "expo-router";
const BackgroundImage = require("../../../assets/images/auth/supreme_court.png");
const LogoImage = require("../../../assets/images/home/logo.png");

export default function ForgotPasswordScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          <View style={{ alignItems: "center", gap: 25, marginBottom: 50 }}>
            <Image
              source={LogoImage}
              resizeMode="contain"
              style={{ maxHeight: 100 }}
            />
            <Text
              style={{
                textAlign: "center",
                fontWeight: "600",
                color: "#FFF",
                fontSize: 20,
              }}
            >
              Forgot Password
            </Text>
          </View>

          <View style={{ width: "80%" }}>
            <Input label="Email Address" placeholder="xxx@gmail.com" />

            <Button
              onPress={() => router.push("/(auth)/changePassword")}
              style={{
                backgroundColor: "#056B38",
                borderRadius: 4,
                marginTop: 25,
              }}
              textColor="#FFF"
            >
              Submit
            </Button>

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
    </SafeAreaView>
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
  logo: { width: "50%" },
  forgotPassword: { textAlign: "right", color: "white" },
});
