import React, { useEffect, useState } from "react";
import styles from "./HomeCard2.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../component/Text/RegularText/RegularText";
import HomeCard2List from "./HomeCard2List/HomeCard2List";
import DoughnutChartDouble from "../../../component/DoughnutChartDouble/DoughnutChartDouble";
import { LinkText } from "../../../component/Text";

const HomeCard2 = () => {
  // propWord를 상태로 관리
  const [propWord, setPropWord] = useState(
    parseFloat(localStorage.getItem("currentIndex"), 10) || 0
  );
  const [propGrammer, setPropGrammer] = useState(
    parseFloat(localStorage.getItem("currentGrammerIndex"), 10) || 0
  );

  const [propListen, setPropListen] = useState(
    parseFloat(localStorage.getItem("currentListenIndex"), 10) || 0
  );
  // setPropWord((propWord / 20) * 100);
  useEffect(() => {
    const wordProgress = (propWord / 20) * 100;
    const grammerProgress = (propGrammer / 3) * 100;
    const listenProgress = (propListen / 20) * 100;
    // 반올림 적용하여 소수점 제거
    setPropWord(Math.min(Math.round(wordProgress), 100)); // 100이 최대치로 제한
    setPropGrammer(Math.min(Math.round(grammerProgress), 100)); // 100이 최대치로 제한
    setPropListen(Math.min(Math.round(listenProgress), 100)); // 100이 최대치로 제한
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

        <LinkText
          propText={"대화하기"}
          propFontSize={"var(--font-large-title)"}
          propFontWeight={"700"}
          propClassName={styles.talk}
          propUrl="/chat/gpt"
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
