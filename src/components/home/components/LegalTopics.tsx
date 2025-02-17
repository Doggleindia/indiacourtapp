import { StyleSheet, View } from "react-native";
import React from "react";
import ComponentHeader from "@/components/headers/ComponentHeader";
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import IconTextCard from "@/components/iconTextCard/IconTextCard";
import { useRouter } from "expo-router";

const color = "#F26727";
const size = 30;
const topicsCards = [
  {
    text: "Constitution Law",
    icon: <FontAwesome6 name="building-columns" size={size} color={color} />,
  },
  {
    text: "Family Law",
    icon: <MaterialIcons name="family-restroom" size={size} color={color} />,
  },
  {
    text: "Child Welfare",
    icon: <FontAwesome5 name="pen-fancy" size={size - 5} color={color} />,
  },

  {
    text: "Constitution Law",
    icon: <FontAwesome6 name="building-columns" size={size} color={color} />,
  },
  {
    text: "Family Law",
    icon: <MaterialIcons name="family-restroom" size={size} color={color} />,
  },
  {
    text: "Child Welfare",
    icon: <FontAwesome5 name="pen-fancy" size={size - 5} color={color} />,
  },
];

export default function LegalTopics() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ComponentHeader
        title="Legal Topics"
        onPress={() => router.push("/(tabs)/(categories)/legalTopics")}
      />

      <View style={styles.cardsContainer}>
        {topicsCards.map((topic, _) => (
          <View key={_} style={styles.card}>
            <IconTextCard {...topic} />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    paddingBottom: 20,
    gap: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    rowGap: 10,
  },
  card: {
    width: "30%",
    flexGrow: 1,
  },
});
