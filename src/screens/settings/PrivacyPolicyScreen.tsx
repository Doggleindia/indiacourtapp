import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

export default function PrivacyPolicyScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Privacy Policy</Text>
      <View style={styles.block} />
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>

      <Text style={styles.title}>Terms and Conditions</Text>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>

      <Text style={styles.copyright}>© Copyright 2021-2024</Text>

      <View style={{ position: "absolute", bottom: 20, right: 20 }}>
        <Entypo
          name="chat"
          size={24}
          color="white"
          style={{ backgroundColor: "#0072B1", padding: 8, borderRadius: 50 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
    gap: 16,
  },
  title: {
    color: "#1B1E21",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 12,
  },
  content: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "semibold",
  },
  block: {
    backgroundColor: "#C4C4C4",
    width: 116,
    height: 34,
    marginHorizontal: "auto",
  },
  copyright: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 12,
  },
});
