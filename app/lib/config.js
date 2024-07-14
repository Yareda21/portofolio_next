import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCW_vsFjt65qPYxKketNc4sNr3wkHlL4s4",
  authDomain: "testimony-46c72.firebaseapp.com",
  projectId: "testimony-46c72",
  storageBucket: "testimony-46c72.appspot.com",
  messagingSenderId: "954784085142",
  appId: "1:954784085142:web:489dec5b30a7a1a5e2feb7",
  measurementId: "G-3CDDJFE3WN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
