// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTCY-XPk67ZrAFNAVQ0oPg58D4lWx4_l8",
  authDomain: "online-job-portal-38ddd.firebaseapp.com",
  projectId: "online-job-portal-38ddd",
  storageBucket: "online-job-portal-38ddd.firebasestorage.app",
  messagingSenderId: "226370978457",
  appId: "1:226370978457:web:9fda678af372b5f9626e08",
  measurementId: "G-S4T2PEMQ7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
console.log(analytics);

export {db};
