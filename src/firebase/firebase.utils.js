import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCmn_nM_OOVEVp67cwyE4MduLSpT92wo3o",
  authDomain: "crown-db-2dbab.firebaseapp.com",
  databaseURL: "https://crown-db-2dbab.firebaseio.com",
  projectId: "crown-db-2dbab",
  storageBucket: "crown-db-2dbab.appspot.com",
  messagingSenderId: "314494659722",
  appId: "1:314494659722:web:2897e0d16da0d5ff089173"
};

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
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
