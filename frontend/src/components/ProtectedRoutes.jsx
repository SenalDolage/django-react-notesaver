import { useState, useEffect, use } from "react";
import { Navigate } from "react-router-dom";
import { jwtdecode } from "jwt-decode";
import api from "./api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";

// This component is used to protect routes that require authentication
// It checks if the user is authorized and redirects to the login page if not
// It also handles token refresh logic
function ProtectedRoutes({ children }) {
  const [isAuthorized, setIsAuthorized] = useState(null);

  // Check if the user is authorized when the component mounts
  useEffect(() => {
    auth().catch(() => {
      setIsAuthorized(false);
    });
  }, []);

  // Function to refresh the access token using the refresh token
  // If the refresh token is valid, it updates the access token in local storage
  const refreshToken = async () => {
    const refreshTokenValue = localStorage.getItem(REFRESH_TOKEN);
    if (!refreshTokenValue) {
      setIsAuthorized(false);
      return;
    }

    try {
      const response = await api.post("/auth/refresh/", {
        refresh: refreshTokenValue,
      });
      // Update the access token in local storage
      if (response.status === 200) {
        const newAccessToken = response.data.access;
        localStorage.setItem(ACCESS_TOKEN, newAccessToken);
        setIsAuthorized(true);
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      setIsAuthorized(false);
    }
  };

  // Function to check if the user is authorized
  const auth = async () => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshTokenValue = localStorage.getItem(REFRESH_TOKEN);

    if (!accessToken || !refreshTokenValue) {
      setIsAuthorized(false);
      return;
    }

    try {
      const decoded = jwtdecode(accessToken);
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        // Access token is expired, try to refresh it
        await refreshToken();
      } else {
        // Access token is valid
        setIsAuthorized(true);
      }
    } catch (error) {
      console.error("Error decoding token:", error);
      setIsAuthorized(false);
    }
  };

  if (isAuthorized == null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? children : <Navigate to="/login" />;
}

export default ProtectedRoutes;
