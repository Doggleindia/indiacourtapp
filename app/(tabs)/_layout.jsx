import { Tabs } from 'expo-router';
import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'; // Import icons

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="resources"
        options={{
          title: 'Resources',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="library-books" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
