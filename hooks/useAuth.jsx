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
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    setUser(data.user);

    if (error) {
      setError(error.message);
    } else {
      await supabase.from("users").insert({
        id: data.user.id,
        email: data.user.email,
        imgUrl: "",
        created_at: data.user.created_at,
      });
      router.push("/");
    }
  };

  const signInWithPassword = async (email, password) => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    setUser(data.user);

    if (error) {
      setError(error.message);
    } else {
      router.push("/");
    }
  };

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      setError(error.message);
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/signIn");
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
