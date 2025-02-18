"use client";

import React, { useEffect } from "react";
import styles from "./modal.module.css";

function Modal({ children, open }) {
  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "scroll");
  }, [open]);

  if (open)
    return (
      <div className={styles.modal}>
        <div className={styles.overlay}></div>
        <div className={styles.content}>{children}</div>
      </div>
    );
}

export default Modal;
