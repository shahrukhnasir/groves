import { FaArrowRight } from "react-icons/fa";
import styles from "../CommanButton/CommanButton.module.css";

const CommanButton = ({ label, style, onClick, className, showArrow }) => {
  return (
    <span
      className={`${styles.GeneralButton} ${className}`}
      style={style}
      onClick={onClick}
    >
      <button>
        <span>{label}</span>
        {showArrow && <span className={styles.arrow}><FaArrowRight className={styles.arrow_inner} /></span>}
      </button>
    </span>
  );
};

export default CommanButton;
