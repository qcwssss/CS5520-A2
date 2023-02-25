import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "../screens/AllEntries";
import OverLimitEntries from "../screens/OverLimitEntries";

const Tab = createBottomTabNavigator();

const BottomNavTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Entries" component={AllEntries} />
      <Tab.Screen name="Over-limit Entries" component={OverLimitEntries} />
    </Tab.Navigator>
  );
};

export default BottomNavTabs;
