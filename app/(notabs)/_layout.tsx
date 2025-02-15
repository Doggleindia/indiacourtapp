import BackHeader from "@/components/headers/BackHeader";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "center",
        headerLeft: () => <BackHeader />,
        title: "",
      }}
    >
      <Stack.Screen
        name="bookDetails"
        options={{ title: "Book 1", headerLeft: () => null }}
      />
    </Stack>
  );
}
