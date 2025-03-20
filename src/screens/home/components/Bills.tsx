import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import ComponentHeader from "@/components/headers/ComponentHeader";
import TabItem from "@/components/tabItem/TabItem";
import JudgementCard from "./JudgementCard";
import { useRouter } from "expo-router";
const JudgementLawyerImage = require("../../../../assets/images/home/judgement_lawyer.png");

const billsTabs = ["Lok Sabha", "Rajya Sabha"];

export default function Bills() {
  const router = useRouter();
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.container}>
      <ComponentHeader
        title="Bills"
        onPress={() => router.push("/(tabs)/(categories)/judgements")}
      />

      <View style={styles.tabsContainer}>
        {billsTabs.map((tab, index) => (
          <TouchableOpacity
            style={styles.tabContainer}
            key={index}
            onPress={() => setSelected(index)}
          >
            <TabItem title={tab} selected={index === selected} />
          </TouchableOpacity>
        ))}
      </View>
      <Image source={JudgementLawyerImage} />

      <JudgementCard
        label={billsTabs[selected] + " Bill"}
        heading="NOIDA Toll Bridge Company Ltd. Vs. Federation of NOIDA Residents Welfare Association"
        description="The NOIDA Toll Bridge Company Limited (NTBCL), has preferred the instant appeal questioning the judgement dated 26.10.2016 passed by the High Court of Judicature at Allahabad (High Court). The issue before the High Court concerned a challenge to the collection and levying of toll, as legitimised by the provisions enumerated in the Agreement dated 12.11.1997"
      />
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
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  tabContainer: { flex: 1 },
});
