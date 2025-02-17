import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="bare-acts-details"
        options={{ title: "Bare Acts", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="bare-acts-particular"
        options={{ title: "Bare Acts", headerTitleAlign: "center" }}
      />
    </Stack>
  );
}
