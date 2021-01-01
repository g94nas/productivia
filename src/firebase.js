import firebase from "firebase/app";
import "@firebase/firestore";
import "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4Qyd1gTGquyrprWUHur5AKKIUkJA0JP0",
  authDomain: "productivia-aafcf.firebaseapp.com",
  projectId: "productivia-aafcf",
  storageBucket: "productivia-aafcf.appspot.com",
  messagingSenderId: "653452799151",
  appId: "1:653452799151:web:e2d09de8783710f41ef85a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
