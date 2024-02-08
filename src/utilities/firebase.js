// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtdnl4OVT2jBD0uV9-4-E8vULDCVWh_vQ",
  authDomain: "mathquest-97681.firebaseapp.com",
  projectId: "mathquest-97681",
  storageBucket: "mathquest-97681.appspot.com",
  messagingSenderId: "336345888618",
  appId: "1:336345888618:web:a910e944cdbfea639d9713",
  measurementId: "G-5YDT86WC3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);