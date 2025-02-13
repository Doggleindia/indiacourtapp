import { StyleSheet, View } from "react-native";
import React from "react";
import ComponentHeader from "@/components/headers/ComponentHeader";
import BookCard from "@/components/bookCard/BookCard";

const bookCards = [
  { version: "English Version", title: "Family Law I" },
  { version: "English Version", title: "Family Law II" },
  { version: "English Version", title: "Family Law I" },
  { version: "English Version", title: "Family Law II" },
];

export default function BooksAndDocs() {
  return (
    <View style={styles.container}>
      <ComponentHeader title="Books and Docs" />

      <View style={styles.cardsContainer}>
        {bookCards.map((book, _) => (
          <BookCard {...book} key={_} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    paddingBottom: 20,
    gap: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 6,
    rowGap: 10,
  },
});
