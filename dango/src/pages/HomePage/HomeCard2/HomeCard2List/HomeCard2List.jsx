import React from "react";
import PropTypes from "prop-types";
import styles from "./HomeCard2List.module.css";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import DoubleText from "../../../../component/Text/DoubleText/DoubleText";

const HomeCard2List = ({
  propText = "단어",
  propCircleColor = "var(--color-dangoIvory)",
  propDashedLineWidth = "221px",
  propPercentageText1 = "100",
  propPercentageText2 = "%",
  propTextFontSize = "16px",
  propPercentageFontSize = "16px",
  propPercentageFontWeight = "700",
}) => {
  return (
    <div className={styles.homeCard2List}>
      {/* 원의 색상과 스타일을 props로 제어 */}
      <div
        className={styles.circle}
        style={{ backgroundColor: propCircleColor }}
      ></div>

      {/* 텍스트를 props로 받아서 설정 */}
      <RegularText
        propText={propText}
        propFontWeight={700}
        propFontSize={propTextFontSize}
      />

      {/* 점선의 길이를 props로 제어 */}
      <div
        className={styles.dashedLine}
        style={{ width: propDashedLineWidth }}
      ></div>

      {/* 퍼센트 텍스트를 props로 받아서 설정 */}
      <DoubleText
        propText1={propPercentageText1}
        propText2={propPercentageText2}
        propText1FontSize={propPercentageFontSize}
        propText2FontSize={propPercentageFontSize}
        propText1FontWeight={propPercentageFontWeight}
        propText2FontWeight={propPercentageFontWeight}
        propTextSpacing={"0px"}
      />
    </div>
  );
};

HomeCard2List.propTypes = {
  propText: PropTypes.string,
  propCircleColor: PropTypes.string,
  propDashedLineWidth: PropTypes.string,
  propPercentageText1: PropTypes.any,
  propPercentageText2: PropTypes.string,
  propTextFontSize: PropTypes.string,
  propPercentageFontSize: PropTypes.string,
  propPercentageFontWeight: PropTypes.string,
};

export default HomeCard2List;
