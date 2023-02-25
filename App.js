import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Home from "./components/BottomNavTabs";
import EditEntry from "./components/EditEntry";
import { bgColor } from "./styles/styles";

const Stack = createNativeStackNavigator();
const headerOptions = {
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
};

function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ title: "Edit Entry" }}
          name="EditEntry"
          component={EditEntry}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
