import PropTypes from "prop-types";
import styles from "./CheckBoxButton.module.css";

const CheckBoxButton = ({ className = "" }) => {
  return (
    <div className={[styles.checkboxcomponent, className].join(" ")}>
      <input className={styles.checkbox} type="checkbox" />
      <div className={styles.rememberMeLabelWrapper}>
        <div className={styles.checkboxlabel}>이메일 저장</div>
      </div>
    </div>
  );
};

CheckBoxButton.propTypes = {
  className: PropTypes.string,
};

export default CheckBoxButton;
