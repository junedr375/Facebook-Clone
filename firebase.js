// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB8zYSciB71uZOwMChF5v0GSF41uvXR9Pc",
  authDomain: "facebook-clone-2f312.firebaseapp.com",
  projectId: "facebook-clone-2f312",
  storageBucket: "facebook-clone-2f312.appspot.com",
  messagingSenderId: "756184102823",
  appId: "1:756184102823:web:e4ba7ef9193b2807bfa882",
  measurementId: "G-W6SPYYER1M",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
