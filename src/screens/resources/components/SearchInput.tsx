import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import SubmitButton from "@/screens/auth/components/SubmitButton";

export default function SearchInput() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <AntDesign name="closecircleo" color="#C08729" size={20} />
      </View>

      <SubmitButton
        onPress={() => {}}
        label="Search"
        buttonStyles={{
          borderRadius: 0,
          height: "100%",
          paddingHorizontal: 8,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  inputContainer: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderRightWidth: 0,
    flexDirection: "row",
    borderColor: "#C08729",
    alignItems: "center",
    gap: 2,
    paddingHorizontal: 4,
    flex: 1,
  },
  input: {
    justifyContent: "flex-end",
    flex: 1,
  },
});
