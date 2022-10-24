// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBeXuFkRjz-cibWhdtK0IUgJQLaLb8TzYw",
    authDomain: "e-comm-site-jozebel.firebaseapp.com",
    projectId: "e-comm-site-jozebel",
    storageBucket: "e-comm-site-jozebel.appspot.com",
    messagingSenderId: "128249955523",
    appId: "1:128249955523:web:75a55a14828d6364bc0e76",
    measurementId: "G-L9PMHLL8P9"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };