import { Text, View } from "react-native";
import { Stack } from "expo-router";

export default function HomeScreen() {

  return (
    <>
    <Stack.Screen options={{ headerShown: false }} />
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Text>
hi harshit
</Text>
    </View>
    </>
  );
}
