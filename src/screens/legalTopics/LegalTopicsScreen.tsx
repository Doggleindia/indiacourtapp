import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/headers/Header";
import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import IconTextCard from "@/components/iconTextCard/IconTextCard";

const color = "#F26727";
const size = 30;
const legalTopics = [
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

export default function LegalTopicsScreen() {
  return (
    <View style={styles.container}>
      <Header title="Legal Topics" backButtonVisisble />
      <ScrollView>
        <View style={[styles.container, { padding: 20 }]}>
          <View style={styles.cardsContainer}>
            {legalTopics.map((topic, _) => (
              <View key={_} style={styles.card}>
                <IconTextCard {...topic} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    flexWrap: "wrap",
  },
  card: {
    maxHeight: 100,
    flexGrow: 1,
    width: "45%",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    alignItems: "stretch",
  },
});
