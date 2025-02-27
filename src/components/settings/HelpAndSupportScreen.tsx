import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import SearchInput from "../resources/components/SearchInput";
import { Divider } from "react-native-paper";
import FAQItem from "./components/FAQItem";
import { Entypo } from "@expo/vector-icons";

const FAQs = [
  {
    question: "How can we help you?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Legal and law advices.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Get compensation for your injuries.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    question: "Our mission is Your Success.",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function HelpAndSupportScreen() {
  const [openFAQ, setOpenFAQ] = useState(-1);

  const toggleOpen = (index: number) =>
    setOpenFAQ((prev) => (prev === index ? -1 : index));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help & Support</Text>
      <SearchInput />

      <View>
        <Text style={[styles.title, { fontSize: 24 }]}>
          Frequently Asked Questions
        </Text>

        <Divider
          style={{ height: 1, backgroundColor: "#C08729", marginTop: 8 }}
        />

        {FAQs.map((faq, index) => (
          <FAQItem
            {...faq}
            key={index}
            isOpen={index === openFAQ}
            toggleOpen={() => toggleOpen(index)}
          />
        ))}
      </View>

      <View style={{ position: "absolute", bottom: 20, right: 20 }}>
        <Entypo
          name="chat"
          size={24}
          color="white"
          style={{ backgroundColor: "#0072B1", padding: 8, borderRadius: 50 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "white",
    gap: 16,
  },
  title: {
    color: "#1B1E21",
    fontSize: 30,
    fontWeight: "600",
    marginTop: 8,
  },
});
