"use client";

import React from "react";
import styles from "./blogCard.module.css";
import { FaArrowUp } from "react-icons/fa6";

function BlogCard() {
  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1736895377297-2c6c33bfa988?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className={styles.blogCard}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>
          I Asked My French Colleague How She Survives on a EUR 3,300 Salary.
          She Confused Me.
        </h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          voluptas.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <FaArrowUp className={styles.arrow} size={40} />
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
}

export default BlogCard;
