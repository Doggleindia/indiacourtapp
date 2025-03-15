import { StyleSheet, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import Header from "@/components/headers/Header";
import { MaterialIcons } from "@expo/vector-icons";
import IconTextCard from "@/components/iconTextCard/IconTextCard";

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
    {
      text: "Join Our Legal Team",
      onPress: () => router.push("/(tabs)/(services)/join-our-legal-team"),
      icon: <MaterialIcons name="groups" size={size} color={color} />,
    },
  ];

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header title="Services" />

      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          {cards.map((card, _) => (
            <View key={_} style={styles.card}>
              <IconTextCard {...card} containerStyles={{ flex: 0 }} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    padding: 20,
  },
  card: { flexGrow: 1 },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
});
