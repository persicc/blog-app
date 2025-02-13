"use client";

import useAuth from "@/hooks/useAuth";
import { React, useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Input from "@/components/Input/Input";
import styles from "./page.module.css";

function SignInPage() {
  const { signInWithGoogle, signUp, signInWithPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUp = async () => {
    const { data, error } = await signUp(email, password);

    if (error) {
      setErrorMessage(error.message);
    }
  };

  const handleSignInWithPassword = async () => {
    const { data, error } = await signInWithPassword(email, password);
    console.log(error.message);
    if (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className={styles.signIn}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            <span>Become a</span> blogger.
          </h1>
        </div>
        <div className={styles.authContainer}>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
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
          <button className={styles.authButton} onClick={handleSignUp}>
            Sign Up
          </button>
          <button
            className={styles.authButton}
            onClick={handleSignInWithPassword}
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
