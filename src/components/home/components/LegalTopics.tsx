import { StyleSheet, View } from "react-native";
import React from "react";
import ComponentHeader from "@/components/headers/ComponentHeader";
import { MaterialIcons } from "@expo/vector-icons";
import IconTextCard from "@/components/iconTextCard/IconTextCard";

const color = "#F26727";
const size = 40;
const topicsCards = [
  {
    text: "Constitution Law",
    icon: <MaterialIcons name="home" size={size} color={color} />,
  },
  {
    text: "Family Law",
    icon: <MaterialIcons name="book" size={size} color={color} />,
  },
  {
    text: "Child Welfare",
    icon: <MaterialIcons name="house" size={size} color={color} />,
  },

  {
    text: "Constitution Law",
    icon: <MaterialIcons name="home" size={size} color={color} />,
  },
  {
    text: "Family Law",
    icon: <MaterialIcons name="book" size={size} color={color} />,
  },
  {
    text: "Child Welfare",
    icon: <MaterialIcons name="house" size={size} color={color} />,
  },
];

export default function LegalTopics() {
  return (
    <View style={styles.container}>
      <ComponentHeader title="Legal Topics" />

      <View style={styles.cardsContainer}>
        {topicsCards.map((topic, _) => (
          <IconTextCard {...topic} key={_} />
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
});
