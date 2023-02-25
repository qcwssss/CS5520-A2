import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "../screens/AllEntries";
import OverLimitEntries from "../screens/OverLimitEntries";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { bgColor, highlight, inactive } from "../styles/styles";

const Tab = createBottomTabNavigator();

const Home = () => {
  //   const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: bgColor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontSize: 20,
        },
        tabBarStyle: {
          backgroundColor: bgColor,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "bold",
        },
      }}
    >
      <Tab.Screen
        name="AllEntries"
        component={AllEntries}
        options={{
          title: "All Entries",
          tabBarInactiveTintColor: inactive,
          tabBarActiveTintColor: highlight,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="coffee" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OverlimitEntries"
        component={OverLimitEntries}
        options={{
          title: "Over-limit Entries",

          tabBarInactiveTintColor: inactive,
          tabBarActiveTintColor: highlight,

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="exclamation"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Home;
