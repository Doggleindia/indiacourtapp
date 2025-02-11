import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TabItem({
  title,
  selected,
}: {
  title: string;
  selected: boolean;
}) {
  return (
    <View style={selected ? styles.selectedCard : styles.card}>
      <Text style={selected ? styles.selectedTitle : styles.title}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderColor: "#056B38",
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
  },
  selectedCard: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: "#056B38",
  },
  title: {},
  selectedTitle: {
    color: "#FFF",
  },
});
