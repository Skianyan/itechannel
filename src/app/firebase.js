import { getApp, getApps, initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD6DBKvA3JW07O5o5ywaACcODYKK0GyLg0",
	authDomain: "itechannel.firebaseapp.com",
	projectId: "itechannel",
	storageBucket: "itechannel.appspot.com",
	messagingSenderId: "612556848015",
	appId: "1:612556848015:web:3e2a3c170e8abefbae69fa",
	measurementId: "G-0ZE0672D2B",
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { app, db, auth };
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
//export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

export default firebase.initializeApp(firebaseConfig);
