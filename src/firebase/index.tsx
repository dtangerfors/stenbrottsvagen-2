import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged, GoogleAuthProvider} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase} from "firebase/database";
import { onDataChange } from "./helper_functions";

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
};

let app
let auth: any
let firebaseDB
let analytics
let provider: any

if (typeof window !== "undefined") {
  app = app || initializeApp(firebaseConfig);
  auth = getAuth(app);
  firebaseDB = getDatabase(app);
  analytics = getAnalytics(app);
  provider = new GoogleAuthProvider();
}

export { auth, onAuthStateChanged, analytics, onDataChange, firebaseDB, provider };