import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-paper";

export default function Input({
  label,
  placeholder,
  secureText,
}: {
  label?: string;
  placeholder?: string;
  secureText?: boolean;
}) {
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={inputText}
        onChangeText={setInputText}
        placeholder={placeholder}
        style={styles.input}
        placeholderTextColor="#ACACAC"
        secureTextEntry={secureText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: { color: "#FFF", fontSize: 16 },
  input: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: "#ACACAC",
  },
  container: { gap: 16 },
});
