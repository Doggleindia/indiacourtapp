import BackHeader from "@/components/headers/BackHeader";
import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerLeft: () => BackHeader(), title: "" }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
