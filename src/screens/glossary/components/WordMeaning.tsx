import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlossaryItem } from "../full_glossary";

export default function WordMeaning({ term, definition }: GlossaryItem) {
  return (
    <View>
      <Text style={styles.word}>{term}</Text>
      <Text>{definition}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  word: { fontWeight: "bold" },
});
