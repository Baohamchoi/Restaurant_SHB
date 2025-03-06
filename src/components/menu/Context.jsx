import React, { createContext, useState, useEffect, useContext } from "react";

// Create the context
export const AuthContext = createContext();

// Create a custom hook for accessing the auth context
export const useAuth = () => useContext(AuthContext);

// Provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Check if user is logged in when component mounts
  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedInUser = localStorage.getItem("currentUser");
      if (loggedInUser) {
        try {
          const user = JSON.parse(loggedInUser);
          setCurrentUser(user);
          setIsLoggedIn(true);
        } catch (error) {
          console.error("Error parsing user data:", error);
          localStorage.removeItem("currentUser");
          setIsLoggedIn(false);
          setCurrentUser(null);
        }
      } else {
        setIsLoggedIn(false);
        setCurrentUser(null);
      }
    };

    // Initial check
    checkLoginStatus();

    // Set up storage event listener to detect changes from other tabs/windows
    window.addEventListener("storage", checkLoginStatus);

    return () => {
      window.removeEventListener("storage", checkLoginStatus);
    };
  }, []);

  // Login function
  const login = (userData) => {
    localStorage.setItem("currentUser", JSON.stringify(userData));
    setCurrentUser(userData);
    setIsLoggedIn(true);
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  // Provide the context value
  const contextValue = {
    isLoggedIn,
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
