import { Image, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Book } from "../../../app/(notabs)/bookDetails";
import FeaturedBooks from "./components/FeaturedBooks";
import BookDetails from "./components/BookDetails";
const Book2 = require("../../../assets/images/home/book2.png");

export default function BookDetailsScreen(book: Book) {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ paddingVertical: 20, alignItems: "center" }}
    >
      <View style={{ width: "80%", gap: 20 }}>
        <View style={styles.imageContainer}>
          <Image source={Book2} />
        </View>

        <BookDetails {...book} />

        <FeaturedBooks />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    borderWidth: 1,
    padding: 20,
    borderColor: "#A8ADB3",
    alignItems: "center",
    justifyContent: "center",
  },
});
