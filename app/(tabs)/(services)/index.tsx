import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/headers/Header";

export default function Services() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Header title="Services" />

      <View
        style={{ flexDirection: "row", padding: 20, gap: 20, flexWrap: "wrap" }}
      >
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(services)/find-your-lawyer")}
        >
          <Text style={{ textAlign: "center" }}>Find Your Lawyer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(services)/validate-documents")}
        >
          <Text style={{ textAlign: "center" }}>
            Validate Your Legal Documents
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(services)/dispute-resolution")}
        >
          <Text style={{ textAlign: "center" }}>Dispute Resolution Tool</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(services)/case-status-checker")}
        >
          <Text style={{ textAlign: "center" }}>
            Court Cases Status Checker
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
