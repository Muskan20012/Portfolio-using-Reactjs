// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyBBVxbpNwE7l63PPgCqFTW5cBY7fNNuxyo",
  authDomain: "portfolio-c8bd9.firebaseapp.com",
  projectId: "portfolio-c8bd9",
  storageBucket: "portfolio-c8bd9.appspot.com",
  messagingSenderId: "150733991813",
  appId: "1:150733991813:web:9622c06cce1cbfbb7a1eec",
  measurementId: "G-10HW28JYHQ"
};



export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);