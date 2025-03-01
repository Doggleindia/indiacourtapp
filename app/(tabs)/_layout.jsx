import { Tabs } from "expo-router";
import React from "react";
import {
  HomeHeaderLeft,
  HomeHeaderRight,
} from "@/components/headers/HomeHeader";
import Categories from "@/icons/Categories";
import Home from "@/icons/Home";
import Services from "@/icons/Services";
import Profile from "@/icons/Profile";

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
          headerTitle: "",
          title: "Home",
          headerShadowVisible: false,
          headerLeft: () => <HomeHeaderLeft />,
          headerRight: () => <HomeHeaderRight />,
          tabBarIcon: ({ color }) => <Home fill={color} />,
        }}
      />
      <Tabs.Screen
        name="(services)"
        options={{
          title: "Services",
          tabBarIcon: ({ color }) => <Services fill={color} />,
        }}
      />
      <Tabs.Screen
        name="(categories)"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => <Categories stroke={color} />,
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <Profile stroke={color} />,
        }}
      />
    </Tabs>
  );
}
