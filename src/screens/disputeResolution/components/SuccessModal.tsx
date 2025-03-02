import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Modal, Portal } from "react-native-paper";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SuccessModal({ isOpen, onClose }: Props) {
  return (
    <Portal>
      <Modal
        visible={isOpen}
        onDismiss={onClose}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <View style={styles.container}>
          <MaterialIcons
            onPress={onClose}
            name="close"
            size={26}
            style={{ marginLeft: "auto" }}
          />
          <View style={styles.dashedLine}>
            <View style={styles.dashedLine}>
              <View style={styles.dashedContainer}>
                <FontAwesome name="check-circle" size={100} color="#00C000" />
              </View>
            </View>
          </View>

          <Text style={[styles.heading, { textAlign: "center" }]}>
            That’s it! Once confirmed, we’ll connect with you once the details
            are validated.
          </Text>
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
  dashedLine: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 100,
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#40FF40",
  },
  dashedContainer: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
