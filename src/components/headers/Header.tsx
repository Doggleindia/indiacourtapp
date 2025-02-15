import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Header({
  title,
  backButtonVisisble,
}: {
  title: string;
  backButtonVisisble?: boolean;
}) {
  const router = useRouter();
  return (
    <View style={styles.header}>
      {backButtonVisisble && (
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={20} color="#1B1E21" />
          <Text style={styles.backText}>BACK</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { gap: 4, paddingTop: 16 },
  backButton: { flexDirection: "row", alignItems: "center", paddingLeft: 10 },
  backText: { marginLeft: 5, fontSize: 18 },
  title: {
    color: "#1B1E21",
    fontSize: 30,
    paddingHorizontal: 16,
    fontWeight: "800",
  },
});
