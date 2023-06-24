import { useState, useEffect } from "react";

// Jeszcze nie działa

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token !== "") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  return loggedIn;
};
