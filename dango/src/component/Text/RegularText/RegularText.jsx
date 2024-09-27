import PropTypes from "prop-types";
import styles from "./RegularText.module.css";

const RegularText = ({
  propClassName = "", // className에도 prop 접두사 추가
  propText = "", // text에도 prop 접두사 추가
  propFontSize = "16px",
  propFontWeight = "700",
  propColor = "black",
  propLineHeight = "1",
}) => {
  const textStyle = {
    fontSize: propFontSize,
    fontWeight: propFontWeight,
    color: propColor,
    lineHeight: propLineHeight,
  };

  return (
    <div className={`${styles.textcomponent} ${propClassName}`}>
      <span className={styles.text} style={textStyle}>
        {propText}
      </span>
    </div>
  );
};

RegularText.propTypes = {
  propClassName: PropTypes.string, // className prop에 prop 접두사 추가
  propText: PropTypes.string, // text에도 prop 접두사 추가
  propFontSize: PropTypes.string,
  propFontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  propColor: PropTypes.string,
  propLineHeight: PropTypes.string,
};

export default RegularText;
