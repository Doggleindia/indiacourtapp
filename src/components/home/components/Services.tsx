import { StyleSheet, View } from "react-native";
import React from "react";
import ComponentHeader from "@/components/headers/ComponentHeader";
import { FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import IconTextCard from "@/components/iconTextCard/IconTextCard";
import { useRouter } from "expo-router";

const color = "#F26727";
const size = 30;
const servicesCards = [
  {
    text: "Find Your Lawyer",
    icon: <FontAwesome6 name="building-columns" size={size} color={color} />,
  },
  {
    text: "Validate Documents",
    icon: <FontAwesome5 name="pen-fancy" size={size - 5} color={color} />,
  },
  {
    text: "Dispute Resolution Tool",
    icon: <FontAwesome5 name="pen-fancy" size={size - 5} color={color} />,
  },
];

export default function Services() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ComponentHeader
        title="Services"
        onPress={() => router.push("/(tabs)/(services)")}
      />

      <View style={styles.cardsContainer}>
        {servicesCards.map((service, _) => (
          <View style={styles.card} key={_}>
            <IconTextCard {...service} />
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
    justifyContent: "space-between",
  },
  card: {
    maxWidth: "30%",
    flexGrow: 1,
  },
});
