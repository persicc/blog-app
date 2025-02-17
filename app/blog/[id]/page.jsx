"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import useBlogs from "@/hooks/useBlogs";
import styles from "./page.module.css";

function SingleBlogPage() {
  const { getBlogById } = useBlogs();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1736895377297-2c6c33bfa988?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  useEffect(() => {
    const getBlog = async () => {
      const { data } = await getBlogById(id);
      setBlog(data[0]);
    };
    getBlog();
  }, []);

  return (
    <div className={styles.singleBlogPage}>
      <div className="container">
        <h1 className={styles.title}>{blog.title}</h1>
        <p>{blog?.users?.email}</p>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt="Blog Thumbnail" />
        </div>
        <p className={styles.content}>{blog.content}</p>
      </div>
    </div>
  );
}

export default SingleBlogPage;
