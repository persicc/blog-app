"use client";

import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useState } from "react";

function useAuth() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      console.log("Error sam dobio:", error.message);
    } else {
      console.log("User created: ", data);
    }

    return { data, error };
  };

  const signInWithPassword = async (email, password) => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      console.log(error.message);
    }

    console.log("User signed in: ", data);
    setUser(data.user);

    return { data, error };
  };

  const signInWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/signIn");
  };

  return {
    user,
    signInWithGoogle,
    signOut,
    signUp,
    signInWithPassword,
  };
}

export default useAuth;
