// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyApA0B3psRx_2EfeQjyWugDXjbbIY1JKtg",
  authDomain: "todo-13356.firebaseapp.com",
  projectId: "todo-13356",
  storageBucket: "todo-13356.appspot.com",
  messagingSenderId: "1060756442225",
  appId: "1:1060756442225:web:8bbb68721b12088ce89fd0",
  measurementId: "G-DTJX3XZ85K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};