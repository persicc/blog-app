"use client";

import { supabase } from "@/lib/supabase";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        console.log("Getting user...");
        const { data, error } = await supabase.auth.getUser();
        setCurrentUser(data.user);
      } catch (error) {
        console.log("Error getting user", error.messsage);
      }
      console.log("Finished getting user");
      console.log(currentUser);
      setIsLoading(false);
      console.log("Loading finished");
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setCurrentUser(session?.user || null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
