import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SubmitButton from "@/components/auth/components/SubmitButton";

type Props = {
  title: string;
  description: string;
};

export default function ArticleCard({ title, description }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}></View>

      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>

        <View style={styles.buttonContainer}>
          <SubmitButton label="Read Now" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", gap: 20 },
  imageContainer: { flex: 0.5 },
  title: { fontWeight: "bold", fontSize: 16, color: "#07070B" },
  description: { fontWeight: "medium", fontSize: 12, color: "#07070B" },
  rightContainer: { gap: 4, flex: 1 },
  buttonContainer: { alignItems: "flex-start" },
});
