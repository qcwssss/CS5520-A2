import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Foundation } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/styles";
import { isStillOverlimit } from "./helpers/edit-helper";

const EntryComponent = ({ entry }) => {
  const naviagtion = useNavigation();

  const onPressEntry = () => {
    naviagtion.navigate("EditEntry", { entryItem: entry });
  };

  return (
    <Pressable onPress={onPressEntry}>
      <View style={styles.container}>
        <Text style={styles.whiteText}>{entry.description}</Text>
        <View style={styles.numberWrapper}>
          {isStillOverlimit(entry) && (
            <Foundation name="alert" size={28} color="yellow" />
          )}
          <View style={styles.numberContainer}>
            <Text style={styles.number}>{entry.calories}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.barColor,
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  whiteText: {
    color: colors.lightText,
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
    color: colors.navy,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default EntryComponent;
