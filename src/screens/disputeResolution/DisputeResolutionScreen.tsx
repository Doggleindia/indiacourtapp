import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import IconTextCard from "@/components/iconTextCard/IconTextCard";
import NumbeIcon from "../findALawyer/components/NumbeIcon";
import Input from "../enquiry/components/Input";
import { RadioButton } from "react-native-paper";
import SubmitButton from "../auth/components/SubmitButton";
import SuccessModal from "./components/SuccessModal";

export default function DisputeResolutionScreen() {
  const cards = [
    "Expert Guidance",
    "Simple Process",
    "Time and Cost Effective",
  ];

  const [lawyerNeeded, setLawyerNeeded] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const onOpen = () => setModalOpen(true);
  const onClose = () => setModalOpen(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <Text style={styles.heading}>Dispute Resolution Tool</Text>
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

        <View style={styles.formContainer}>
          <Input placeholder="Full Name" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Email Address" />
          <Input placeholder="Category" />
          <Input placeholder="Company Name (Optional)" />
          <Input placeholder="Company GST Number (Optional)" />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <RadioButton
              value="lawyer_needed"
              status={lawyerNeeded ? "checked" : "unchecked"}
              onPress={() => setLawyerNeeded(!lawyerNeeded)}
              color="#C08729"
              uncheckedColor="#C08729"
            />
            <Text style={{ color: "#667C99" }}>Do you need a lawyer ? </Text>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <SubmitButton
            label="Submit"
            onPress={onOpen}
            buttonStyles={{ paddingHorizontal: 20 }}
          />
        </View>
      </ScrollView>

      <SuccessModal isOpen={modalOpen} onClose={onClose} />
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
  formContainer: { gap: 10, marginTop: 20 },
});
