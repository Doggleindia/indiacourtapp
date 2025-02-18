import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="judgement-details"
        options={{
          title: "Judgement",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
