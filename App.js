import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import BottomNavTabs from "./components/BottomNavTabs";
import AllEntries from "./screens/AllEntries";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "purple",
          },
          headerTintColor: "#eee",
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      >
        <Stack.Screen name="Home" component={BottomNavTabs} />

        {/* <Stack.Screen
          options={{
            title: "All Entries",
          }}
          name="All Entries"
          component={AllEntries}
        /> */}
        {/* <Stack.Screen name="GoalDetails" component={GoalDetails} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
