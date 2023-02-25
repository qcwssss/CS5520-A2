import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Foundation } from "@expo/vector-icons";

const EntryComponent = ({ entry }) => {
  //   const entry = { item: "Snacks", calorie: 560 };
  const [limit, setLimit] = useState(500);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{entry.item}</Text>
      <View style={styles.numberWrapper}>
        {entry.calorie > limit && (
          <Foundation name="alert" size={28} color="yellow" />
        )}
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{entry.calorie}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "purple",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    // height: 60,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 5,
  },
  tail: {
    flexDirection: "row",
  },
  numberWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    padding: 5,
  },
  numberContainer: {
    marginLeft: 5,
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
