
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "kayrochat.firebaseapp.com",
  projectId: "kayrochat",
  storageBucket: "kayrochat.appspot.com",
  messagingSenderId: "740943525949",
  appId: "1:740943525949:web:748fafc406f15e2f3d5254"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const Storage = getStorage