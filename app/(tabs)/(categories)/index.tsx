import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "@/components/headers/Header";

export default function Categories() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Header title="Categories" />
      <View
        style={{ flexDirection: "row", padding: 20, gap: 20, flexWrap: "wrap" }}
      >
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(categories)/legalTopics")}
        >
          <Text style={{ textAlign: "center" }}>Legal Topics</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(categories)/books")}
        >
          <Text style={{ textAlign: "center" }}>Books</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(categories)/judgements")}
        >
          <Text style={{ textAlign: "center" }}>Judgements</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(categories)/glossary")}
        >
          <Text style={{ textAlign: "center" }}>Glossary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(categories)/helpline")}
        >
          <Text style={{ textAlign: "center" }}>Helpline Numbers</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(categories)/bare-acts")}
        >
          <Text style={{ textAlign: "center" }}>Bare Acts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(categories)/resources")}
        >
          <Text style={{ textAlign: "center" }}>Resources</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/(tabs)/(categories)/other-services")}
        >
          <Text style={{ textAlign: "center" }}>Other Services</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
