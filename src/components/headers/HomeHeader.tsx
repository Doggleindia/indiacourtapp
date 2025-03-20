import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Divider, Menu } from "react-native-paper";

export const HomeHeaderLeft = () => {
  return (
    <View style={styles.leftContainer}>
      <Text style={styles.text}>M</Text>
    </View>
  );
};
export const HomeHeaderRight = () => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.rightContainer}>
      <FontAwesome name="bell" size={25} color="#F26727" />
      <Menu
        visible={visible}
        mode="flat"
        style={{ marginTop: 30, marginLeft: 20 }}
        onDismiss={closeMenu}
        contentStyle={{ backgroundColor: "white", borderBottomLeftRadius: 10 }}
        anchor={
          <TouchableOpacity onPress={openMenu}>
            <Feather name="menu" size={30} color="#F26727" />
          </TouchableOpacity>
        }
      >
        <View style={{ flex: 1, alignItems: "flex-end", marginRight: 8 }}>
          <TouchableOpacity onPress={closeMenu}>
            <AntDesign name="close" size={24} color="#C08729" />
          </TouchableOpacity>
        </View>

        <Menu.Item
          onPress={() => {}}
          title="Home"
          style={styles.menuItem}
          titleStyle={styles.menuItemTitle}
        />
        <Menu.Item
          onPress={() => {}}
          title="Join Our Legal Team"
          style={styles.menuItem}
          titleStyle={styles.menuItemTitle}
        />
        <Menu.Item
          onPress={() => {}}
          title="Settings"
          style={styles.menuItem}
          titleStyle={styles.menuItemTitle}
        />
        <Menu.Item
          onPress={() => {}}
          title="Contact"
          style={styles.menuItem}
          titleStyle={styles.menuItemTitle}
        />
      </Menu>
    </View>
  );
};

export const HomeHeader = () => {
  return (
    <SafeAreaView style={styles.header}>
      <HomeHeaderLeft />
      <HomeHeaderRight />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    backgroundColor: "white",
  },
  leftContainer: {
    marginLeft: 20,
    width: 36,
    height: 36,
    borderRadius: 50,
    backgroundColor: "#F26828",
    justifyContent: "center",
    alignItems: "center",
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginRight: 20,
  },
  text: {
    textAlign: "center",
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  menuItem: {},
  menuItemTitle: {
    color: "black",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
