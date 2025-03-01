import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function NumbeIcon({ number }: { number: number }) {
  return (
    <View style={styles.circle}>
      <Text style={styles.circleText}>{number + 1}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "#C08729",
    width: 24,
    height: 24,
    borderRadius: 50,
    marginBottom: 4,
  },
  circleText: {
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    left: -4,
    top: -10,
  },
});
