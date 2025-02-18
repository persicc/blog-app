"use client";

import React, { useContext } from "react";
import Modal from "../Modal/Modal";
import { AuthModalContext } from "@/context/AuthModalContext";
import Link from "next/link";
import styles from "./authModal.module.css";

function AuthModal() {
  const { open } = useContext(AuthModalContext);
  return (
    <Modal open={open}>
      <div className={styles.authModal}>
        <div className={styles.logo}>Blogger</div>
        <p className={styles.modalMessage}>Sign in to continue</p>
        <div className={styles.content}>
          <Link href={"/signIn"}>
            <button className={styles.button}>Sign in</button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}

export default AuthModal;
