import React, { createContext, useContext, useEffect, useReducer } from "react";

// Initial state for the authentication context
const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};

// Creating the authentication context
export const authContext = createContext(initialState);

// Reducer function to manage state changes based on dispatched actions
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        role: null,
        token: null,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };

    case "LOGOUT_SUCCESS":
      return {
        user: null,
        role: null,
        token: null,
      };

    default:
      return state;
  }
};

// Custom hook to access the auth context's values
export const useAuth = () => {
  return useContext(authContext);
};

// Provider component to wrap the application with the auth context
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
  }, [state]);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default authContext;
