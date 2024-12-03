"use client";

import React, { useEffect } from "react";
import styles from "./mobileMenu.module.css";
import Button from "../button/Button";

function MobileMenu({ open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "scroll";
  }, [open]);

  return (
    <div
      className={`${styles.mobileMenu} ${open ? styles.open : styles.close}`}
    >
      <span>Articles</span>
      <span>Radio</span>
      <span>Podcast</span>
      <span>Be a writer</span>
      <span>Talk to us</span>
      <Button onClick={onClose}>Close</Button>
    </div>
  );
}

export default MobileMenu;
