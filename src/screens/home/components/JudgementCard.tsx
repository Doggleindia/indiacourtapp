import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  label: string;
  heading: string;
  description?: string;
};

export default function JudgementCard({ label, heading, description }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{label}</Text>
      <Text style={styles.description}>{heading}</Text>
      {description && <Text style={styles.content}>{description}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderWidth: 1, borderColor: "#F0E5D4", padding: 10, gap: 8 },
  title: { fontSize: 14, color: "#BF9874" },
  description: { fontSize: 16, color: "#07070B" },
  content: { fontSize: 12, color: "#808080" },
});
