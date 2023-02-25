import React from "react";
import { SafeAreaView } from "react-native";
import EntriesList from "../components/EntriesList";
import { entries } from "../mock/entryData";
import styles from "../styles/styles";

const AllEntries = ({ route }) => {
  console.log(route);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <EntriesList data={entries} />
    </SafeAreaView>
  );
};

export default AllEntries;
