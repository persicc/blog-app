"use client";

import { supabase } from "@/lib/supabase";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user);
        console.log("User: ", user);
      } catch (error) {
        console.log("Error checking user: ", error.message);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
