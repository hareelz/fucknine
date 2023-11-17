import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import React from "react";
import { auth, fire } from "../firebase";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { ACTIONS_USER } from "../helpers/consts";

const authContext = createContext();
export const useAuth = () => useContext(authContext);

const INIT_STATE = {
  user: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case ACTIONS_USER.CHECK_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default function AuthContext({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const checkUser = () => {
    onAuthStateChanged(auth, (user) => {
      // dispatch({ type: ACTIONS_USER.CHECK_USER, payload: user });
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    checkUser();
  }, [state.user]);

  const authWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
  };

  //!  REGISTER FUNC

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //! LOGIN FUNC

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //! LOGOUT FUNC

  const logout = async () => {
    try {
      await signOut(auth);
      setUser({ email: "1" });
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    authWithGoogle,
    register,
    login,
    logout,
    user,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
}
