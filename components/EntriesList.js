import React from "react";
import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import EntryComponent from "../components/EntryComponent";

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    paddingTop: 22,
    alignSelf: "center",
    height: 80,
  },
});

const EntriesList = ({ data }) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({ item }) => <EntryComponent entry={item} />}
      />
    </View>
  );
};

export default EntriesList;
