import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./GrammarListElement.module.css";
import DynamicText from "../../../Text/DynamicText/DynamicText";
import { RegularText } from "../../../Text";

const GrammarListElement = ({
  propFrontNumber = "01",
  propFrontHanja = "日本",
  propFrontReading = "にほん",
  propFrontMeaning = "일본",
  propFrontExample1 = "",
  propFrontExampleTranslation1 = "", // 예문 번역 1 추가
  propFrontExample2 = "",
  propFrontExampleTranslation2 = "", // 예문 번역 2 추가
  propIsHiddenReading, // 상위에서 전달받은 가시성 상태
  propIsHiddenMeaning,
  propIsHiddenExample1,
  propIsHiddenExample2,
  className = "",
}) => {
  const [isIndividuallyHidden, setIsIndividuallyHidden] = useState(false); // 개별 카드 가시성 상태

  // 클릭 시 넘버와 한자를 제외한 텍스트 가시성 토글
  const toggleVisibility = () => {
    setIsIndividuallyHidden(!isIndividuallyHidden);
  };

  // 텍스트 가시성을 결정 (개별 상태와 전체 상태를 모두 고려)
  const isReadingHidden = isIndividuallyHidden || propIsHiddenReading;
  const isMeaningHidden = isIndividuallyHidden || propIsHiddenMeaning;

  // 예문과 예문 번역을 가시성에 따라 보여주거나 숨김 처리
  const example1Text =
    isIndividuallyHidden || propIsHiddenExample1
      ? propFrontExampleTranslation1
      : propFrontExample1;

  const example2Text =
    isIndividuallyHidden || propIsHiddenExample2
      ? propFrontExampleTranslation2
      : propFrontExample2;

  return (
    <div
      className={`${styles.GrammarListElementFront} ${className}`}
      onClick={toggleVisibility}
    >
      <div className={styles.top}>
        <div className={styles.number}>
          <DynamicText
            propText={propFrontNumber}
            propMaxFontSize={42}
            propMinFontSize={25}
          />
        </div>

        <div className={styles.GrammarElementTop}>
          <DynamicText
            propText={propFrontHanja}
            propMaxFontSize={42}
            propMinFontSize={25}
          />
        </div>

        <div className={styles.GrammarElementTop}>
          <DynamicText
            propText={propFrontReading}
            propMaxFontSize={42}
            propMinFontSize={25}
            propClassName={
              isReadingHidden ? styles.hiddenText : styles.showText
            } // 개별 상태와 전체 상태 모두 반영
          />
        </div>

        <div className={styles.GrammarElementTop}>
          <DynamicText
            propText={propFrontMeaning}
            propMaxFontSize={42}
            propMinFontSize={25}
            propClassName={
              isMeaningHidden ? styles.hiddenText : styles.showText
            } // 개별 상태와 전체 상태 모두 반영
          />
        </div>
      </div>

      <div className={styles.GrammarElementbottom}>
        <RegularText
          propText={example1Text} // 예문 또는 번역
          propFontSize={"42px"}
          propLineHeight={"1.4"}
          propClassName={styles.showText} // 항상 표시
        />
      </div>

      <div className={styles.GrammarElementbottom}>
        <RegularText
          propText={example2Text} // 예문 또는 번역
          propFontSize={"42px"}
          propLineHeight={"1.4"}
          propClassName={styles.showText} // 항상 표시
        />
      </div>
    </div>
  );
};

GrammarListElement.propTypes = {
  propFrontNumber: PropTypes.string,
  propFrontHanja: PropTypes.string,
  propFrontReading: PropTypes.string,
  propFrontMeaning: PropTypes.string,
  propFrontExample1: PropTypes.string,
  propFrontExampleTranslation1: PropTypes.string, // 예문 번역 1
  propFrontExample2: PropTypes.string,
  propFrontExampleTranslation2: PropTypes.string, // 예문 번역 2
  propIsHiddenReading: PropTypes.bool, // 상위에서 전달받은 가시성 상태
  propIsHiddenMeaning: PropTypes.bool,
  propIsHiddenExample1: PropTypes.bool,
  propIsHiddenExample2: PropTypes.bool,
  className: PropTypes.string,
};

export default GrammarListElement;
