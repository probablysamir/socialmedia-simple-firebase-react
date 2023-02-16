// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRBVRgq6TLu4A0JnLiF32DaTZ7QeyQQBI",
  authDomain: "socialmedia-react-8e4b2.firebaseapp.com",
  projectId: "socialmedia-react-8e4b2",
  storageBucket: "socialmedia-react-8e4b2.appspot.com",
  messagingSenderId: "662895555628",
  appId: "1:662895555628:web:b2b3a9426df44857654d89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
