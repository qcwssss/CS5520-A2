import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import EntriesList from "../components/EntriesList";
import { overlimits } from "../mock/over-limit";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const OverLimitEntries = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EntriesList data={overlimits} />
    </SafeAreaView>
  );
};

export default OverLimitEntries;
