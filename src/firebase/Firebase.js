import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAcyC2UMCQ3TfoDWj6FQOsdYHS-dSdG8aY",
    authDomain: "crnw-db-a41b2.firebaseapp.com",
    databaseURL: "https://crnw-db-a41b2.firebaseio.com",
    projectId: "crnw-db-a41b2",
    storageBucket: "crnw-db-a41b2.appspot.com",
    messagingSenderId: "423927163393",
    appId: "1:423927163393:web:e1e0d4e5cd6c1b4a276e00",
    measurementId: "G-DND1BWP528"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
