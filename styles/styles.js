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

export default styles;
