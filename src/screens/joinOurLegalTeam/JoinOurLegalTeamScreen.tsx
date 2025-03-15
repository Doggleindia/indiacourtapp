import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Input from "../enquiry/components/Input";
import SubmitButton from "../auth/components/SubmitButton";
import SuccessModal from "../disputeResolution/components/SuccessModal";

export default function JoinOurLegalTeamScreen() {
  const [modalOpen, setModalOpen] = useState(false);
  const onOpen = () => setModalOpen(true);
  const onClose = () => setModalOpen(false);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      >
        <Text style={styles.heading}>Join our Legal Team</Text>
        <Text style={styles.description}>
          Join our esteemed legal team and be part of a dynamic,
          forward-thinking law firm that values excellence, integrity, and
          innovation.
        </Text>

        <View style={styles.formContainer}>
          <Input placeholder="Expertise" />
          <Input placeholder="Full Name" />
          <Input placeholder="Location" />
          <Input placeholder="Email Address" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Lorem Ipsum" />
          <Input placeholder="Lorem Ipsum" />

          <TextInput
            style={styles.container}
            placeholder="Upload License"
            textAlign="center"
          />

          <TextInput
            style={styles.container}
            placeholder="Upload Aadhaar Card"
            textAlign="center"
          />
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
  container: {
    borderWidth: 1,
    borderColor: "#C08729",
  },
});
