"use client";

import { supabase } from "@/lib/supabase";
import useUser from "./useUser";

function useFavorites() {
  const { user } = useUser();

  const addToFavorites = async (blogId) => {
    await supabase.from("favorites").insert({
      user_id: user.id,
      blog_id: blogId,
    });
  };

  const getFavorites = async () => {
    const { data, error } = await supabase
      .from("favorites")
      .select("*, blogs(title, content), users(email)")
      .eq("user_id", user.id);

    return data;
  };

  return { addToFavorites, getFavorites };
}
export default useFavorites;
