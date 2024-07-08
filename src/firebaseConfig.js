// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyd3jHNBuMhNNxvpMIjUeeNxD26T-UZrU",
  authDomain: "online-shop-2c8a8.firebaseapp.com",
  projectId: "online-shop-2c8a8",
  storageBucket: "online-shop-2c8a8.appspot.com",
  messagingSenderId: "567988848716",
  appId: "1:567988848716:web:b51a8ee255d9bdf6bfcce9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
