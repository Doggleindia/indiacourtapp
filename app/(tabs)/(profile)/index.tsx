import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Header from "@/components/headers/Header";

export default function Profile() {
  const router = useRouter();

  return (
    <View>
      <Header title="Profile" />

      <TouchableOpacity
        onPress={() => router.push("/(tabs)/(profile)/(settings)")}
      >
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}
