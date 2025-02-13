import React from "react";
import styles from "./input.module.css";

function Input({ type, placeholder }) {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  );
}

export default Input;
