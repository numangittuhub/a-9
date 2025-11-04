// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import { toast } from "react-toastify";

// Named Export
export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// Default Export
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signup = (email, password, name, photoURL = "") => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        const photo = photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=2d6a4f&color=fff`;
        return updateProfile(cred.user, { displayName: name, photoURL: photo });
      })
      .then(() => toast.success("Account created!"))
      .catch((e) => { toast.error(e.message); throw e; });
  };

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password)
    .then(() => toast.success("Logged in!"))
    .catch((e) => { toast.error(e.message); throw e; });

  const loginWithGoogle = () => signInWithPopup(auth, googleProvider)
    .then(() => toast.success("Google login!"))
    .catch((e) => { toast.error(e.message); throw e; });

  const logout = () => signOut(auth)
    .then(() => toast.success("Logged out!"))
    .catch(() => toast.error("Logout failed"));

  const resetPassword = (email) => sendPasswordResetEmail(auth, email)
    .then(() => toast.success("Reset link sent!"))
    .catch((e) => { toast.error(e.message); throw e; });

  const updateUserProfile = (updates) => {
    if (!auth.currentUser) return Promise.reject();
    return updateProfile(auth.currentUser, updates)
      .then(() => {
        setUser({ ...auth.currentUser, ...updates });
        toast.success("Profile updated!");
      })
      .catch((e) => { toast.error("Update failed"); throw e; });
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, loginWithGoogle, logout, resetPassword, updateUserProfile }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}