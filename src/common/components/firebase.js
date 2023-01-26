import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6V8GqbsLoUd8NQw-3TcgRBdmGjL8a7wE",
  authDomain: "login-c4740.firebaseapp.com",
  projectId: "login-c4740",
  storageBucket: "login-c4740.appspot.com",
  messagingSenderId: "104017873207",
  appId: "1:104017873207:web:2648aad1f0cd2caac572b2",
  measurementId: "G-1601F4Y86E",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
