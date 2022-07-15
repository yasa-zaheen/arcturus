// Imports
import firebase from "firebase";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw8AxLlbq1pzBYlMeDatupwm_B6WfQuJ8",
  authDomain: "arcturus-4da6f.firebaseapp.com",
  projectId: "arcturus-4da6f",
  storageBucket: "arcturus-4da6f.appspot.com",
  messagingSenderId: "270600795310",
  appId: "1:270600795310:web:fe29541649cd869005293f",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const auth = firebase.auth();

export { auth };
