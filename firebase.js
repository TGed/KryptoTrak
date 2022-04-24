// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider } 
  from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvkjrMdT5U-pSK0-Hj-S5VYl4qbOLsW5M",
  authDomain: "kryptotrak-615a7.firebaseapp.com",
  projectId: "kryptotrak-615a7",
  storageBucket: "kryptotrak-615a7.appspot.com",
  messagingSenderId: "762469958707",
  appId: "1:762469958707:web:729bd0ed1facac5f3bcf46",
  measurementId: "G-437WE52GNY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export function logIn(email, password) {
  return signInWithEmailAndPassword(auth,email,password);
}

export function signUp(email,password) {
  return createUserWithEmailAndPassword(auth,email,password);
}

export const googleAuth = new GoogleAuthProvider();