// src/lib/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Replace with your actual Firebase configuration
// These should ideally be in a .env file
const firebaseConfig = {
  apiKey: "AIzaSyAgLzxIjyBn85eH5SFoLR9HebgqFWnD0Og",
  authDomain: "aditya-natural-oils.firebaseapp.com",
  projectId: "aditya-natural-oils",
  storageBucket: "aditya-natural-oils.firebasestorage.app",
  messagingSenderId: "1093599221307",
  appId: "1:1093599221307:web:6f30f9bedd7063c61b6e1e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
