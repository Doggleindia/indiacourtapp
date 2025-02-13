import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const BookImage = require("../../../assets/images/home/book1.png");

type Props = {
  version: string;
  title: string;
};

export default function BookCard({ title, version }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={BookImage} resizeMode="cover" />
      </View>
      <Text style={styles.version}>{version}</Text>
      <Text>{title}</Text>
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
});
