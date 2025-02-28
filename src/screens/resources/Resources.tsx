import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "@/components/headers/Header";
import SearchInput from "./components/SearchInput";
import ResourceDropDown from "./components/ResourceDropDown";

const resources = [
  {
    id: "I",
    title: "Personal Legal Documents",
    categories: [
      {
        category: "Wills & Estate Planning",
        subItems: [
          "Wills and Testamentary Documents",
          "Living Trusts",
          "Guardian Appointment for Minor Children",
          "Power of Attorney (General & Medical)",
          "Living Wills and Healthcare Directives",
        ],
      },
      {
        category: "Family Law",
        subItems: [
          "Divorce Agreements",
          "Child Custody",
          "Prenuptial Agreements",
          "Separation Agreements",
        ],
      },
      {
        category: "Health & Medical",
        subItems: [
          "Medical Power of Attorney",
          "Health Insurance Waiver",
          "Medical Release Form",
        ],
      },
    ],
  },
  {
    id: "II",
    title: "Business & Commercial Documents",
    categories: [
      {
        category: "Contracts",
        subItems: [
          "Business Contracts (General)",
          "Non-Disclosure Agreements (NDAs)",
          "Franchise Agreements",
          "Employment Contracts",
          "Freelance/Contractor Agreements",
        ],
      },
      {
        category: "Intellectual Property",
        subItems: [
          "Copyright Assignment Agreements",
          "Trademark License Agreements",
          "Non-Compete Agreements",
        ],
      },
      {
        category: "Business Transactions",
        subItems: [
          "Shareholder Agreements",
          "Partnership Agreements",
          "Loan Agreements",
          "Debt Repayment Agreements",
        ],
      },
    ],
  },
  {
    id: "III",
    title: "Event & Social Media Documents",
    categories: [
      {
        category: "Event Planning",
        subItems: ["Event Planning Agreements", "Vendor Contracts for Events"],
      },
      {
        category: "Social Media & Online Use",
        subItems: ["Social Media Policy", "Online Service Agreements"],
      },
    ],
  },
  {
    id: "IV",
    title: "Event & Social Media Documents",
    categories: [
      {
        category: "Event Planning",
        subItems: ["Event Planning Agreements", "Vendor Contracts for Events"],
      },
      {
        category: "Social Media & Online Use",
        subItems: ["Social Media Policy", "Online Service Agreements"],
      },
    ],
  },
  {
    id: "V",
    title: "Event & Social Media Documents",
    categories: [
      {
        category: "Event Planning",
        subItems: ["Event Planning Agreements", "Vendor Contracts for Events"],
      },
      {
        category: "Social Media & Online Use",
        subItems: ["Social Media Policy", "Online Service Agreements"],
      },
    ],
  },
  {
    id: "VI",
    title: "Event & Social Media Documents",
    categories: [
      {
        category: "Event Planning",
        subItems: ["Event Planning Agreements", "Vendor Contracts for Events"],
      },
      {
        category: "Social Media & Online Use",
        subItems: ["Social Media Policy", "Online Service Agreements"],
      },
    ],
  },
];

export default function ResourcesScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header title="Resources" backButtonVisisble />
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{ gap: 20 }}
      >
        <SearchInput />

        <View>
          {resources.map((resource, index) => (
            <View
              style={[styles.resource, index == 0 && { borderTopWidth: 1 }]}
              key={resource.id}
            >
              <ResourceDropDown {...resource} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 16,
  },
  resource: {
    borderColor: "#C08729",
    borderBottomWidth: 1,
  },
});
