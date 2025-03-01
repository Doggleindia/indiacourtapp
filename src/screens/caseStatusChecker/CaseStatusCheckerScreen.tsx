import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import IconTextCard from "@/components/iconTextCard/IconTextCard";
import NumbeIcon from "../findALawyer/components/NumbeIcon";
import TabItem from "@/components/tabItem/TabItem";
import Input from "../enquiry/components/Input";
import Captcha from "./components/Captcha";
import SubmitButton from "../auth/components/SubmitButton";
import { useRouter } from "expo-router";

export default function CaseStatusCheckerScreen() {
  const router = useRouter();
  const cards = [
    "Expert Guidance",
    "Simple Process",
    "Time and Cost Effective",
  ];
  const tabs = ["Supreme Court", "High Court"];

  const handleSearch = () => router.push("/case-status-checker/case-details");

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <Text style={styles.heading}>Court case Status Checker</Text>
        <Text style={styles.description}>
          The Dispute Resolution Tool is designed to help you navigate the
          complexities of mediation and arbitration with ease.
        </Text>

        <View style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <IconTextCard
              key={index}
              text={card}
              containerStyles={{ justifyContent: "flex-start" }}
              icon={<NumbeIcon number={index + 1} />}
            />
          ))}
        </View>

        <View style={styles.tabs}>
          {tabs.map((tab, index) => (
            <View style={{ flex: 1 }} key={index}>
              <TabItem title={tab} selected={index === 0} />
            </View>
          ))}
        </View>

        <View style={styles.formContainer}>
          <Input placeholder="Case Type" />
          <Input placeholder="Case Number" />
          <Input placeholder="Case Year" />

          <View style={{ marginTop: 10 }}>
            <Captcha />
          </View>
        </View>

        <View style={{ marginTop: 12, alignItems: "center" }}>
          <SubmitButton
            label="Search"
            onPress={handleSearch}
            buttonStyles={{ paddingHorizontal: 20 }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: "#1B1E21",
    fontSize: 30,
    fontWeight: "bold",
  },
  description: { fontSize: 16, marginTop: 16 },
  cardsContainer: {
    flexDirection: "row",
    gap: 10,
    marginVertical: 20,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  formContainer: { gap: 10, marginTop: 20 },
});
