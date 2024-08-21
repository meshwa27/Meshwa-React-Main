// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Import getAuth and GoogleAuthProvider

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

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Set up the Google Auth provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };

