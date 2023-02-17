import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { entries } from "../mock/entryData";
import EntryComponent from "./EntryComponent";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    alignSelf: "center",
  },
});

const EntryList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={entries}
        renderItem={({ item }) => <EntryComponent entry={item} />}
      />
    </View>
  );
};

export default EntryList;
