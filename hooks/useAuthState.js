import { useState, useEffect } from "react";
import { auth } from "../firebase";

const useAuthState = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  });

  return user;
};

export default useAuthState;
