// ✅ FirebaseContext.js
import { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { getFirestore, collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyDLXAc-Ox9serspsXw9nRzqDXPN3eHN8",
  authDomain: "timecapsulemail-98a82.firebaseapp.com",
  projectId: "timecapsulemail-98a82",
  storageBucket: "timecapsulemail-98a82.appspot.com",
  messagingSenderId: "24652939056",
  appId: "1:24652939056:web:47599b730d0505b8f592f5",
  measurementId: "G-06GYQFZCCH",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {

  const writeDoc = async ({ senderEmail, senderId, recipientEmail, message, deliveryDate, deliveryTime }) => {
    const [year, month, day] = deliveryDate.split("-").map(Number);
    const [hours, minutes] = deliveryTime.split(":" ).map(Number);
    const scheduledDate = new Date(year, month - 1, day, hours, minutes);

    const result = await addDoc(collection(firestore, "emails"), {
      senderEmail,
      senderId,
      recipientEmail,
      message,
      deliveryDate,
      deliveryTime,
      scheduledTimestamp: Timestamp.fromDate(scheduledDate),
      createdAt: serverTimestamp(),
      delivered: false,
    });
    console.log("Document written with ID:", result.id);
  };

  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);

  const signupUser = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (name) {
          return updateProfile(userCredential.user, { displayName: name });
        }
      });
  };

  const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      return signInWithRedirect(auth, provider);
    } else {
      return signInWithPopup(auth, provider);
    }
  };

  const logoutUser = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingUser(false);
    });

    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          console.log("Google Sign-In redirect successful", result.user);
        }
      })
      .catch((error) => {
        console.error("Google Sign-In redirect failed", error);
      });

    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider value={{ auth, user, loadingUser, signupUser, loginUser, logoutUser, loginWithGoogle, writeDoc }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};