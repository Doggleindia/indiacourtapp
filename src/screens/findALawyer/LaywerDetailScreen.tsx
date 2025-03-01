import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LawyerCard from "./components/LawyerCard";
import SubmitButton from "../auth/components/SubmitButton";

export default function LaywerDetailScreen() {
  const lawyer = {
    name: "Adv. Sameer Rahane",
    stars: 5,
    location: "Mumbai",
    field: "Property Lawyer",
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 20 }}>
      <LawyerCard {...lawyer} showButton={false} />

      <View style={{ alignItems: "flex-end" }}>
        <SubmitButton
          label="Book Appointment"
          onPress={() => {}}
          buttonStyles={{ paddingHorizontal: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
