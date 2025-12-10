import { useState, useEffect } from "react";

export const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  useEffect(() => {
    const updateAuth = () => {
      setToken(localStorage.getItem("accessToken"));
    };

    window.addEventListener("storage", updateAuth);

    return () => {
      window.removeEventListener("storage", updateAuth);
    };
  }, []);

  return token;
};
