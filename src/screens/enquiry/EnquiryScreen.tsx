import { StyleSheet, View } from "react-native";
import React from "react";
import Input from "./components/Input";
import SubmitButton from "../auth/components/SubmitButton";
import Header from "@/components/headers/Header";

export default function EnquiryScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#FFF" }}>
      <Header title="Make an Enquiry" backButtonVisisble />

      <View style={styles.container}>
        <Input placeholder="Full Name" />
        <Input placeholder="Phone" />
        <Input placeholder="Email" />
        <Input placeholder="Message" />

        <SubmitButton
          label="Send"
          onPress={() => {}}
          buttonStyles={{ width: "50%", marginHorizontal: "auto" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 20 },
});
