"use client";

import useAuth from "@/hooks/useAuth";
import { React, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import styles from "./page.module.css";

function SignInPage() {
  const { signInWithGoogle, signUp, signInWithPassword, error } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={styles.signIn}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span>Become a</span> blogger.
          </h1>
        </div>
        <div className={styles.authContainer}>
          {error && <p className={styles.error}>{error}</p>}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={styles.authButton}
            onClick={(email, password) => signUp(email, password)}
          >
            Sign Up
          </button>
          <button
            className={styles.authButton}
            onClick={(email, password) => signInWithPassword(email, password)}
          >
            Log In
          </button>
          <button className={styles.authButton} onClick={signInWithGoogle}>
            Continue with Google
            <FcGoogle size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
