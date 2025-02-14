"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import useUser from "./useUser";
import { useState } from "react";

function useAuth() {
  const { setUser } = useUser();
  const [error, setError] = useState(null);
  const router = useRouter();

  const signUp = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      setUser(data.user);
    } catch (error) {
      console.log("Error sam dobio:", error.message);
      setError(error.message);
    }
  };

  const signInWithPassword = async (email, password) => {
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      setUser(data.user);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const res = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      console.log("Google login response", res.data);
    } catch (error) {
      console.log("Erorr logging in with Google", error.message);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/signIn");
    console.log("Logged out");
  };

  return {
    signUp,
    signInWithPassword,
    signInWithGoogle,
    signOut,
    error,
  };
}

export default useAuth;
