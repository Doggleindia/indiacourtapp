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
          <View style={styles.logoContainer}>
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
              Change Password
            </Text>
          </View>

          <View style={{ width: "80%", marginTop: 50 }}>
            <View style={{ gap: 16 }}>
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
            </View>

            <Button
              onPress={() => router.dismissTo("/(auth)")}
              style={{
                backgroundColor: "#056B38",
                borderRadius: 4,
                marginTop: 25,
              }}
              textColor="#FFF"
            >
              Submit
            </Button>
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
  logo: { width: "50%" },
  forgotPassword: { textAlign: "right", color: "white" },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    paddingVertical: 40,
  },
  logoContainer: { alignItems: "center", gap: 25 },
});
