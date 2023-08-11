import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmINRkcYxiAYE5rlt9AJxcVXhY5IIrxzk",
  authDomain: "trello-ab4a5.firebaseapp.com",
  projectId: "trello-ab4a5",
  storageBucket: "trello-ab4a5.appspot.com",
  messagingSenderId: "69058671030",
  appId: "1:69058671030:web:246c15ef49012d16d8d117",
  measurementId: "G-Y17L680H76",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}

