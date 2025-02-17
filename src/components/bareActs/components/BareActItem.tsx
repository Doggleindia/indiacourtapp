import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";

type Props = {
  index: string | number;
  text: string;
  textStyles?: StyleProp<TextStyle>;
  indexStyles?: StyleProp<TextStyle>;
};

export default function BareActItem({
  index,
  text,
  indexStyles,
  textStyles,
}: Props) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.idContainer}>
          <Text style={[styles.text, indexStyles]}>{index}</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text
            style={[
              styles.text,
              {
                textDecorationLine: "underline",
                fontWeight: "bold",
              },
              textStyles,
            ]}
          >
            {text}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { color: "#07070B" },
  container: { flexDirection: "row" },
  idContainer: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    padding: 4,
    borderColor: "#C08729",
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderColor: "#C08729",
    borderRightWidth: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
