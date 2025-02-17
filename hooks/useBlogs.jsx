"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import useUser from "./useUser";

function useBlogs() {
  const { user } = useUser();
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("blogs")
        .select("*, users(email)")
        .order("created_at", { ascending: false });
      console.log(data);
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

  const getBlogById = async (id) => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*, users(email)")
      .eq("id", id);
    return { data, error };
  };

  return { blogs, addBlog, error, getBlogById };
}

export default useBlogs;
