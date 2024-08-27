// --------->
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqNi-fEPUelUKdcySDlZhIulRZiO6tN4U",
  authDomain: "demofirebase-7df9b.firebaseapp.com",
  projectId: "demofirebase-7df9b",
  storageBucket: "demofirebase-7df9b.appspot.com",
  messagingSenderId: "118236207981",
  appId: "1:118236207981:web:8adf804a720df0cdfc1864"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
