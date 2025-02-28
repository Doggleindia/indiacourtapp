import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import BareActItem from "./components/BareActItem";
import { useRouter } from "expo-router";
import Header from "@/components/headers/Header";

const bareActs = [
  "Aadhaar (Targeted Delivery of Financial and other Subsidies, Benefits and Services) Act, 2016",
  "Absorbed Areas (Laws) Act, 1954",
  "Absorbed Areas (Laws) Act, 1954",
  "Absorbed Areas (Laws) Act, 1954",
  "Absorbed Areas (Laws) Act, 1954",
  "Absorbed Areas (Laws) Act, 1954",
  "Absorbed Areas (Laws) Act, 1954",
  "Absorbed Areas (Laws) Act, 1954",
];

export default function BareActsScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header title="Bare Acts" backButtonVisisble />
      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{ gap: 20 }}
      >
        <View style={{ width: "100%" }}>
          {bareActs.map((bareAct, index) => (
            <TouchableOpacity
              onPress={() => router.push("/bare-acts/bare-acts-details")}
              style={[styles.bareAct, index == 0 && { borderTopWidth: 1 }]}
              key={index}
            >
              <BareActItem text={bareAct} index={index + 1} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: 16 },
  bareAct: { borderColor: "#C08729", borderBottomWidth: 1 },
});
