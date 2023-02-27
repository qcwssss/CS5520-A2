// import styles from "../styles/styles";
import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PressableButton from "../components/PressableButton";
import styles from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { deleteEntryById, reviewEntry } from "../Firebase/firestore-helper";
import {
  AlertPopup,
  deleteAlertMessages,
  isStillOverlimit,
  reviewAlertMessages,
} from "../components/helpers/edit-helper";

const ReviewButton = ({ handleReview }) => {
  const onCheck = () => {
    AlertPopup(reviewAlertMessages, handleReview);
  };

  return (
    <PressableButton style={styles.button} pressHandler={onCheck}>
      <AntDesign name="check" size={20} color="white" />
    </PressableButton>
  );
};

const EditEntry = ({ route }) => {
  const entry = route.params.entryItem;
  const naviagtion = useNavigation();

  const handleDelete = () => {
    console.log("deleted entry id", entry.id);
    deleteEntryById(entry.id);
    naviagtion.goBack();
  };

  const handleReview = () => {
    console.log("reviewed entry id", entry.id);
    reviewEntry(entry);
    naviagtion.goBack();
  };

  const onDelete = () => {
    AlertPopup(deleteAlertMessages, handleDelete);
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
          {isStillOverlimit(entry) && (
            <ReviewButton handleReview={handleReview} />
          )}
        </View>
      </View>
    </View>
  );
};

export default EditEntry;
