import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function IconTextCard({
  icon,
  text,
  onPress,
}: {
  icon: JSX.Element;
  text: string;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      {icon}
      <Text style={{ textAlign: "center" }}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 4,
    paddingVertical: 24,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.68,
    shadowRadius: 8,
    elevation: 8,
    width: "40%",
  },
});
