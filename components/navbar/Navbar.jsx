"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Modal from "../modal/Modal";

function Navbar() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.left}>
        <Link href={"/"}>
          <span className={styles.logo}>BlogSpot.</span>
        </Link>
        <div className={styles.links}>
          <span>Articles</span>
          <span>Radio</span>
          <span>Podcast</span>
          <span>Be a writer</span>
          <span>Talk to us</span>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.searchIcon} onClick={openModal}></div>
        <div className={styles.menuButton}>Menu</div>
      </div>

      <Modal open={open} onClose={openModal}>
        This is modal
      </Modal>
    </div>
  );
}

export default Navbar;
