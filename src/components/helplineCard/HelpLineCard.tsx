import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  title: string;
  number: number | string;
};

export default function HelpLineCard({ title, number }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FEF0EA",
    borderRadius: 12,
    padding: 15,
  },
  title: { fontSize: 12, color: "#1B1E21", textAlign: "center" },
  number: { fontSize: 12, color: "#C08729", textAlign: "center" },
});
