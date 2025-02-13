"use client";

import useBlogs from "@/hooks/useBlogs";
import Link from "next/link";
import React, { useEffect } from "react";
import BlogCard from "../BlogCard/BlogCard";
import styles from "./feed.module.css";
import useUser from "@/hooks/useUser";

function Feed() {
  const { blogs } = useBlogs();
  const { users, insertUser } = useUser();

  useEffect(() => {
    insertUser();
  }, []);

  return (
    <div className={styles.feed}>
      <h1 className={styles.title}>Latest</h1>
      {blogs.map((blog) => (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <BlogCard />
        </Link>
      ))}
    </div>
  );
}

export default Feed;
