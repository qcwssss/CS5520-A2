import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
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

export { addEntryToDB, deleteEntryById };
