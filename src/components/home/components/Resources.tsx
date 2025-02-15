import { StyleSheet, View } from "react-native";
import React from "react";
import ComponentHeader from "@/components/headers/ComponentHeader";

export default function Resources() {
  return (
    <View style={styles.container}>
      <ComponentHeader title="Resources" />

      <View style={styles.cardsContainer}>
        {[1, 2, 3].map((val) => (
          <View style={styles.card} key={val} />
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
  cardsContainer: { flexDirection: "row", gap: 20 },
  card: { backgroundColor: "#C9BCBC", flex: 1, height: 100 },
});
