import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useContext, useReducer, useState } from "react";
import React from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "":
      return { ...state };
    default:
      return state;
  }
};

export default function AuthContext({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleRegister = () => {
    clearError();
  };
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const authWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  const values = { register, authWithGoogle };
  //!  REGISTER FUNC
  function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
}
