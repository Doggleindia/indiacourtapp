import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
const RedFortImage = require("../../../../assets/images/home/red_fort.png");

export default function SearchInput() {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search"
        style={styles.input}
        placeholderTextColor="#7D7D7D"
        textColor="black"
        right={
          <TextInput.Icon
            icon={() => (
              <MaterialIcons name="search" color="#145390" size={32} />
            )}
          />
        }
      />

      <Image source={RedFortImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, gap: 6 },
  input: { borderWidth: 1, backgroundColor: "#FFF", borderColor: "#EFEFEF" },
});
