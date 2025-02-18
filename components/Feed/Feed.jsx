"use client";

import useBlogs from "@/hooks/useBlogs";
import Link from "next/link";
import React from "react";
import BlogCard from "../BlogCard/BlogCard";
import styles from "./feed.module.css";

function Feed() {
  const { blogs } = useBlogs();

  return (
    <div className={styles.feed}>
      <h1 className={styles.title}>Latest</h1>
      {blogs.length <= 0 && <h3>No blogs to see...</h3>}
      {blogs.map((blog) => (
        <Link href={`/blog/${blog.id}`} key={blog.id}>
          <BlogCard
            id={blog.id}
            title={blog.title}
            content={blog.content}
            userEmail={blog.users.email}
          />
        </Link>
      ))}
    </div>
  );
}

export default Feed;
