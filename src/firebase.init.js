// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTmz_iFvDobB89PU-ETL27gXRfa5pTBVM",
  authDomain: "healthy-bite-dfbc3.firebaseapp.com",
  projectId: "healthy-bite-dfbc3",
  storageBucket: "healthy-bite-dfbc3.appspot.com",
  messagingSenderId: "126226912634",
  appId: "1:126226912634:web:e61c33dfdbebe1e16b72c3",
  measurementId: "G-BPX44LX5E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth(app);

const analytics = getAnalytics(app);

export default auth;