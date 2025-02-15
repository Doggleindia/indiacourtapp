import { StyleSheet, Text, View } from "react-native";
import React from "react";

type GlossaryItem = {
  word: string;
  meaning: string;
};

export default function WordMeaning({ word, meaning }: GlossaryItem) {
  return (
    <View>
      <Text style={styles.word}>{word}</Text>
      <Text>{meaning}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  word: { fontWeight: "bold" },
});
