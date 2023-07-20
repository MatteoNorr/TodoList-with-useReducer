// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoYw7VUGdcMN66ecLMSzwxSeSu1UlBRRA",
  authDomain: "next-global-state.firebaseapp.com",
  projectId: "next-global-state",
  storageBucket: "next-global-state.appspot.com",
  messagingSenderId: "307879142502",
  appId: "1:307879142502:web:78a75dffb3896fa703f9a7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
