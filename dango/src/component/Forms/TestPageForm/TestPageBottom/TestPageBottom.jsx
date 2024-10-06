import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TestPageBottom.module.css";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import RegularButton from "../../../../component/Buttons/RegularButton/RegularButton";

const TestPageBottom = ({ onNextQuestion }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.bottom}>
      <div
        className={styles.button}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onNextQuestion} // 다음 문제로 이동
        style={{
          backgroundColor: isHovered ? "black" : "white",
          color: isHovered ? "white" : "black",
        }}
      >
        <RegularText
          propText={"다음 문제"}
          propFontSize={"var(--font-title1)"}
          propColor={isHovered ? "white" : "black"}
        />
        {isHovered ? (
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/TestPage/RightArrowWhite.svg`}
            alt="Right arrow white"
          />
        ) : (
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/TestPage/RightArrowBlack.svg`}
            alt="Right arrow black"
          />
        )}
      </div>
    </div>
  );
};

TestPageBottom.propTypes = {
  onNextQuestion: PropTypes.func.isRequired,
};

export default TestPageBottom;
