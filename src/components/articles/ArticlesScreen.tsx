import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Header from "../headers/Header";
import SearchInput from "../resources/components/SearchInput";

export default function ArticlesScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header title="Articles" backButtonVisisble />
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{ gap: 20 }}
      >
        <SearchInput />
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
