import { async } from "@firebase/util";
import { collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { firestore } from "./firestore-setup";

const addEntryToDB = async (entry) => {
  const docRef = await addDoc(collection(firestore, "entries"), entry);
};

const deleteEntryById = async (id) => {
  await deleteDoc(doc(firestore, "entries", id), entry);
};

export { addEntryToDB, deleteEntryById };
