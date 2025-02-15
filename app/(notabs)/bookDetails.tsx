import React from "react";
import BookDetailsScreen from "@/components/bookDetails/BookDetails";
import { Stack, useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export type Book = {
  title: string;
  version: string;
  description?: string;
};

export default function bookDetails() {
  const { title, description, version } = useLocalSearchParams<Book>();
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen options={{ title }} />
      <BookDetailsScreen
        title={title}
        description={description}
        version={version}
      />
    </View>
  );
}
