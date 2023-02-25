import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "../screens/AllEntries";
import OverLimitEntries from "../screens/OverLimitEntries";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Home = () => {
  //   const navigation = useNavigation();
  //   console.log(route);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllEntries"
        component={AllEntries}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="coffee" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="OverlimitEntries"
        component={OverLimitEntries}
        options={{
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
