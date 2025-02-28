import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ArticleContent from "../articles/components/ArticleContent";
import JudgementCard from "../home/components/JudgementCard";

export default function JudgementDetailsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <ArticleContent
        heading="NOIDA Toll Bridge Company Ltd. Vs. Federation of NOIDA Residents Welfare Association"
        content="The NOIDA Toll Bridge Company Limited (NTBCL), has preferred the instant appeal questioning the judgement dated 26.10.2016 passed by the High Court of Judicature at Allahabad (High Court). The issue before the High Court concerned a challenge to the collection and levying of toll, as legitimised by the provisions enumerated in the Agreement dated 12.11.1997"
      />

      <View style={{ gap: 20, marginTop: 10 }}>
        <Text style={{ fontSize: 20, color: "#1B1E21", fontWeight: "bold" }}>
          Browse More
        </Text>

        <JudgementCard
          label="Supreme Court"
          heading="NOIDA Toll Bridge Company Ltd. Vs. Federation of NOIDA"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    paddingBottom: 0,
    flex: 1,
    gap: 10,
  },
});
