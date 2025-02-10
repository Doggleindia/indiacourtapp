import { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, Stack } from "expo-router";
import OnboardingScreen from "../src/components/onboarding/OnboardingScreen";
import HomeScreen from "../src/components/home/HomeScreen";

export default function Index() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    async function checkOnboarding() {
      const firstLaunch = await AsyncStorage.getItem("hasOnboarded");
      if (firstLaunch === null) {
        setIsFirstLaunch(true);
        await AsyncStorage.setItem("hasOnboarded", "true");
      } else {
        setIsFirstLaunch(false);
      }
    }
    checkOnboarding();
  }, []);

  if (isFirstLaunch === null) {
    return null; // Prevent rendering until we check AsyncStorage
  }

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <Redirect href="/home" />
      <View style={{ flex: 1 }}>
        {isFirstLaunch ? <OnboardingScreen /> : <HomeScreen />}
      </View>
      

    </>
  );
}
