import { StyleSheet, TextInput } from "react-native";
import React from "react";

type Props = {
  placeholder: string;
};

export default function Input({ placeholder }: Props) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor="#667C99"
    />
  );
}

const styles = StyleSheet.create({
  input: { borderBottomWidth: 1, borderBottomColor: "#C08729" },
});
