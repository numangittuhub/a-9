// src/hooks/useAuth.js
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx"; // .jsx যোগ করো

export const useAuth = () => useContext(AuthContext);