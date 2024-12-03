import styles from "./button.module.css";

function Button({ children, onClick }) {
  return (
    <div>
      <button className={styles.button} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
