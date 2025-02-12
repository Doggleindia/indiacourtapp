import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../input/Input";
import { Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
const BackgroundImage = require("../../../assets/images/auth/supreme_court.png");
const LogoImage = require("../../../assets/images/home/logo.png");

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const toggleScreen = () => setIsLogin((prev) => !prev);

  const toOTP = () => router.navigate("/(auth)/otp");

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
            <Text style={styles.title}>{isLogin ? "Login" : "Sign Up"}</Text>
          </View>

          <View style={{ width: "80%" }}>
            <View style={{ gap: 16 }}>
              <View style={{ gap: 25 }}>
                {!isLogin && <Input label="Username" placeholder="John Doe" />}
                <Input label="Email Address" placeholder="xxx@gmail.com" />

                <Input label="Password" placeholder="*********" secureText />

                {!isLogin && (
                  <Input
                    label="Confirm Password"
                    placeholder="*********"
                    secureText
                  />
                )}
              </View>

              {isLogin && (
                <TouchableOpacity
                  onPress={() => router.push("/(auth)/forgotPassword")}
                >
                  <Text style={styles.forgotPassword}>Forgot Password ?</Text>
                </TouchableOpacity>
              )}
            </View>

            <Button style={styles.loginButton} textColor="#FFF" onPress={toOTP}>
              {isLogin ? "Login" : "Create Account"}
            </Button>

            {isLogin && (
              <>
                <Text style={styles.continueWithText}>Or continue with</Text>

                <Button
                  onPress={toOTP}
                  icon={() => <AntDesign name="google" size={30} />}
                  textColor="#000"
                  style={styles.googleButton}
                >
                  Continue With Google
                </Button>
              </>
            )}
            <TouchableOpacity onPress={toggleScreen}>
              <Text style={styles.text}>
                {isLogin
                  ? "New here ? Create an account"
                  : "Already have an account?"}
              </Text>
            </TouchableOpacity>
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
    paddingVertical: 40,
  },
  logoContainer: { alignItems: "center", gap: 25, marginBottom: 40 },
  title: {
    textAlign: "center",
    fontWeight: "600",
    color: "#FFF",
    fontSize: 20,
  },
  loginButton: { backgroundColor: "#056B38", borderRadius: 4, marginTop: 25 },
  text: { textAlign: "center", color: "#FFF", marginTop: 16, fontSize: 12 },
  continueWithText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 10,
    marginVertical: 32,
  },
  googleButton: {
    backgroundColor: "white",
    borderRadius: 4,
    paddingVertical: 8,
  },
});
