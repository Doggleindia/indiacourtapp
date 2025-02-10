import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/headers/Header";

export default function Profile() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Header title="Profile" />

      <TouchableOpacity
        onPress={() => router.push("/(tabs)/(profile)/(settings)")}
      >
        <Text>Settings</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
