import React from "react";
import { SafeAreaView } from "react-native";
import EntriesList from "../components/EntriesList";
import { overlimits } from "../mock/over-limit";
import styles from "../styles/styles";

const OverLimitEntries = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <EntriesList data={overlimits} />
    </SafeAreaView>
  );
};

export default OverLimitEntries;
