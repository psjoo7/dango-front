import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TextInput.module.css";

const TextInput = ({ className = "", inputLabel, propMinWidth, propWidth }) => {
  const inputLabelStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propMinWidth, propWidth]);

  return (
    <div className={[styles.inputlogincomponent, className].join(" ")}>
      <div className={styles.inputlabel} style={inputLabelStyle}>
        {inputLabel}
      </div>
      <input className={styles.inputtext} type="text" />
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  inputLabel: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default TextInput;
