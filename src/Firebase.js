// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from  'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZU3waT7zBzGwoUSCMAIQpzuwrFueqmwo",
  authDomain: "facebook-clone-project-c4d11.firebaseapp.com",
  projectId: "facebook-clone-project-c4d11",
  storageBucket: "facebook-clone-project-c4d11.appspot.com",
  messagingSenderId: "643539265360",
  appId: "1:643539265360:web:3b9895d0bbd506c2dfee55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const Provider = new GoogleAuthProvider()
export const db = getFirestore(app)