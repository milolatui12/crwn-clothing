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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocument = (collectionKey, objectToAdd) => {
  const colletionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectToAdd.forEach(obj => {
    const newDocRef = colletionRef.doc();
    batch.set(newDocRef, obj)
  });

  batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  console.log(transformedCollection);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
