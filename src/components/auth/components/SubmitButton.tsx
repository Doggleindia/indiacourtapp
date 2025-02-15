import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

type Props = {
  label: string;
  onPress: () => void;
  buttonStyles?: StyleProp<ViewStyle>;
};

export default function SubmitButton({ label, onPress, buttonStyles }: Props) {
  return (
    <Button
      style={[styles.button, buttonStyles]}
      textColor="#FFF"
      onPress={onPress}
    >
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: "#056B38", borderRadius: 4 },
});
