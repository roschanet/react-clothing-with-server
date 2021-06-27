import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBTfq7U4qndJe5Upc7a9Og2Wot-rcpbJK4",
  authDomain: "clothing-shop-e701d.firebaseapp.com",
  projectId: "clothing-shop-e701d",
  storageBucket: "clothing-shop-e701d.appspot.com",
  messagingSenderId: "278741871501",
  appId: "1:278741871501:web:36bd966521826360d8abc4",
  measurementId: "G-3PW9F795K3",
};
// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;