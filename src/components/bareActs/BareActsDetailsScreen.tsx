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

export default function BareActsDetailsScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, backgroundColor: "#FFF", padding: 16, gap: 16 }}>
      <Text style={styles.heading}>Absorbed Areas (Laws) Act, 1954</Text>

      <ScrollView
        style={styles.mainContainer}
        contentContainerStyle={{ gap: 20 }}
      >
        <View style={{ width: "100%" }}>
          <View style={[styles.bareAct, { borderTopWidth: 1 }]}>
            <BareActItem
              text="Particulars"
              index=""
              textStyles={{ color: "#C08729", textDecorationLine: "none" }}
            />
          </View>
          {bareActs.map((bareAct, index) => (
            <TouchableOpacity
              style={styles.bareAct}
              key={index}
              onPress={() => router.push("/bare-acts/bare-acts-particular")}
            >
              <BareActItem
                text={bareAct}
                index={index + 1}
                indexStyles={{ color: "#C08729" }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  bareAct: { borderColor: "#C08729", borderBottomWidth: 1 },
  heading: {
    color: "#C08729",
    fontWeight: "semibold",
    fontSize: 20,
  },
});
