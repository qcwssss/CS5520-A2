import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Home from "./components/BottomNavTabs";
import EditEntry from "./screens/EditEntry";
import { headerOptionsStyle } from "./styles/styles";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator screenOptions={headerOptionsStyle}>
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
