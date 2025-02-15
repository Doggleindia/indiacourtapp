import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Book } from "../../../../app/(notabs)/bookDetails";
import { AntDesign } from "@expo/vector-icons";
import SubmitButton from "@/components/auth/components/SubmitButton";

export default function BookDetails({ title, version, description }: Book) {
  return (
    <View>
      <View>
        <Text style={styles.version}>{version}</Text>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>

      <View style={styles.reviewsContainer}>
        {[1, 2, 3, 4, 5].map((val) => (
          <AntDesign name="star" size={18} color="#C08729" key={val} />
        ))}

        <Text style={styles.reviewsText}>12 Reviews</Text>
      </View>

      <SubmitButton
        label="Read Now"
        onPress={() => {}}
        buttonStyles={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  version: { color: "#3A3A38" },
  title: { color: "#1B1E21", fontSize: 24, fontWeight: "bold" },
  description: { color: "#3F4242", fontSize: 12 },
  button: { alignSelf: "flex-start", marginTop: 20, paddingHorizontal: 24 },
  reviewsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  reviewsText: { fontSize: 12, color: "#000000", marginLeft: 10 },
});
