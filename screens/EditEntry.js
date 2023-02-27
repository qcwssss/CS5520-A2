// import styles from "../styles/styles";
import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PressableButton from "../components/PressableButton";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { deleteEntryById } from "../Firebase/firestore-helper";

const EditEntry = ({ route }) => {
  const entry = route.params.entryItem;
  const naviagtion = useNavigation();

  const onDelete = () => {
    Alert.alert("Are you sure?", "Deleted entry can't be recovered.", [
      {
        text: "Cancel",
        // onPress: () => {},
        style: "cancel",
      },
      {
        text: "Delete",
        onPress: () => {
          console.log("deleted entry id", entry.id);
          deleteEntryById(entry.id);
          naviagtion.goBack();
        },
        style: "destructive",
      },
    ]);
  };
  const onCheck = () => {
    console.log("check pressed");
  };

  return (
    <View style={styles.editContainer}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Calorie: {entry.calories}</Text>
          <Text style={styles.label}>Description: {entry.description}</Text>
        </View>
        <View style={styles.buttonRow}>
          <PressableButton
            style={styles.button}
            pressHandler={() => onDelete(entry.id)}
          >
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
