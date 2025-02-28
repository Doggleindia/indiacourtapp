import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import Header from "@/components/headers/Header";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import SettingsOption from "./components/SettingsOption";
import LogoutModal from "./components/LogoutModal";
import { useRouter } from "expo-router";

const color = "#F26727";
const size = 24;

export default function SettingsScreen() {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const onOpen = () => setModalOpen(true);
  const onClose = () => setModalOpen(false);

  const options = [
    {
      label: "Account Settings",
      icon: <FontAwesome name="user" color={color} size={size} />,
      onPress: () => router.push("/account-settings"),
    },
    {
      label: "Help and Support",
      icon: <FontAwesome name="bell" color={color} size={size} />,
      onPress: () => router.push("/help-and-support"),
    },
    {
      label: "Privacy Policy",
      icon: <MaterialIcons name="privacy-tip" color={color} size={size} />,
      onPress: () => router.push("/privacy-policy"),
    },
    {
      label: "Log Out",
      icon: <MaterialIcons name="logout" color={color} size={size} />,
      onPress: onOpen,
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Header title="Settings" backButtonVisisble />

      <View style={styles.container}>
        {options.map((option, index) => (
          <SettingsOption {...option} key={index} />
        ))}
      </View>

      <LogoutModal isOpen={modalOpen} onClose={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});
