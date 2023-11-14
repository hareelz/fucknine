import { createContext, useContext, useReducer } from "react";

const authContext = createContext();
export const useContext = () => useContext(authContext);

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

import React from "react";

export default function AuthContext({ children }) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  values = {};
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
}
