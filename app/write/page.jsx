"use client";

import React, { useState } from "react";
import useBlogs from "@/hooks/useBlogs";
import Modal from "@/components/Modal/Modal";
import styles from "./page.module.css";

function WritePage() {
  const { addBlog } = useBlogs();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = () => {
    addBlog(title, content, file);
    setModalOpen(true);
    setTitle("");
    setContent("");
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.writePage}>
      <div className="container">
        <h1 className={styles.title}>Write your blog.</h1>
        <input
          className={styles.input}
          type=" text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className={styles.textarea}
          value={content}
          placeholder="Write your blog here..."
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleSubmit} className={styles.button}>
          Submit
        </button>

        {preview && <img src={preview} alt="Preview" />}

        <Modal isOpen={modalOpen} onClose={closeModal} />
      </div>
    </div>
  );
}

export default WritePage;
