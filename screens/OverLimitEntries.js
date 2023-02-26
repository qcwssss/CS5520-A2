import React from "react";
import { SafeAreaView } from "react-native";
import EntriesList from "../components/EntriesList";
import { entries } from "../mock/entryData";

import styles from "../styles/styles";

const OverLimitEntries = () => {
  const overlimits = entries.filter((entry) => entry.calorie > 600);
  // filter reviewed items
  return (
    <SafeAreaView style={styles.screenContainer}>
      <EntriesList data={overlimits} />
    </SafeAreaView>
  );
};

export default OverLimitEntries;
