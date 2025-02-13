"use client";

import React from "react";
import styles from "./modal.module.css";
import { IoCheckmarkOutline } from "react-icons/io5";

function Modal({ isOpen, onClose }) {
  return (
    <div
      onClick={onClose}
      className={`${isOpen ? styles.overlay : styles.close}`}
    >
      <div className={styles.modal}>
        <span className={styles.text}>Blog Created</span>
        <div className={styles.icon}>
          <IoCheckmarkOutline size={40} />
        </div>
      </div>
    </div>
  );
}

export default Modal;
