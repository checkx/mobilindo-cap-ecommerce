import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDZ86Y9BPMpewrMr_ju9s2mnhjYP2dE9gc",
  authDomain: "cap-ecommerce-mobilindo.firebaseapp.com",
  projectId: "cap-ecommerce-mobilindo",
  storageBucket: "cap-ecommerce-mobilindo.appspot.com",
  messagingSenderId: "286639074286",
  appId: "1:286639074286:web:ca6a9dece51f35485f3cff"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const logout = () => {
  signOut(auth);
};

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
};
