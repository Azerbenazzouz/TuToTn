// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDe5SqTfk2-l_7wyYoHMhO1JbLgiMHnyQs",
  authDomain: "tutotn-92e84.firebaseapp.com",
  projectId: "tutotn-92e84",
  storageBucket: "tutotn-92e84.appspot.com",
  messagingSenderId: "819994258111",
  appId: "1:819994258111:web:013ffed2353ba4e382340a",
  measurementId: "G-1V8HG579MH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
