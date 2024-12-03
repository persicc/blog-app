import { useEffect } from "react";
import styles from "./modal.module.css";

function Modal({ children, open, onClose }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <div
      className={`${open ? styles.open : styles.close} ${
        styles.modalContainer
      }`}
    >
      <div
        className={`${open ? styles.openModal : styles.closeModal}, ${
          styles.modal
        }`}
      >
        {children}

        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
