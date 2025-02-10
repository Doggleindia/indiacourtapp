import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function books() {
  const router = useRouter();

  return (
    <View>
      <TouchableOpacity onPress={() => router.push("/(notabs)/bookDetails")}>
        <Text style={{ textAlign: "center" }}>Book 1</Text>
      </TouchableOpacity>
    </View>
  );
}
