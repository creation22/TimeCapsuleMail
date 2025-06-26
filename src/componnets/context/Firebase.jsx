import { createContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

export const FirebaseContext = createContext(null);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true); // To avoid flicker

  // Signup with email
  const signupUser = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if (name) {
          return updateProfile(userCredential.user, { displayName: name });
        }
      });
  };

  // Login with email
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // Logout
  const logoutUser = () => {
    return signOut(auth);
  };

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingUser(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <FirebaseContext.Provider
      value={{
        auth,
        user,
        loadingUser,
        signupUser,
        loginUser,
        logoutUser,
        loginWithGoogle,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
