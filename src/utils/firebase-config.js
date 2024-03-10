import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBd4_OGGTF_lnjrqgt20GFqnL40sIKWfjs",
  authDomain: "netflix-project-1e98d.firebaseapp.com",
  projectId: "netflix-project-1e98d",
  storageBucket: "netflix-project-1e98d.appspot.com",
  messagingSenderId: "402774117007",
  appId: "1:402774117007:web:414e10839d6f9f05497efa",
  measurementId: "G-5VNJLZQX0N"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);