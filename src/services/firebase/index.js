// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4RFPCGKSq0praORHpj04_upXPU3ycQ2o",
  authDomain: "backend31865-5d9d6.firebaseapp.com",
  projectId: "backend31865-5d9d6",
  storageBucket: "backend31865-5d9d6.appspot.com",
  messagingSenderId: "356725851252",
  appId: "1:356725851252:web:f0badbe1ac2f34e734fd21"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);