"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Modal from "../modal/Modal";
import SearchIcon from "@mui/icons-material/Search";
import MobileMenu from "../mobileMenu/MobileMenu";
import AuthLinks from "../authLinks/authLinks";
import { useRouter } from "next/navigation";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const rouer = useRouter();

  const openModal = () => {
    setOpen(!open);
  };

  const openSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const openMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
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
        <div className={`${styles.searchButton} ${searchOpen ? "open" : ""}`}>
          {searchOpen && (
            <input type="text" placeholder="Search for posts..." />
          )}
          <SearchIcon className={styles.searchIcon} onClick={openSearch} />
        </div>

        <AuthLinks />

        <div className={styles.menuButton} onClick={openMobileMenu}>
          Menu
        </div>
      </div>

      <Modal open={open} onClose={openModal}>
        This is modal
      </Modal>

      <MobileMenu open={mobileMenuOpen} onClose={openMobileMenu} />
    </div>
  );
}

export default Navbar;
