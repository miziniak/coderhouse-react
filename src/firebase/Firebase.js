
import { initializeApp } from "firebase/app";
import { doc, getFirestore } from "firebase/firestore"
import { collection, getDocs, where, query, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_Vqcagvi7QtfGSiETcVpDE5NorgeInq8",
  authDomain: "coder-after.firebaseapp.com",
  projectId: "coder-after",
  storageBucket: "coder-after.appspot.com",
  messagingSenderId: "507634208382",
  appId: "1:507634208382:web:d30d074c2aa19bdcc0d22f"
};

initializeApp(firebaseConfig);
const db = getFirestore();

export const allItem = () => {
  const query = getDocs(collection(db, 'items'))
  return query
}

export const itemCat = (categoria) => {
  const q = collection(db, 'items')
  const q2 = query(q, where('categoria', '==', categoria))
  const q3 = getDocs(q2)
  return q3
}

export const only = (id) =>{
  const q = doc(db, 'items', id)
  const q2 = getDoc(q)
  return q2
}
