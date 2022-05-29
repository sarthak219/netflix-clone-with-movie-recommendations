import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDZXGdoQ_5v-f7SugvXMmDTSeXhPqHAJ9E",
    authDomain: "movie-recommendation-eng-304d7.firebaseapp.com",
    projectId: "movie-recommendation-eng-304d7",
    storageBucket: "movie-recommendation-eng-304d7.appspot.com",
    messagingSenderId: "398500159508",
    appId: "1:398500159508:web:f04a95e76257e9226f0701",
    measurementId: "G-WCY6Z7HVT6"
};


// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };