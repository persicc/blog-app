import styles from "./button.module.css";

function Button({ children, onClick, outline, full }) {
  return (
    <div className={styles.buttonContainer} style={{ width: full && "100%" }}>
      <button
        className={outline ? styles.outline : styles.button}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
