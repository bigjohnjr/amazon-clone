import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXHFAqBRr_-rg8CQrslRyKhrjG9uSf0NI",
  authDomain: "clone-c058f.firebaseapp.com",
  projectId: "clone-c058f",
  storageBucket: "clone-c058f.appspot.com",
  messagingSenderId: "228837658519",
  appId: "1:228837658519:web:aef0bc36b6c6bd8854fed2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
