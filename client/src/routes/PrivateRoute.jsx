import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { token } = useContext(authContext);

  // Allow access to children (e.g., Signin or Signup) only if token is null
  const accessibleRoute = token ? <Navigate to="/" replace={true} /> : children;

  return accessibleRoute;
};

export default PrivateRoute;
