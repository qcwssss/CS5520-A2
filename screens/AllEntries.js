import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import EntriesList from "../components/EntriesList";
import { entries } from "../mock/entryData";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

const AllEntries = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EntriesList data={entries} />
    </SafeAreaView>
  );
};

export default AllEntries;
