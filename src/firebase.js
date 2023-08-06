// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0FsjWdTPN9eG0aZOeuJIh2LStaQ9j0pY",
  authDomain: "firstfire-df0ae.firebaseapp.com",
  databaseURL: "https://firstfire-df0ae-default-rtdb.firebaseio.com",
  projectId: "firstfire-df0ae",
  storageBucket: "firstfire-df0ae.appspot.com",
  messagingSenderId: "839369706994",
  appId: "1:839369706994:web:65c7e333adb0bbbd736f6b",
  measurementId: "G-GHPQSC4SVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth = getAuth(app);


export {app,auth,db};