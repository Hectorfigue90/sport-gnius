// Import the functions you need from the SDKs you need

import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5tT-mlPxu3EOoln_ClZc1FjxtrcEOJVI",
  authDomain: "sportsgnius.firebaseapp.com",
  projectId: "sportsgnius",
  storageBucket: "sportsgnius.appspot.com",
  messagingSenderId: "526172840303",
  appId: "1:526172840303:web:c5aebb3a13d6c28e69089a",
  measurementId: "G-9NP1M9XP8R"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
