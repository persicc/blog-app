"use client";

import React, { useContext } from "react";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { RiMenu4Fill } from "react-icons/ri";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import { UserContext } from "@/context/UserContext";

function Navbar() {
  const { signOut } = useAuth();
  const { currentUser } = useContext(UserContext);
  const pathname = usePathname();
  const toggleMobileMenu = () => {};

  if (pathname === "/signIn") return <></>;

  return (
    <div className={styles.navbar}>
      <div className={styles.linksContainer}>
        <Link href={"/"}>
          <div className={styles.logo}>Blogger.</div>
        </Link>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <Link href="/">My Feed</Link>
          <Link href="/favorites">Favorites</Link>
          <Link href="/">Profile</Link>
          <Link href="/">About Us</Link>
        </div>
      </div>
      <div className={styles.authLinks}>
        <button className={styles.signOutButton} onClick={signOut}>
          Sign out
        </button>
        <Link href="/write">
          <button className={styles.writeButton}>Write</button>
        </Link>
        <p>{currentUser?.email}</p>
        <div className={styles.imageContainer}>
          <img src={currentUser?.user_metadata.avatar_url} alt="User Avatar" />
        </div>
        <RiMenu4Fill
          onClick={toggleMobileMenu}
          className={styles.menuIcon}
          size={24}
        />
      </div>
    </div>
  );
}

export default Navbar;
