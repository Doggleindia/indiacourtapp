import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../headers/Header";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import IconTextCard from "../iconTextCard/IconTextCard";

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
      text: "Other Services",
      onPress: () => router.push("/(tabs)/(categories)/other-services"),
      icon: <MaterialIcons name="settings" size={size} color={color} />,
    },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
      <Header title="Categories" />
      <View style={styles.container}>
        {cards.map((card, _) => (
          <IconTextCard {...card} key={_} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "center",
    gap: 6,
    rowGap: 16,
    flexWrap: "wrap",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    borderRadius: 4,
    paddingVertical: 24,
    backgroundColor: "white",
    shadowColor: "rgba(0, 0, 0, 1)",
    shadowOffset: { width: 4, height: 8 },
    shadowOpacity: 0.68,
    shadowRadius: 8,
    elevation: 8,
    width: "30%",
  },
});
