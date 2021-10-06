import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAPaORjkxrLEyvnKL-nfUG-kCaZ6IqtiJ0",
  authDomain: "todo-app-eade4.firebaseapp.com",
  projectId: "todo-app-eade4",
  storageBucket: "todo-app-eade4.appspot.com",
  messagingSenderId: "456220875057",
  appId: "1:456220875057:web:7c681af77bfd6fb706f810",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();