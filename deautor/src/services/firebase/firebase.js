import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDzUniiskXJXXy4zRnYb3RU1O_uaeKk40w",
  authDomain: "deautor-f5912.firebaseapp.com",
  projectId: "deautor-f5912",
  storageBucket: "deautor-f5912.appspot.com",
  messagingSenderId: "384560601599",
  appId: "1:384560601599:web:e8d8efa9cf403417e26fca"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)