import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const BookImage = require("../../../assets/images/home/book1.png");

type Props = {
  version: string;
  title: string;
  description?: string;
  isHorizontal?: boolean;
};

export default function BookCard({
  title,
  version,
  description,
  isHorizontal,
}: Props) {
  return (
    <View
      style={[
        styles.container,
        isHorizontal && { flexDirection: "row", alignItems: "center", gap: 10 },
      ]}
    >
      <View style={styles.card}>
        <Image source={BookImage} style={{ flex: 1 }} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={styles.version}>{version}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 4 },
  card: {
    padding: 5,
    borderColor: "#C08729",
    borderWidth: 1,
    alignItems: "center",
  },
  version: { color: "#1B1E21", fontSize: 10 },
  title: { color: "#1B1E21", fontSize: 12, fontWeight: "bold" },
  description: { color: "#1B1E21", fontSize: 10 },
});
