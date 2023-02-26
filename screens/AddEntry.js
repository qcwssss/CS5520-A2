import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import styles from "../styles/styles";
import PressableButton, { TextButton } from "../components/PressableButton";

const AddEntry = () => {
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");

  const onReset = () => {
    setCalories("");
    setDescription("");
  };

  const onSubmit = () => {
    // Handle submit logic here
    console.log("Submitted!");
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
