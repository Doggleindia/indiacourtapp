import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import IconTextCard from "@/components/iconTextCard/IconTextCard";
import NumbeIcon from "../findALawyer/components/NumbeIcon";
import Input from "../enquiry/components/Input";
import { RadioButton } from "react-native-paper";
import SubmitButton from "../auth/components/SubmitButton";
import SuccessModal from "../disputeResolution/components/SuccessModal";

export default function ValidateDocumentsScreen() {
  const cards = [
    "Hold relevant legal qualifications and certifications.",
    "Demonstrate strong analytical, research, and communication skills.",
    "Exhibit a commitment to ethical legal practices.",
    "Thrive in fast-paced and challenging environments.",
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
        <Text style={styles.heading}>Validate Document</Text>
        <Text style={styles.description}>
          Ensuring the validity of legal documents is essential for protecting
          your rights and interests.
        </Text>

        <View style={styles.cardsContainer}>
          {cards.map((card, index) => (
            <View key={index} style={styles.card}>
              <IconTextCard
                text={card}
                containerStyles={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                  flexDirection: "row",
                  paddingVertical: 12,
                  gap: 10,
                }}
                textStyles={{ flex: 1, textAlign: "left" }}
                icon={<NumbeIcon number={index + 1} />}
              />
            </View>
          ))}
        </View>

        <View style={styles.formContainer}>
          <Input placeholder="Document Type" />
          <Input placeholder="Issuer Name" />
          <Input placeholder="Date of Issue" />

          <View
            style={{
              borderWidth: 1,
              borderColor: "#C08729",
              padding: 20,
              marginTop: 16,
            }}
          >
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Select Files to Upload
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center", marginVertical: 20 }}>
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
    flexWrap: "wrap",
    gap: 10,
    marginVertical: 20,
  },
  formContainer: { gap: 10, marginTop: 20 },
  card: { width: "100%" },
});
