import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function judgements() {
  const router = useRouter();
  return (
    <View>
      <Text>judgements</Text>

      <TouchableOpacity
        onPress={() => router.push("/(notabs)/judgementDetails")}
      >
        <Text style={{ textAlign: "center" }}>Judgement 1</Text>
      </TouchableOpacity>
    </View>
  );
}
