import React, { useContext } from "react";

import styles from "./mobileMenu.module.css";
import Link from "next/link";

function MobileMenu(mobileMenuOpen, onClose) {
  mobileMenuOpen = false;
  if (!mobileMenuOpen) return <></>;

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.links}>
        <Link href="/">Home</Link>
        <Link href="/">My Feed</Link>
        <Link href="/">Favorites</Link>
        <Link href="/">Profile</Link>
        <Link href="/">About Us</Link>
      </div>
      <h3 onClick={onClose}>Close</h3>
    </div>
  );
}

export default MobileMenu;
