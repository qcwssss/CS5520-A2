import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import EntriesList from "../components/EntriesList";
import { firestore } from "../Firebase/firestore-setup";
import styles from "../styles/styles";

const AllEntries = ({ isOverlimit = false }) => {
  const [allEntries, setAllEntries] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "entries"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setAllEntries([]);
        } else {
          let entries = [];
          querySnapshot.docs.forEach((entry) => {
            const isEntryOverLimit =
              entry.data().calories > 500 && !entry?.reviewed;
            if (!isOverlimit || isEntryOverLimit) {
              // console.log(entry.data());
              entries.push({ ...entry.data(), id: entry.id });
            }
          });
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
