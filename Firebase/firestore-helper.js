import { collection, addDoc, deleteDoc, doc, setDoc } from "firebase/firestore";
import { firestore } from "./firestore-setup";

const addEntryToDB = async (entry) => {
  try {
    const docRef = await addDoc(collection(firestore, "entries"), entry);
    console.log("new entry created:", docRef.id);
  } catch (err) {
    console.log(err);
  }
};

const deleteEntryById = async (id) => {
  try {
    await deleteDoc(doc(firestore, "entries", id));
  } catch (err) {
    console.log(err);
  }
};

const reviewEntry = async (entry) => {
  let { id, ...newEntry } = entry;
  try {
    await setDoc(doc(firestore, "entries", entry.id), {
      ...newEntry,
      reviewed: true,
    });
  } catch (err) {
    console.log(err);
  }
};

export { addEntryToDB, deleteEntryById, reviewEntry };
