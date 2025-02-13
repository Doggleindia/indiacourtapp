import { StyleSheet } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

type Props = {
  label: string;
  onPress: () => void;
};

export default function SubmitButton({ label, onPress }: Props) {
  return (
    <Button style={styles.button} textColor="#FFF" onPress={onPress}>
      {label}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: "#056B38", borderRadius: 4, marginTop: 25 },
});
