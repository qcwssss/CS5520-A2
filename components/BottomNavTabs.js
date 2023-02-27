import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllEntries from "../screens/AllEntries";
import OverLimitEntries from "../screens/OverLimitEntries";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles, { colors, headerOptionsStyle } from "../styles/styles";
import PressableButton from "./PressableButton";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  const addEntryPressed = () => {
    navigation.navigate("AddEntry");
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        // console.log(route);
        return {
          headerRight: () => {
            return (
              <PressableButton
                style={styles.addButton}
                pressHandler={addEntryPressed}
              >
                <AntDesign name="plus" size={20} color="white" />
              </PressableButton>
            );
          },
          ...headerOptionsStyle,
          tabBarStyle: {
            backgroundColor: colors.bgColor,
          },

          tabBarInactiveTintColor: colors.inactive,
          tabBarActiveTintColor: colors.highlight,
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "bold",
          },
        };
      }}
    >
      <Tab.Screen
        name="AllEntries"
        component={AllEntries}
        options={{
          title: "All Entries",
          tabBarInactiveTintColor: colors.inactive,
          tabBarActiveTintColor: colors.highlight,
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
