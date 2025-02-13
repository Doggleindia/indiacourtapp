import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function JudgementCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Supreme court judgement</Text>
      <Text style={styles.description}>
        NOIDA Toll Bridge Company Ltd. Vs. Federation of NOIDA Residents Welfare
        Association
      </Text>
      <Text style={styles.content}>
        The NOIDA Toll Bridge Company Limited (NTBCL), has preferred the instant
        appeal questioning the judgement dated 26.10.2016 passed by the High
        Court of Judicature at Allahabad (High Court). The issue before the High
        Court concerned a challenge to the collection and levying of toll, as
        legitimised by the provisions enumerated in the Agreement dated
        12.11.1997
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { borderWidth: 1, borderColor: "#F0E5D4", padding: 10, gap: 8 },
  title: { fontSize: 14, color: "#BF9874" },
  description: { fontSize: 16, color: "#07070B" },
  content: { fontSize: 12, color: "#808080" },
});
