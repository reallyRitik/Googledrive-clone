//import firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
//import { getAuth } from "firebase/auth";
//import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDtr_G4Wc4zGca-Xbmxvap5FxsJF0cK6wE",
  authDomain: "drive-clone-9d117.firebaseapp.com",
  projectId: "drive-clone-9d117",
  storageBucket: "drive-clone-9d117.appspot.com",
  messagingSenderId: "853102698819",
  appId: "1:853102698819:web:8af2ba76053441bbc38ff6"
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const storage = getStorage(firebaseApp);
//const auth = firebase.auth();
// const provider = new firebase.auth.googleAuthProvider();

// export{ db, storage, auth, provider }
// Firebase storage reference
const storage = getStorage(firebaseApp);
//const auth = getAuth(firebaseApp)
//const db = getDatabase(firebaseApp);
//const provider = new firebase.auth.googleAuthProvider();



export default storage  ;