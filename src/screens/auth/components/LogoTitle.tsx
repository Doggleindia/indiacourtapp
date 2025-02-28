import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
const LogoImage = require("../../../../assets/images/home/logo.png");

type Props = {
  title: string;
};

export default function LogoTitle({ title }: Props) {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={LogoImage}
        resizeMode="contain"
        style={{ maxHeight: 100 }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: { alignItems: "center", gap: 25, marginBottom: 40 },
  title: {
    textAlign: "center",
    fontWeight: "600",
    color: "#FFF",
    fontSize: 20,
  },
});
