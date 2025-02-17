import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Header from "../headers/Header";
import SearchInput from "../resources/components/SearchInput";
import ArticleCard from "./components/ArticleCard";

const articles = [
  {
    title: "7 cases have been success",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "7 cases have been success",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "7 cases have been success",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "7 cases have been success",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "7 cases have been success",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export default function ArticlesScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header title="Articles" backButtonVisisble />
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{ gap: 20 }}
      >
        <SearchInput />

        {articles.map((article, index) => (
          <View key={index}>
            <ArticleCard {...article} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
  },
  resource: {
    borderColor: "#C08729",
    borderBottomWidth: 1,
  },
});
