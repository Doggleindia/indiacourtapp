import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Input from "../enquiry/components/Input";
import SubmitButton from "../auth/components/SubmitButton";

export default function AccountSettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Settings</Text>

      <View style={styles.imageContainer}>
        <Text>Image</Text>
      </View>

      <View style={{ width: "100%", gap: 8 }}>
        <Input placeholder="Full Name" />
        <Input placeholder="Phone" />
      </View>

      <View style={{ alignSelf: "center" }}>
        <SubmitButton label="Update" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 16,
    backgroundColor: "white",
    gap: 16,
  },
  title: {
    color: "#1B1E21",
    fontSize: 30,
    fontWeight: "800",
    marginTop: 8,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: "#C08729",
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
});
