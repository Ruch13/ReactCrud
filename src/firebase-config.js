import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB3YvE6efgC8rbbnu23R14VI2o_SUJvbkg",
  authDomain: "reactcrudapp-4609c.firebaseapp.com",
  projectId: "reactcrudapp-4609c",
  storageBucket: "reactcrudapp-4609c.appspot.com",
  messagingSenderId: "298455485352",
  appId: "1:298455485352:web:bad0650b8249c1f65ceb9d",
  measurementId: "G-KRJ3NPVL42"

};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
