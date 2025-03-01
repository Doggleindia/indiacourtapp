import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Captcha() {
  return (
    <View style={styles.container}>
      <View style={styles.captcha}>
        <Text style={{ textAlign: "center" }}>CAPTCHA</Text>
      </View>
      <View style={{ paddingHorizontal: 12, paddingVertical: 8 }}>
        <TextInput
          style={styles.container}
          placeholder="Enter Captcha"
          textAlign="center"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#C08729",
  },
  captcha: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#C08729",
  },
});
