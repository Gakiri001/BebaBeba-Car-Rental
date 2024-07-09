// ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "./useAuth";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/Login" />;
}

export default ProtectedRoute;
