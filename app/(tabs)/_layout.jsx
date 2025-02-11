import { Tabs } from "expo-router";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import {
  HomeHeaderLeft,
  HomeHeaderRight,
} from "@/components/headers/HomeHeader";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveBackgroundColor: "#C08729",
        tabBarActiveBackgroundColor: "#FFF",
        tabBarInactiveTintColor: "white",
        tabBarActiveTintColor: "#C08729",
        tabBarStyle: { backgroundColor: "#C08729" },
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          headerShown: true,
          title: "",
          headerShadowVisible: false,
          headerLeft: () => <HomeHeaderLeft />,
          headerRight: () => <HomeHeaderRight />,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(services)"
        options={{
          title: "Services",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="library-books" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(categories)"
        options={{
          title: "Categories",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="category" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
