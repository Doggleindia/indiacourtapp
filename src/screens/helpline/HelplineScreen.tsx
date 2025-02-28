import { ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Header from "@/components/headers/Header";
import { Picker } from "@react-native-picker/picker";
import HelpLineCard from "@/components/helplineCard/HelpLineCard";

const helplineCards = [
  { title: "Emergnecy", number: 112 },
  { title: "Ambulance", number: 102 },
  { title: "Police", number: "100 or 112" },
  { title: "Women Helpline", number: 1091 },
  { title: "Disaster Management", number: 108 },
  { title: "Child Helpline", number: 1098 },
  { title: "Railway Enquiry", number: 139 },
  { title: "Domestic Abuse", number: 181 },
];
const rajashthanHelplineCards = [
  { title: "Disaster Management", number: 1078 },
  { title: "Anti Poison", number: "1066 or 011-1066" },
  { title: "Road Accident", number: "1073 or 1033" },
  { title: "Senior Citizen", number: "14567" },
];

export default function HelplineScreen() {
  const [selectedState, setSelectedState] = useState();
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header title="Helpline Numbers" backButtonVisisble />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.cardsContainer}>
            {helplineCards.map((card, _) => (
              <View key={_} style={styles.card}>
                <HelpLineCard {...card} />
              </View>
            ))}
          </View>

          <Picker
            style={{ width: "50%", alignSelf: "flex-end" }}
            selectedValue={selectedState}
            mode="dropdown"
            onValueChange={(itemValue, _) => setSelectedState(itemValue)}
          >
            <Picker.Item label="Rajasthan" value="rajasthan" />
            <Picker.Item label="Delhi" value="delhi" />
          </Picker>

          <View style={[styles.cardsContainer, { flex: 1 }]}>
            {rajashthanHelplineCards.map((card, _) => (
              <View key={_} style={styles.card}>
                <HelpLineCard {...card} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 20, flexWrap: "wrap" },
  cardsContainer: { flexDirection: "row", gap: 20, flexWrap: "wrap" },
  card: { flexGrow: 1, width: "45%" },
});
