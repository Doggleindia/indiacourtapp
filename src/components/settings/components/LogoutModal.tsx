import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Modal, Portal } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LogoutModal({ isOpen, onClose }: Props) {
  const router = useRouter();

  const handleLogout = () => router.dismissTo("/(auth)");

  return (
    <Portal>
      <Modal visible={isOpen} onDismiss={onClose}>
        <View style={styles.container}>
          <MaterialIcons
            onPress={onClose}
            name="close"
            size={26}
            style={{ marginLeft: "auto" }}
          />
          <Text style={styles.heading}>Are you sure you want to logout?</Text>
          <Text style={styles.content}>
            You will need to log in again to access your account. Make sure to
            save any ongoing work before logging out.
          </Text>

          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={onClose}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Cancel</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogout}>
              <View style={[styles.button, { backgroundColor: "#F45762" }]}>
                <Text style={styles.buttonText}>Log Out</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    marginHorizontal: 50,
    padding: 20,
  },
  heading: {
    fontSize: 16,
    color: "black",
    fontWeight: "semibold",
    marginVertical: 18,
  },
  content: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "semibold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 16,
  },
  button: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: "#056B38",
  },
  buttonText: {
    color: "white",
  },
});
