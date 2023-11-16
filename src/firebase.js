// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpO67nviy3Xc6V1XH7xREBF9tPykX-c3s",
  authDomain: "mortal-kombat-2f109.firebaseapp.com",
  projectId: "mortal-kombat-2f109",
  storageBucket: "mortal-kombat-2f109.appspot.com",
  messagingSenderId: "2049264580",
  appId: "1:2049264580:web:3e123beb87df36656f3291",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const fire = getAuth(app);
export default app;
