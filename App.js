import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Home from "./components/BottomNavTabs";
import EditEntry from "./components/EditEntry";
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
        <Stack.Screen
          options={{
            title: "All My Goals",
          }}
          name="Home"
          component={Home}
        />

        {/* <Stack.Screen
          options={{
            title: "All Entries",
          }}
          name="All Entries"
          component={AllEntries}
        /> */}
        <Stack.Screen name="EditEntry" component={EditEntry} />
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
