import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Divider } from "react-native-paper";

type Props = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
};

export default function FAQItem({
  question,
  answer,
  isOpen,
  toggleOpen,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.question}>{question}</Text>
        <TouchableOpacity onPress={toggleOpen}>
          <Entypo
            name={isOpen ? "chevron-up" : "chevron-down"}
            size={24}
            color="#C08729"
          />
        </TouchableOpacity>
      </View>
      {isOpen && <Text style={styles.answer}>{answer}</Text>}
      <Divider
        style={{ height: 1, backgroundColor: "#C08729", marginTop: 8 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingVertical: 12 },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  question: {
    fontSize: 16,
    color: "black",
    fontWeight: "semibold",
    textAlign: "center",
    flex: 1,
  },
  answer: {
    textAlign: "center",
    color: "#808080",
    marginTop: 8,
  },
});
