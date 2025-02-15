import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Header from "../headers/Header";
import SearchInput from "../resources/components/SearchInput";
import CategoryDropDown from "./components/CategoryDropDown";
import BookCard from "../bookCard/BookCard";
import { useRouter } from "expo-router";

export const bookCards = [
  {
    version: "English Version",
    title: "Family Law I",
    description:
      "Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentes urna libero",
  },
  {
    version: "English Version",
    title: "Family Law II",
    description:
      "Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentes urna libero",
  },
  {
    version: "English Version",
    title: "Jurisprudence India Court",
    description:
      "Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentes urna libero",
  },
  {
    version: "English Version",
    title: "The Indian Contract Act, 1872",
    description:
      "Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentes urna libero",
  },
  {
    version: "English Version",
    title: "Bhartiya Nyaay Itihaas",
    description:
      "Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentes urna libero",
  },
  {
    version: "Hindi Version",
    title: "Bhartiya Nyaay Itihaas",
    description:
      "Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentes urna libero",
  },
  {
    version: "Hindi Version",
    title: "Bhartiya Nyaay Itihaas",
    description:
      "Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentes urna libero",
  },
  {
    version: "Hindi Version",
    title: "Bhartiya Nyaay Itihaas",
    description:
      "Lorem ipsum dolor sit amet consecter Commodo pulvinar molestie pellentes urna libero",
  },
];

export default function BooksScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header title="Books" backButtonVisisble />
      <View style={styles.mainContainer}>
        <SearchInput />
        <CategoryDropDown />

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.cardsContainer}>
            {bookCards.map((book, _) => (
              <TouchableOpacity
                key={_}
                onPress={() =>
                  router.push({
                    pathname: "/(notabs)/bookDetails",
                    params: { ...book },
                  })
                }
              >
                <BookCard {...book} isHorizontal />
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
    gap: 20,
  },
  resource: {
    borderColor: "#C08729",
    borderBottomWidth: 1,
  },
  cardsContainer: { gap: 10 },
});
