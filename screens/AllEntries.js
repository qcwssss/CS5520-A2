import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import EntriesList from "../components/EntriesList";
import { firestore } from "../Firebase/firestore-setup";
import { entries } from "../mock/entryData";
import styles from "../styles/styles";

const AllEntries = () => {
  const [allEntries, setAllEntries] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "entries"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setAllEntries([]);
        } else {
          let entries = [];
          querySnapshot.docs.forEach((entry) =>
            entries.push({ ...entry.data(), id: entry.id })
          );
          // console.log(entries);
          setAllEntries(entries);
        }
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <EntriesList data={allEntries} />
    </SafeAreaView>
  );
};

export default AllEntries;
