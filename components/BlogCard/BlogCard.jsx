import React from "react";
import styles from "./blogCard.module.css";
import { FaArrowUp } from "react-icons/fa6";

function BlogCard({ title, content, userEmail }) {
  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1736895377297-2c6c33bfa988?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className={styles.blogCard}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{content}</p>
        <p>{userEmail}</p>
      </div>
      <div className={styles.imageContainer}>
        <FaArrowUp className={styles.arrow} size={40} />
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
}

export default BlogCard;
