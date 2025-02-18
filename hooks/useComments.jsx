"use client";

import { supabase } from "@/lib/supabase";
import useUser from "./useUser";

function useComments() {
  const { user } = useUser();

  const getComments = async (blogId) => {
    console.log("Blog id: ", blogId);

    const { data, error } = await supabase
      .from("comments")
      .select("*, users(email)")
      .eq("blog_id", blogId);

    return { data };
  };

  const addComment = async (blogId, content) => {
    const { data, error } = await supabase.from("comments").insert({
      blog_id: blogId,
      user_id: user.id,
      content: content,
    });
  };

  return { addComment, getComments };
}

export default useComments;
