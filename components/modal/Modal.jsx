import { useEffect } from "react";
import styles from "./modal.module.css";
import Button from "../button/Button";

function Modal({ children, open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div
      className={`${styles.modalContainer} ${
        open ? styles.open : styles.close
      }`}
    >
      <div className={styles.modal}>
        {children}
        <Button className={styles.closeButton} onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}

export default Modal;
