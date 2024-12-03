import styles from "./button.module.css";

function Button({ children, onClick, color }) {
  return (
    <div>
      <button
        className={styles.button}
        onClick={onClick}
        style={{ backgroundColor: color }}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
