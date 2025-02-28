import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import WordMeaning from "./components/WordMeaning";
import Header from "@/components/headers/Header";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const glossary = [
  {
    word: "a fortiori",
    meaning:
      '(ah-for-she-ory) prep. Latin for "with even stronger reason," which applies to a situation in which if one thing is true then it can be inferred that a second thing is even more certainly true. Thus, if Anil is too young to serve as administrator, then his younger brother Amit certainly is too young.',
  },
  {
    word: "a priori assumption",
    meaning:
      "(ah-pree-ory) n. from Latin, an assumption that is true without further proof or need to prove it. It is assumed the sun will come up tomorrow. However, it has a negative side: an a priori assumption made without question on the basis that no analysis or study is necessary, can be mental laziness when the reality is not so certain.",
  },
  {
    word: "a.k.a.",
    meaning:
      'prep. abbreviation for "also known as" when someone uses different initials, a nickname, a maiden or married name. Example: Amit G. Das, a.k.a. A. G. Das, a.k.a. "Snuffy the Snod."',
  },
  {
    word: "ab initio",
    meaning:
      'prep. lawyer Latin for "from the start," as "it was legal ab initio."',
  },
  {
    word: "abandon",
    meaning:
      "v. to intentionally and permanently give up, surrender, leave, desert or relinquish all interest or ownership in property, a home or other premises, a right of way, and even a spouse, family, or children. The word is often used in situations to determine whether a tenant has left his/her apartment and the property inside and does not intend to come back. Thus, a landlord can take over an apparently",
  },
  {
    word: "abandon",
    meaning:
      "v. to intentionally and permanently give up, surrender, leave, desert or relinquish all interest or ownership in property, a home or other premises, a right of way, and even a spouse, family, or children. The word is often used in situations to determine whether a tenant has left his/her apartment and the property inside and does not intend to come back. Thus, a landlord can take over an apparently",
  },
  {
    word: "abandon",
    meaning:
      "v. to intentionally and permanently give up, surrender, leave, desert or relinquish all interest or ownership in property, a home or other premises, a right of way, and even a spouse, family, or children. The word is often used in situations to determine whether a tenant has left his/her apartment and the property inside and does not intend to come back. Thus, a landlord can take over an apparently",
  },
  {
    word: "abandon",
    meaning:
      "v. to intentionally and permanently give up, surrender, leave, desert or relinquish all interest or ownership in property, a home or other premises, a right of way, and even a spouse, family, or children. The word is often used in situations to determine whether a tenant has left his/her apartment and the property inside and does not intend to come back. Thus, a landlord can take over an apparently",
  },
];

export default function GlossaryScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header title="Glossary" backButtonVisisble />

      <View style={styles.container}>
        <View style={styles.alphabetsContainer}>
          {alphabets.map((char, _) => (
            <TouchableOpacity key={_}>
              <Text style={styles.char}>{char}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wordsContainer}>
            {glossary.map((word, _) => (
              <WordMeaning key={_} {...word} />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 20 },
  alphabetsContainer: { flexDirection: "row", gap: 12, flexWrap: "wrap" },
  char: { color: "#C08729", fontWeight: "semibold", fontSize: 16 },
  wordsContainer: { gap: 8 },
});
