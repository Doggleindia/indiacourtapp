import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useMemo, useState } from "react";
import WordMeaning from "./components/WordMeaning";
import Header from "@/components/headers/Header";
import { full_glossary } from "./full_glossary";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function GlossaryScreen() {
  const [selectedChar, setSelectedChar] = useState("A");
  const onSelect = (char: string) => setSelectedChar(char);

  const glossary = useMemo(() => {
    return full_glossary[selectedChar.toLowerCase()];
  }, [selectedChar]);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header title="Glossary" backButtonVisisble />

      <View style={styles.container}>
        <View style={styles.alphabetsContainer}>
          {alphabets.map((char, _) => (
            <TouchableOpacity key={_} onPress={() => onSelect(char)}>
              <Text
                style={[styles.char, selectedChar === char && { fontSize: 18 }]}
              >
                {char}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {glossary.length === 0 ? (
          <Text>No Items</Text>
        ) : (
          <FlatList
            data={glossary}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.wordsContainer}
            renderItem={({ item, index }) => (
              <WordMeaning {...item} key={index} />
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 20 },
  alphabetsContainer: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
    alignItems: "center",
  },
  char: { color: "#C08729", fontWeight: "semibold", fontSize: 16 },
  wordsContainer: { gap: 8 },
});
