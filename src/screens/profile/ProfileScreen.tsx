import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "@/components/headers/Header";
import { useRouter } from "expo-router";
import ProfileOption from "./components/ProfileOption";
import LogoutModal from "../settings/components/LogoutModal";

export default function ProfileScreen() {
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);
  const onOpen = () => setModalOpen(true);
  const onClose = () => setModalOpen(false);

  const options = [
    { title: "Edit Profile", onPress: () => router.push("/account-settings") },
    { title: "Account Information" },
    {
      title: "Notifications",
      onPress: () => router.push("/chatWithUs"),
    },
    {
      title: "Settings",
      onPress: () => router.push("/(tabs)/(profile)/(settings)"),
    },
    { title: "Logout", onPress: onOpen },
  ];

  return (
    <View style={styles.container}>
      <Header title="Profile" />

      <View style={{ paddingHorizontal: 20, gap: 16 }}>
        <View style={styles.imageContainer}>
          <View style={styles.image} />
          <Text>John Doe</Text>
        </View>

        <View style={{ gap: 12 }}>
          {options.map((option, index) => (
            <ProfileOption key={index} {...option} />
          ))}
        </View>
      </View>

      <LogoutModal isOpen={modalOpen} onClose={onClose} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  imageContainer: { alignItems: "center", gap: 12 },
  image: {
    width: 100,
    height: 100,
    backgroundColor: "#C08729",
    borderRadius: 50,
  },
});
