// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "nest-quest-5a479.firebaseapp.com",
  projectId: "nest-quest-5a479",
  storageBucket: "nest-quest-5a479.firebasestorage.app",
  messagingSenderId: "57690143029",
  appId: "1:57690143029:web:03a9dba5356bf1f837747c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);