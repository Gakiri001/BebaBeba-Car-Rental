// useAuth.js
import { useState, useEffect } from "react";

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for authentication status (e.g., checking if a token exists in localStorage)
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  }, []);

  return { isAuthenticated };
}

export default useAuth;
