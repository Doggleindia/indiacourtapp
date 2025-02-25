import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  icon: JSX.Element;
  label: string;
  onPress?: () => void;
};

export default function SettingsOption({ icon, label, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <Text style={styles.label}>{label}</Text>

      <Entypo name="chevron-right" size={24} color="gray" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    borderBottomWidth: 1,
    borderColor: "#A8B3C7",
    paddingVertical: 12,
    paddingHorizontal: 2,
  },
  label: {
    flex: 1,
    color: "black",
    fontWeight: "bold",
  },
});
