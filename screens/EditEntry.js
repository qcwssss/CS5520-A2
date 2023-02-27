// import styles from "../styles/styles";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PressableButton from "../components/PressableButton";
import styles from "../styles/styles";

const onDelete = () => {
  console.log("delete pressed");
};
const onCheck = () => {
  console.log("check pressed");
};

const EditEntry = ({ route }) => {
  const entry = route.params.entryItem;
  // console.log(entry);

  return (
    <View style={styles.editContainer}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Calorie: {entry.calorie}</Text>
          <Text style={styles.label}>Description: {entry.item}</Text>
        </View>
        <View style={styles.buttonRow}>
          <PressableButton style={styles.button} pressHandler={onDelete}>
            <AntDesign name="delete" size={20} color="white" />
          </PressableButton>
          {/* if reviewed, hide check btn */}
          <PressableButton style={styles.button} pressHandler={onCheck}>
            <AntDesign name="check" size={20} color="white" />
          </PressableButton>
        </View>
      </View>
    </View>
  );
};

export default EditEntry;
