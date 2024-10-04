import React, { useEffect, useState } from "react";
import styles from "./HomeCard2.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../component/Text/RegularText/RegularText";
import HomeCard2List from "./HomeCard2List/HomeCard2List";
import DoughnutChartDouble from "../../../component/DoughnutChartDouble/DoughnutChartDouble";

const HomeCard2 = ({ propGrammer = 0, propListen = 0 }) => {
  // propWord를 상태로 관리
  const [propWord, setPropWord] = useState(
    parseFloat(localStorage.getItem("currentIndex"), 10) || 0
  );

  // setPropWord((propWord / 20) * 100);
  useEffect(() => {
    const wordProgress = (propWord / 20) * 100;
    console.log("wordProgress : ", wordProgress);
    if (parseInt(wordProgress) >= 100) {
      setPropWord(100);
    } else {
      setPropWord(wordProgress);
    }
  }, []);

  const nonProgress = 300 - propWord - propGrammer - propListen;

  return (
    <div className={styles.homeCard2}>
      <div className={styles.cardTitle}>
        <RegularText
          propText={"당고톡"}
          propFontSize={"var(--font-title1)"}
          propFontWeight={700}
        />
      </div>

      <div className={styles.chartAndList}>
        <DoughnutChartDouble
          propOuterNonProgress={nonProgress}
          propOuterWord={propWord}
          propOuterGrammar={propGrammer}
          propOuterListening={propListen}
        />

        <RegularText
          propText={"대화하기"}
          propFontSize={"var(--font-large-title)"}
          propFontWeight={700}
          propClassName={styles.talk}
        />

        <div className={styles.List}>
          <HomeCard2List
            propDashedLineWidth={"210px"}
            propText={"단어"}
            propPercentageText1={propWord}
          />

          <HomeCard2List
            propCircleColor={"var(--color-dangoPink)"}
            propText={"문법"}
            propPercentageText1={propGrammer}
            propDashedLineWidth={"210px"}
          />

          <HomeCard2List
            propCircleColor={"var(--color-dangoGreen)"}
            propText={"청해"}
            propPercentageText1={propListen}
            propDashedLineWidth={"210px"}
          />

          <HomeCard2List
            propCircleColor={"var(--color-gray1)"}
            propText={"미진행"}
            propPercentageText1={nonProgress}
            propDashedLineWidth={"195px"}
          />
        </div>
      </div>
    </div>
  );
};

HomeCard2.propTypes = {
  propClassName: PropTypes.string,
};

export default HomeCard2;
