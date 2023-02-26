// import styles from "../styles/styles";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PressableButton from "./PressableButton";
import { bgColor, btnColor, highlight, lightBg, navy } from "../styles/styles";

const onDelete = () => {
  console.log("delete pressed");
};
const onCheck = () => {
  console.log("check pressed");
};

const EditEntry = ({ route }) => {
  const entry = route.params.entryItem;
  console.log(entry);
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Calorie: {entry.calorie}</Text>
          <Text style={styles.label}>Description: {entry.item}</Text>
        </View>
        <View style={styles.buttonRow}>
          <PressableButton style={styles.button} pressHandler={onDelete}>
            <AntDesign name="delete" size={20} color="white" />
          </PressableButton>
          <PressableButton style={styles.button} pressHandler={onCheck}>
            <AntDesign name="check" size={20} color="white" />
          </PressableButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "lightblue",
    paddingTop: 60,
  },
  card: {
    width: "70%",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: lightBg,
  },
  textContainer: {
    // flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
    color: navy,
  },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: btnColor,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});

export default EditEntry;
