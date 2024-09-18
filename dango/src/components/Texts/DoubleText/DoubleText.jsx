import PropTypes from "prop-types";
import styles from "./DoubleText.module.css";

const DoubleText = ({ className = "", textprops }) => {
  return (
    <div className={[styles.textdoublecomponent, className].join(" ")}>
      <b className={styles.text1}>{textprops}</b>
      <b className={styles.text2}>님 가입을 환영합니다.</b>
    </div>
  );
};

DoubleText.propTypes = {
  className: PropTypes.string,
  textprops: PropTypes.string,
};

export default DoubleText;
