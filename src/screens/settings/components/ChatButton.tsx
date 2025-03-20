import { TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";

export default function ChatButton() {
  return (
    <TouchableOpacity
      style={{ position: "absolute", bottom: 20, right: 20 }}
      onPress={() => router.push("/chatWithUs")}
    >
      <Entypo
        name="chat"
        size={24}
        color="white"
        style={{ backgroundColor: "#0072B1", padding: 8, borderRadius: 50 }}
      />
    </TouchableOpacity>
  );
}
