import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./RegularText.module.css";

const RegularText = ({
  className = "",
  propWidth,
  propAlignSelf,
  text,
  propHeight,
  propFontSize,
  propFontWeight,
  propMargin,
  propFlex,
  propColor,
  propMinWidth,
}) => {
  const textComponentStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const textStyle = useMemo(() => {
    return {
      height: propHeight,
      fontSize: propFontSize,
      fontWeight: propFontWeight,
      margin: propMargin,
      flex: propFlex,
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [
    propHeight,
    propFontSize,
    propFontWeight,
    propMargin,
    propFlex,
    propColor,
    propMinWidth,
  ]);

  return (
    <div
      className={[styles.textcomponent, className].join(" ")}
      style={textComponentStyle}
    >
      <span className={styles.text} style={textStyle}>
        {text}
      </span>
    </div>
  );
};

RegularText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propHeight: PropTypes.any,
  propFontSize: PropTypes.any,
  propFontWeight: PropTypes.any,
  propMargin: PropTypes.any,
  propFlex: PropTypes.any,
  propColor: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default RegularText;
