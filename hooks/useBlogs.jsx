"use client";

import { supabase } from "@/lib/supabase";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext";

function useBlogs() {
  const { currentUser } = useContext(UserContext);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase.from("blogs").select("*");
      setBlogs(data);
      if (error) {
        setError(error.message);
        throw new Error(error.message);
      }
    };

    fetchBlogs();
  }, []);

  const addBlog = async (title, content, file) => {
    if (!title || !content) return;

    console.log(file);

    await supabase
      .from("blogs")
      .insert({ title: title, content: content, user_id: user.id });

    await supabase.storage
      .from("blog-thumbnails")
      .upload(`${user?.id}/${file?.name}`, file);
  };

  const fetchSingleBlog = async (id) => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("id", id);
    return { data, error };
  };

  return { blogs, addBlog, error, fetchSingleBlog };
}

export default useBlogs;
