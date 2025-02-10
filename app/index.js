import { useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect } from "expo-router";
import OnboardingScreen from "../src/components/onboarding/OnboardingScreen";

export default function Index() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    async function checkOnboarding() {
      const firstLaunch = await AsyncStorage.getItem("hasOnBoarded");

      if (firstLaunch === null) setIsFirstLaunch(true);
      else setIsFirstLaunch(false);
    }

    checkOnboarding();
  }, []);

  if (isFirstLaunch === null) return null; // Prevent rendering until we check AsyncStorage

  if (!isFirstLaunch) return <Redirect href="/(tabs)/(home)" />;

  return (
    <View style={{ flex: 1 }}>
      <OnboardingScreen />
    </View>
  );
}
