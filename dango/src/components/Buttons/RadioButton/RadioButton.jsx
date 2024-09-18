import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./RadioButton.module.css";

const RadioButton = ({
  className = "",
  propGap,
  propFlex,
  propFlex1,
  prop,
  propMinWidth,
  propAlignSelf,
}) => {
  const component3Style = useMemo(() => {
    return {
      gap: propGap,
      flex: propFlex,
    };
  }, [propGap, propFlex]);

  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex1,
    };
  }, [propFlex1]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propMinWidth, propAlignSelf]);

  return (
    <div
      className={[styles.component3, className].join(" ")}
      style={component3Style}
    >
      <input
        className={styles.component3Child}
        type="radio"
        name="radioGroup-1"
      />
      <div className={styles.wrapper} style={frameDivStyle}>
        <div className={styles.div} style={divStyle}>
          {prop}
        </div>
      </div>
    </div>
  );
};

RadioButton.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propFlex: PropTypes.any,
  propFlex1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default RadioButton;
