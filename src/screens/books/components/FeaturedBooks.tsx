import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { bookCards } from "@/screens/books/Books";
const Book1 = require("../../../../assets/images/home/book1.png");

export default function FeaturedBooks() {
  const router = useRouter();
  const featuredBooks = [bookCards[0], bookCards[1], bookCards[2]];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Featured Books</Text>

      <View style={styles.cardsContainer}>
        {featuredBooks.map((book, _) => (
          <TouchableOpacity
            key={_}
            style={styles.cardContainer}
            onPress={() =>
              router.push({
                pathname: "/(notabs)/bookDetails",
                params: { ...book },
              })
            }
          >
            <View style={styles.imageContainer}>
              <Image
                source={Book1}
                style={{ width: 70, maxHeight: 70 }}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.title}>{book.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { gap: 12 },
  heading: {
    fontSize: 20,
    color: "#1B1E21",
    fontWeight: "bold",
  },
  cardsContainer: { flexDirection: "row", justifyContent: "space-between" },
  cardContainer: { maxWidth: "25%", gap: 4 },
  title: { fontSize: 12, color: "#3F4242" },
  imageContainer: {
    borderWidth: 1,
    padding: 8,
    borderColor: "#A8ADB3",
    alignItems: "center",
    justifyContent: "center",
  },
});
