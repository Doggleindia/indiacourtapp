import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="bill-details"
        options={{
          title: "Bill",
          headerTitleAlign: "center",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
