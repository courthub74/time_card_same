// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// DONT NEED ALL THE LIBRARIES JUST:
// AUTH
"https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
// FIREBASE FIRESTORE
"https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClebQ_EbOEFkP64ljsyhbhGI6sNwtsvYE",  //Encrypt this eventually
  authDomain: "time-card-db-643c7.firebaseapp.com",
  projectId: "time-card-db-643c7",
  storageBucket: "time-card-db-643c7.firebasestorage.app",
  messagingSenderId: "1084464719976",
  appId: "1:1084464719976:web:e925dbda8c69d14bc033dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Firebase Auth
const auth = firebase.auth();

// Firebase Firestore
const db = firebase.firestore();

// update Firebase settings
db.settings({timestampsInSnapshots: true});