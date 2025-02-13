import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "./components/Input";
import { Button } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import LogoTitle from "./components/LogoTitle";
import SubmitButton from "./components/SubmitButton";
const BackgroundImage = require("../../../assets/images/auth/supreme_court.png");

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const toggleScreen = () => setIsLogin((prev) => !prev);

  const onLogin = () => router.replace("/(tabs)/(home)");
  const onSignUp = () => router.navigate("/(auth)/otp");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={BackgroundImage} style={styles.background}>
        <View style={styles.overlay} />
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <LogoTitle title={isLogin ? "Login" : "Sign Up"} />

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

            <SubmitButton
              label={isLogin ? "Login" : "Create Account"}
              onPress={isLogin ? onLogin : onSignUp}
            />

            {isLogin && (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 20,
                    width: "100%",
                    gap: 8,
                  }}
                >
                  <View
                    style={{
                      borderColor: "#FFF",
                      borderBottomWidth: 1,
                      flex: 1,
                    }}
                  />
                  <Text style={styles.continueWithText}>Or continue with</Text>
                  <View
                    style={{
                      borderColor: "#FFF",
                      borderBottomWidth: 1,
                      flex: 1,
                    }}
                  />
                </View>

                <Button
                  onPress={onLogin}
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
  forgotPassword: { textAlign: "right", color: "white" },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  text: { textAlign: "center", color: "#FFF", marginTop: 16, fontSize: 12 },
  continueWithText: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 12,
    marginVertical: 32,
  },
  googleButton: {
    backgroundColor: "white",
    borderRadius: 4,
    paddingVertical: 8,
  },
});
