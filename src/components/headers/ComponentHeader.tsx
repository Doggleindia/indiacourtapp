import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function ComponentHeader({
  title,
  onPress,
}: {
  title: string;
  onPress?: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.leftContainer} onPress={onPress}>
        <Text>View All</Text>
        <AntDesign name="arrowright" size={20} />
      </TouchableOpacity>
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
