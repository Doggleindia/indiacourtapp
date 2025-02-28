import BackHeader from "@/components/headers/BackHeader";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="bookDetails"
        options={{ title: "Book 1", headerTitleAlign: "center" }}
      />
      <Stack.Screen name="chatWithUs" options={{ headerShown: false }} />
    </Stack>
  );
}
