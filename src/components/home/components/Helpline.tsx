import { StyleSheet, View } from "react-native";
import React from "react";
import ComponentHeader from "@/components/headers/ComponentHeader";
import HelpLineCard from "@/components/helplineCard/HelpLineCard";

const helplineCards = [
  { title: "Emergnecy", number: 112 },
  { title: "Ambulance", number: 102 },
  { title: "Police", number: "100 or 112" },
  { title: "Women Helpline", number: 1091 },
];

export default function Helpline() {
  return (
    <View style={styles.container}>
      <ComponentHeader title="Helpline Numbers" />

      <View style={styles.cardsContainer}>
        {helplineCards.map((helpineCard, _) => (
          <View style={styles.card} key={_}>
            <HelpLineCard {...helpineCard} />
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
    gap: 20,
    flexWrap: "wrap",
  },
  card: { flexGrow: 1 },
});
