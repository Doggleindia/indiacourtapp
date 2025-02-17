import { Image, StyleSheet, View } from "react-native";
import React from "react";
import ComponentHeader from "@/components/headers/ComponentHeader";
import TabItem from "@/components/tabItem/TabItem";
import JudgementCard from "./JudgementCard";
import { useRouter } from "expo-router";
const JudgementLawyerImage = require("../../../../assets/images/home/judgement_lawyer.png");

const judgementTabs = [
  "Supreme Court",
  "High Court",
  "Lok Sabha",
  "Rajya Sabha",
];

export default function Judgements() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ComponentHeader
        title="Judgements"
        onPress={() => router.push("/(tabs)/(categories)/judgements")}
      />

      <View style={styles.tabsContainer}>
        {judgementTabs.map((tab, _) => (
          <View style={styles.tabContainer} key={_}>
            <TabItem title={tab} selected={_ === 0} />
          </View>
        ))}
      </View>
      <Image source={JudgementLawyerImage} />

      <JudgementCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    paddingBottom: 20,
    gap: 20,
    backgroundColor: "#FFEDE4",
  },
  tabsContainer: { flexDirection: "row", justifyContent: "space-between" },
  tabContainer: { width: "21%" },
});
