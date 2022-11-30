// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGZz6RKL2GLYal9nrWRc1Vvzp4U5wcCzA",
  authDomain: "reactrest-2c3c4.firebaseapp.com",
  projectId: "reactrest-2c3c4",
  storageBucket: "reactrest-2c3c4.appspot.com",
  messagingSenderId: "741377335325",
  appId: "1:741377335325:web:216501ae8c2378cfa466f4",
  measurementId: "G-P8B3Y4MEJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;
