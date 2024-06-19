import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWPFx5Sc23ZRabnrsz8tpX8Jl6a_1hTws",
  authDomain: "mystore-eccf6.firebaseapp.com",
  projectId: "mystore-eccf6",
  storageBucket: "mystore-eccf6.appspot.com",
  messagingSenderId: "674332142141",
  appId: "1:674332142141:web:38f62ac0b0d709f236d854"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);