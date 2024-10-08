import styles from "./TestPageTop.module.css";
import DoubleText from "../../../../component/Text/DoubleText/DoubleText";
import BlockText from "../../../../component/Text/BlockText/BlockText";
import React from "react";
import PropTypes from "prop-types";

const TestPageTop = ({ propQuiz, propQuizCount }) => {
  return (
    <div className={styles.TestPageTop}>
      <DoubleText
        propText1={"문제"}
        propText2={propQuizCount} // 동적으로 전달받은 propQuizCount 사용
        propText1FontSize={"38px"}
        propText2FontSize={"38px"}
        propText1Color={"var(--color-gray3)"}
        propText2Color={"var(--color-gray3)"}
      />

      <div className={styles.question}>
        <BlockText
          propContent={propQuiz} // 동적으로 전달받은 propQuiz 사용
          propFontSize={"40px"}
          propFontWeight={700}
          propLineHeight={2}
        />
      </div>
    </div>
  );
};

// PropTypes로 prop 타입 정의
TestPageTop.propTypes = {
  propQuiz: PropTypes.string.isRequired,
  propQuizCount: PropTypes.string.isRequired,
};

export default TestPageTop;
