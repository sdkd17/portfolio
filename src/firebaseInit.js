// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU7imAKFNEAzt2wWbMxKeo4Fwgo7ONh5k",
  authDomain: "portfolio-sergio-klein.firebaseapp.com",
  projectId: "portfolio-sergio-klein",
  storageBucket: "portfolio-sergio-klein.appspot.com",
  messagingSenderId: "663224261693",
  appId: "1:663224261693:web:836a41c2c60ed622a31e54",
  measurementId: "G-WFDJXWB4T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);