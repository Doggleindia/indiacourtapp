import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchInput from "../resources/components/SearchInput";
import LawyerCard from "./components/LawyerCard";

const lawyers = [
  {
    name: "Adv. Sameer Rahane",
    stars: 5,
    location: "Mumbai",
    field: "Property Lawyer",
  },
  {
    name: "Adv. Sameer Rahane",
    stars: 5,
    location: "Mumbai",
    field: "Property Lawyer",
  },
  {
    name: "Adv. Sameer Rahane",
    stars: 5,
    location: "Mumbai",
    field: "Property Lawyer",
  },
  {
    name: "Adv. Sameer Rahane",
    stars: 5,
    location: "Mumbai",
    field: "Property Lawyer",
  },
];

export default function LawyerScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20, gap: 20 }}>
      <SearchInput />

      <View style={styles.cardsContainer}>
        {lawyers.map((lawyer, index) => (
          <LawyerCard key={index} {...lawyer} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    gap: 16,
  },
});
