import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP1rEjNB6UNo7it0KHlBKhAFHnKLSTxzc",
  authDomain: "portfolio-3e8dd.firebaseapp.com",
  projectId: "portfolio-3e8dd",
  storageBucket: "portfolio-3e8dd.appspot.com",
  messagingSenderId: "833057797743",
  appId: "1:833057797743:web:9821c60cdfe33ae71e7f9a",
  measurementId: "G-GE5K439HFW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
