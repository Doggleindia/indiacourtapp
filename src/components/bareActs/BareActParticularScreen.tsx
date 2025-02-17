import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function BareActsParticularScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF", padding: 16, gap: 16 }}>
      <Text style={styles.heading}>Absorbed Areas (Laws) Act, 1954</Text>

      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{ gap: 20 }}
      >
        <Text style={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  heading: {
    color: "#C08729",
    fontWeight: "semibold",
    fontSize: 20,
  },
  content: {
    color: "#3F4242",
    fontSize: 14,
    fontWeight: "light",
  },
});
