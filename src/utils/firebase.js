// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC48CkKjGSVzpQ64xOF55bRQQgPrORxc7s",
  authDomain: "netflixgpt-ab398.firebaseapp.com",
  projectId: "netflixgpt-ab398",
  storageBucket: "netflixgpt-ab398.appspot.com",
  messagingSenderId: "170842285794",
  appId: "1:170842285794:web:dbe9aa86a3f62b104da0bb",
  measurementId: "G-6K2V1C4DH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();