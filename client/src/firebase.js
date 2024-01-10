// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-645f2.firebaseapp.com",
  projectId: "real-estate-645f2",
  storageBucket: "real-estate-645f2.appspot.com",
  messagingSenderId: "73680483875",
  appId: "1:73680483875:web:ff5d1317c9ea3acf282396",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
