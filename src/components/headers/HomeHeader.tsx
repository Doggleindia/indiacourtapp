import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";

export const HomeHeaderLeft = () => {
  return (
    <View style={styles.leftContainer}>
      <Text style={styles.text}>M</Text>
    </View>
  );
};
export const HomeHeaderRight = () => {
  return (
    <View style={styles.rightContainer}>
      <FontAwesome name="bell" size={25} color="#F26727" />
      <Feather name="menu" size={30} color="#F26727" />
    </View>
  );
};

const styles = StyleSheet.create({
  leftContainer: {
    marginLeft: 20,
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: "#F26828",
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginRight: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
});
