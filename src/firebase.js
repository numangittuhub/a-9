import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDJ7T6NHuEO8nsUkBP8cJcvSlqBVF-Rzcg",
  authDomain: "green-nest-6986b.firebaseapp.com",
  projectId: "green-nest-6986b",
  storageBucket: "green-nest-6986b.firebasestorage.app",
  messagingSenderId: "52880210543",
  appId: "1:52880210543:web:24108b01dccf6d59dd2b9a"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();