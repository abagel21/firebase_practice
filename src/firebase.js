import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp({
    apiKey: "AIzaSyDLsh3lyeBemQQBVy7-j7n9etBvMvvGM-M",
    authDomain: "fir-practice-d54f2.firebaseapp.com",
    projectId: "fir-practice-d54f2",
    storageBucket: "fir-practice-d54f2.appspot.com",
    messagingSenderId: "887748054715",
    appId: "1:887748054715:web:71f1d2aec763519133a39e",
    measurementId: "G-FKV7Q3001T",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };