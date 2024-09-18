import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./RegularButton.module.css";

const RegularButton = ({
  className = "",
  propWidth,
  propAlignSelf,
  propPadding,
  buttonText,
  propMinWidth,
  propWidth1,
  propFontSize,
  propFlex,
}) => {
  const buttonComponentStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
      padding: propPadding,
    };
  }, [propWidth, propAlignSelf, propPadding]);

  const buttonTextStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
      width: propWidth1,
      fontSize: propFontSize,
      flex: propFlex,
    };
  }, [propMinWidth, propWidth1, propFontSize, propFlex]);

  return (
    <button
      className={[styles.buttoncomponent, className].join(" ")}
      style={buttonComponentStyle}
    >
      <b className={styles.buttontext} style={buttonTextStyle}>
        {buttonText}
      </b>
    </button>
  );
};

RegularButton.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propPadding: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth1: PropTypes.any,
  propFontSize: PropTypes.any,
  propFlex: PropTypes.any,
};

export default RegularButton;
