// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  reauthenticateWithCredential, 
  signOut,
  AuthProvider,
  updateEmail,
  AuthCredential,
  EmailAuthProvider,
  updatePassword,
  deleteUser,
 } 
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

export async function logIn(email, password) {
  await signInWithEmailAndPassword(auth,email,password)
}

export async function signUp(email,password) {
  await createUserWithEmailAndPassword(auth,email,password);
}

export function logOut(auth) {
  signOut(auth).catch(error => console.log('Error logging out: ',error));
}

function reauthenticate (password) {
  const credentials = EmailAuthProvider.credential(
    auth.currentUser.email,
    password
  )
  reauthenticateWithCredential(auth.currentUser, credentials).then(() => {
    console.log('reauthenticated')
  }).catch((error) => {
    console.log(error)
  })
}

export function changeEmail (password,newEmail) {
  reauthenticate(password)
  updateEmail(auth.currentUser, newEmail).then(() => {
    logOut(auth);
  })
}

export function changePassword (oldPassword,newPassword) {
  reauthenticate(oldPassword)
  updatePassword(auth.currentUser,newPassword).then(() => {
    logOut(auth);
  })
}

export function deleteAccount (password) {
  reauthenticate(password)
  deleteUser(auth.currentUser);
}


