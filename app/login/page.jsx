import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <h1>Login</h1>
        <input className={styles.input} type="text" placeholder="Username" />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
        />

        <div className={styles.buttons}>
          <Button full>Login</Button>
          <Button full outline>
            Login with Google
            <Image src="/google.png" width={40} height={20} alt="google" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
