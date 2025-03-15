// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "mern-blog-39f4f.firebaseapp.com",
  projectId: "mern-blog-39f4f",
  storageBucket: "mern-blog-39f4f.firebasestorage.app",
  messagingSenderId: "14071393978",
  appId: "1:14071393978:web:fd3cc530590ec8bfaa5c83"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);