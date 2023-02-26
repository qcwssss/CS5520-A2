import React from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { useState } from "react";
import styles from "../styles/styles";
import { TextButton } from "../components/PressableButton";
import { addEntryToDB } from "../Firebase/firestore-helper";

const AddEntry = () => {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");

  const onReset = () => {
    setCalories("");
    setDescription("");
  };

  const onSubmit = () => {
    const errMsg = "Invalid Input";
    if (!calories || description.trim() === "") {
      Alert.alert(errMsg, "Please fill out all fields.");
    } else if (isNaN(calories) || Number(calories) <= 0) {
      Alert.alert(errMsg, "Please enter a valid calories value.");
    } else {
      // do something with valid input
      console.log(calories, description);
      let entry = { calories: calories, description: description };
      addEntryToDB(entry);
    }
  };

  return (
    <View style={styles.editContainer}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Calories</Text>
        <TextInput
          style={{ ...styles.input, marginStart: 35 }}
          value={calories}
          onChangeText={setCalories}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={{ ...styles.input, height: 100 }}
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={5}
        />
      </View>
      <View style={styles.buttonRow}>
        <TextButton
          style={styles.createBtn}
          pressHandler={onReset}
          text={"Reset"}
        />
        <TextButton
          style={styles.createBtn}
          pressHandler={onSubmit}
          text={"Submit"}
        />
      </View>
    </View>
  );
};

export default AddEntry;
