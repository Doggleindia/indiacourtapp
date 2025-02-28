import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Modal, Portal } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
const LogoutImage = require("../../../../assets/images/logout.png");
const LogoutSuccessImage = require("../../../../assets/images/logout_door.png");

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LogoutModal({ isOpen, onClose }: Props) {
  const router = useRouter();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleClose = () => {
    if (isLoggedOut) router.dismissTo("/(auth)");
    else onClose();
  };

  return (
    <Portal>
      <Modal visible={isOpen} onDismiss={handleClose}>
        <View style={styles.container}>
          <MaterialIcons
            onPress={handleClose}
            name="close"
            size={26}
            style={{ marginLeft: "auto" }}
          />
          {isLoggedOut ? (
            <>
              <View style={styles.dashedLine}>
                <View style={styles.dashedLine}>
                  <Image
                    source={LogoutSuccessImage}
                    style={{ width: 50, height: 50 }}
                    resizeMode="contain"
                  />
                </View>
              </View>

              <Text style={[styles.heading, { textAlign: "center" }]}>
                You have been successfully logged out.
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.heading}>
                Are you sure you want to logout?
              </Text>
              <Text style={styles.content}>
                You will need to log in again to access your account. Make sure
                to save any ongoing work before logging out.
              </Text>

              <Image source={LogoutImage} />
              <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={handleClose}>
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Cancel</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setIsLoggedOut(true)}>
                  <View style={[styles.button, { backgroundColor: "#F45762" }]}>
                    <Text style={styles.buttonText}>Log Out</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
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
  dashedLine: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 50,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C08729",
  },
});
