// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5L_OcWCS1SEgcwDh4YAQMiX9XEBO6Uys",
  authDomain: "cloudc-580.firebaseapp.com",
  projectId: "cloudc-580",
  storageBucket: "cloudc-580.firebasestorage.app",
  messagingSenderId: "835234076258",
  appId: "1:835234076258:web:406180028c2c6c5ee1233b",
  measurementId: "G-C8VQ94Z3E5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);