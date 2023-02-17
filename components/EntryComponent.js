import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

const EntryComponent = () => {
  const entry = { item: "Snacks", calorie: 500 };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{entry.item}</Text>
      {/* <View style={styles.iconContainer}> */}
      <Feather name="alert-triangle" size={24} color="black" />
      <View style={styles.numberContainer}>
        <Text style={styles.number}>{entry.calorie}</Text>
        {/* </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    // justifyContent: "flex-end",
    backgroundColor: "purple",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  iconContainer: {
    justifyContent: "flex-end",
  },
  numberContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 8,
    paddingHorizontal: 30,
  },
  number: {
    color: "purple",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default EntryComponent;
