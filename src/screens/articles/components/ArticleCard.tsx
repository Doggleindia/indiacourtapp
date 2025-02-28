import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";
import { useRouter } from "expo-router";
import SubmitButton from "@/screens/auth/components/SubmitButton";
const LawStatue = require("../../../../assets/images/articles/law_queen.png");

type Props = {
  title: string;
  description: string;
};

export default function ArticleCard({ title, description }: Props) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={LawStatue}
          style={{ flex: 1, width: "100%", height: "100%" }}
        />
      </View>

      <View style={styles.rightContainer}>
        <Text style={styles.title}>{title}</Text>
        <Divider />
        <Text style={styles.description}>{description}</Text>

        <View style={styles.buttonContainer}>
          <SubmitButton
            label="Read Now"
            onPress={() => router.push("/articles/article-details")}
          />
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
