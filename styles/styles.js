import React from "react";
import { StyleSheet } from "react-native";

const card = {
  marginTop: 20,
  backgroundColor: "#dcdcdc",
  width: "80%",
  padding: 20,
  borderRadius: 5,
  shadowColor: "#000",
  shadowOpacity: 0.2,
  shadowRadius: 5,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  elevation: 2,
};

const headerOptStyles = {
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

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    ...card,
  },
});

const bgColor = "#6096B4";
const highlight = "#FDFF00";
const inactive = "#BDCDD6";
const barColor = "#5B8FB9";
const lightBg = "#ECF9FF";
const navy = "#00337C";
const lightText = "#ECF2FF";

export { bgColor, lightText, highlight, navy, inactive, barColor, lightBg };
export default styles;
