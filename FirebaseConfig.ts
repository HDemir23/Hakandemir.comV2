// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0PSqbKEfS0QN7fgZFkhybNJGNIF1IxMg",
  authDomain: "hakandemir-6f0bc.firebaseapp.com",
  projectId: "hakandemir-6f0bc",
  storageBucket: "hakandemir-6f0bc.firebasestorage.app",
  messagingSenderId: "483912206656",
  appId: "1:483912206656:web:30572b6e8cc41b68a1d2a5",
  measurementId: "G-MD3JGNQCFN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const db = getFirestore(app);
