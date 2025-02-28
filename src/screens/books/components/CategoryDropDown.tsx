import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function CategoryDropDown() {
  return (
    <View style={styles.labelContainer}>
      <Text>Categories</Text>
      <Entypo name="chevron-small-down" size={24} color="#C08729" />
    </View>
  );
}

const styles = StyleSheet.create({
  labelContainer: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderColor: "#C08729",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
