import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: true }}>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="resources/index" options={{ headerShown: false }} />
        <Stack.Screen name="books/index" options={{ headerShown: false }} />
        <Stack.Screen name="glossary/index" options={{ headerShown: false }} />
        <Stack.Screen name="helpline/index" options={{ headerShown: false }} />
        <Stack.Screen name="articles/index" options={{ headerShown: false }} />
        <Stack.Screen
          name="other-services/index"
          options={{ headerShown: false }}
        />
      </Stack>
    </SafeAreaView>
  );
}
