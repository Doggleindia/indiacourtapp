import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import SearchInput from "../resources/components/SearchInput";
import ArticleCard from "./components/ArticleCard";
import Header from "@/components/headers/Header";

const articles = [
  {
    title: "7 cases have been success",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    title: "7 cases have been success",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
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
  {
    title: "7 cases have been success",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

export default function ArticlesScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header title="Articles" backButtonVisisble />
      <View style={styles.mainContainer}>
        <SearchInput />

        <ScrollView
          contentContainerStyle={{ gap: 20, paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
        >
          {articles.map((article, index) => (
            <View key={index}>
              <ArticleCard {...article} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 20,
    padding: 16,
    paddingBottom: 0,
  },
  resource: {
    borderColor: "#C08729",
    borderBottomWidth: 1,
  },
});
