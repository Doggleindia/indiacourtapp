import { StyleSheet, View } from "react-native";
import React from "react";
import ComponentHeader from "@/components/headers/ComponentHeader";
import TabItem from "@/components/tabItem/TabItem";

const categoryTabs = ["Legal Books", "Books", "Judgements", "Resources"];

export default function Categories() {
  return (
    <View style={styles.container}>
      <ComponentHeader title="Categories" />

      <View style={styles.tabsContainer}>
        {categoryTabs.map((tab, _) => (
          <TabItem title={tab} selected={_ === 0} key={_} />
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
    backgroundColor: "#FFEDE4",
  },
  tabsContainer: { flexDirection: "row", justifyContent: "space-between" },
});
