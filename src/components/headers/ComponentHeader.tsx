import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ComponentHeader({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.leftContainer}>
        <Text>View All</Text>
        <AntDesign name="arrowright" size={20} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 20, color: "#1B1E21" },
  leftContainer: { flexDirection: "row", gap: 8, alignItems: "center" },
});
