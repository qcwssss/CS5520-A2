import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView } from "react-native";
import Home from "./components/BottomNavTabs";
import EditEntry from "./screens/EditEntry";
import { colors, headerOptionsStyle } from "./styles/styles";

const Stack = createNativeStackNavigator();
const headerOptions = {
  // headerStyle: {
  //   backgroundColor: colors.bgColor,
  // },
  // headerTintColor: "#fff",
  // headerTitleStyle: {
  //   fontSize: 20,
  // },
  ...headerOptionsStyle,
};

function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        screenOptions={headerOptions}
        //
      >
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
