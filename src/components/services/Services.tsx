import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../headers/Header";
import { MaterialIcons } from "@expo/vector-icons";
import IconTextCard from "../iconTextCard/IconTextCard";

export default function ServicesScreen() {
  const router = useRouter();
  const color = "#F26727";
  const size = 40;

  const cards = [
    {
      text: "Find Your Lawyer",
      onPress: () => router.push("/(tabs)/(services)/find-your-lawyer"),
      icon: <MaterialIcons name="man" size={size} color={color} />,
    },
    {
      text: "Validate Your Legal Documents",
      onPress: () => router.push("/(tabs)/(services)/validate-documents"),
      icon: <MaterialIcons name="book" size={size} color={color} />,
    },
    {
      text: "Dispute Resolution Tool",
      onPress: () => router.push("/(tabs)/(services)/dispute-resolution"),
      icon: <MaterialIcons name="menu-open" size={size} color={color} />,
    },
    {
      text: "Court Cases Status Checker",
      onPress: () => router.push("/(tabs)/(services)/case-status-checker"),
      icon: <MaterialIcons name="question-mark" size={size} color={color} />,
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Header title="Services" />

      <View style={styles.container}>
        {cards.map((card, _) => (
          <IconTextCard {...card} key={_} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    gap: 12,
    rowGap: 16,
    flexWrap: "wrap",
  },
});
