import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./TextInput.module.css";

const TextInput = ({
  className = "",
  inputLabel,
  propMinWidth,
  propWidth,
  value, // value 속성 추가
  onChange, // onChange 속성 추가
}) => {
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
      {/* value와 onChange 추가 */}
      <input
        className={styles.inputtext}
        type="text"
        value={value} // value 추가
        onChange={onChange} // onChange 추가
      />
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,
  inputLabel: PropTypes.string,
  value: PropTypes.string, // value prop 추가
  onChange: PropTypes.func, // onChange prop 추가

  /** Style props */
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default TextInput;
