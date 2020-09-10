import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBHTD8Q1-0KVAcYkE_OSTv5G4UKILxqV1k",
  authDomain: "crwn-clothing-bdc45.firebaseapp.com",
  databaseURL: "https://crwn-clothing-bdc45.firebaseio.com",
  projectId: "crwn-clothing-bdc45",
  storageBucket: "crwn-clothing-bdc45.appspot.com",
  messagingSenderId: "370738850988",
  appId: "1:370738850988:web:6a08a860919131b0cb8309",
  measurementId: "G-KFN8FQCP5B",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
