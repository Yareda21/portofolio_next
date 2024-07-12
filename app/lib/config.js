// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9fGJmvx3G134rxH_59LFV1q_pTPPsoq8",
  authDomain: "portfolio-client-fe5fb.firebaseapp.com",
  projectId: "PORTFOLIO-CLIENT-FE5FB",
  storageBucket: "PORTFOLIO-CLIENT-FE5FB.APPSPOT.COM",
  messagingSenderId: "262437371911",
  appId: "1:262437371911:web:822c8851eb9c7ffecd6aa2",
  measurementId: "G-GC275LXVBL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
