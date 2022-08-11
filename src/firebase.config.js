// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASi1-mb3VnVzrKzYctASXDAjupI3aKQYY",
  authDomain: "anime-archive-9b8be.firebaseapp.com",
  projectId: "anime-archive-9b8be",
  storageBucket: "anime-archive-9b8be.appspot.com",
  messagingSenderId: "827894325520",
  appId: "1:827894325520:web:83d5a3c49cd6ecc2948595",
  measurementId: "G-S2F3ZWGR2Z"
};
export default firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();