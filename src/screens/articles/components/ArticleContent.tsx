import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const LawyerImage = require("../../../../assets/images/articles/lawyer.png");

type Props = {
  heading: string;
  content: string;
};

export default function ArticleContent({ heading, content }: Props) {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image
          source={LawyerImage}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>

      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.content}>{content}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: { maxHeight: "30%" },
  heading: { color: "#07070B", fontSize: 24, fontWeight: "700" },
  content: { color: "#1B1E21", fontSize: 14 },
});
