import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Header from "@/components/headers/Header";
import SearchInput from "../resources/components/SearchInput";
import JudgementCard from "../home/components/JudgementCard";
import { router } from "expo-router";
import TabItem from "@/components/tabItem/TabItem";
const JudgementsImage = require("../../../assets/images/judgments/judgements.png");

const billsTabs = ["Lok Sabha", "Rajya Sabha"];

export default function BillsScreen() {
  const [selected, setSelected] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header title="Bills" backButtonVisisble />
      <View style={styles.mainContainer}>
        <SearchInput />

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

        <ScrollView
          contentContainerStyle={{ paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={{ gap: 20, paddingBottom: 10 }}>
            <View style={styles.imageContainer}>
              <Image
                source={JudgementsImage}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
            <JudgementCard
              label={billsTabs[selected] + " Bill"}
              heading="NOIDA Toll Bridge Company Ltd. Vs. Federation of NOIDA Residents Welfare Association"
              description="The NOIDA Toll Bridge Company Limited (NTBCL), has preferred the instant
                              appeal questioning the judgement dated 26.10.2016 passed by the High
                              Court of Judicature at Allahabad (High Court). The issue before the High
                              Court concerned a challenge to the collection and levying of toll, as
                              legitimised by the provisions enumerated in the Agreement dated
                              12.11.1997"
            />

            <View style={{ gap: 20, marginTop: 10 }}>
              <Text
                style={{ fontSize: 20, color: "#1B1E21", fontWeight: "bold" }}
              >
                Browse More
              </Text>

              <TouchableOpacity
                onPress={() => router.push("/bills/bill-details")}
              >
                <JudgementCard
                  label={billsTabs[selected]}
                  heading="NOIDA Toll Bridge Company Ltd. Vs. Federation of NOIDA"
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: 20,
    padding: 16,
    paddingBottom: 0,
  },
  resource: {
    borderColor: "#C08729",
    borderBottomWidth: 1,
  },
  tabsContainer: { flexDirection: "row", gap: 12 },
  tabContainer: { flex: 1 },
  imageContainer: { maxHeight: 250 },
});
