import { StyleSheet, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "@/components/headers/Header";
import IconTextCard from "@/components/iconTextCard/IconTextCard";

export default function CategoriesScreen() {
  const router = useRouter();
  const color = "#F26727";
  const size = 40;

  const cards = [
    {
      text: "Legal Topics",
      onPress: () => router.push("/(tabs)/(categories)/legalTopics"),
      icon: <MaterialIcons name="home" size={size} color={color} />,
    },
    {
      text: "Books",
      onPress: () => router.push("/(tabs)/(categories)/books"),
      icon: <MaterialIcons name="book" size={size} color={color} />,
    },
    {
      text: "Judgements",
      onPress: () => router.push("/(tabs)/(categories)/judgements"),
      icon: <MaterialIcons name="house" size={size} color={color} />,
    },
    {
      text: "Glossary",
      onPress: () => router.push("/(tabs)/(categories)/glossary"),
      icon: <MaterialIcons name="library-books" size={size} color={color} />,
    },
    {
      text: "Helpline Numbers",
      onPress: () => router.push("/(tabs)/(categories)/helpline"),
      icon: <MaterialIcons name="call" size={size} color={color} />,
    },
    {
      text: "Bare Acts",
      onPress: () => router.push("/(tabs)/(categories)/bare-acts"),
      icon: <MaterialIcons name="search" size={size} color={color} />,
    },
    {
      text: "Resources",
      onPress: () => router.push("/(tabs)/(categories)/resources"),
      icon: <MaterialIcons name="book" size={size} color={color} />,
    },
    {
      text: "Articles",
      onPress: () => router.push("/(tabs)/(categories)/articles"),
      icon: <MaterialIcons name="article" size={size} color={color} />,
    },
    {
      text: "Other Services",
      onPress: () => router.push("/(tabs)/(categories)/other-services"),
      icon: <MaterialIcons name="settings" size={size} color={color} />,
    },
  ];

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Header title="Categories" />

      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          {cards.map((card, _) => (
            <View key={_} style={styles.card}>
              <IconTextCard {...card} />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    padding: 20,
  },
  card: {
    maxHeight: 100,
    flexGrow: 1,
    width: "30%",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    rowGap: 10,
    alignItems: "stretch",
  },
});
