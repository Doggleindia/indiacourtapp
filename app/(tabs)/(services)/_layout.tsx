import BackHeader from "@/components/headers/BackHeader";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerLeft: () => BackHeader(), title: "" }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
