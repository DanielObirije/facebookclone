// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from  'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD0m7hC6auHY8mTsRimfQw6gTVfedISK2o",
  authDomain: "facebook-clone-8c232.firebaseapp.com",
  projectId: "facebook-clone-8c232",
  storageBucket: "facebook-clone-8c232.appspot.com",
  messagingSenderId: "6675240022",
  appId: "1:6675240022:web:d8ce37e26214d831f197f7"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const Provider = new GoogleAuthProvider()
export const db = getFirestore(app)