// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMTMe7agO3ZASPMxGtMEonw1z5fUzbWak",
  authDomain: "auth-headstarter.firebaseapp.com",
  projectId: "auth-headstarter",
  storageBucket: "auth-headstarter.appspot.com",
  messagingSenderId: "200837729533",
  appId: "1:200837729533:web:457fb50cebf711334b4294",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
