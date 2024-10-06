import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./GrammarPageForm.module.css";
import GrammarListElement from "./GrammarListElement/GrammarListElement"; // GrammarListElement 임포트
import Head from "../../Head/Head";
import WordListTop from "../../Word/WordListTop/WordListTop";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";
import RegularButton from "../../../component/Buttons/RegularButton/RegularButton";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트

const GrammarPageForm = ({ propDay, propGrammarData = [] }) => {
  const [showAllText, setShowAllText] = useState(true); // 모든 텍스트가 보이는 상태인지 관리

  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅 사용

  // '전체 보기' 버튼 클릭 시 모든 텍스트를 보이게 설정
  const handleFlipToFront = () => {
    setShowAllText(true); // 모든 텍스트를 보이게
  };

  // '전체 가리기' 버튼 클릭 시 모든 텍스트를 숨기게 설정
  const handleFlipToBack = () => {
    setShowAllText(false); // 모든 텍스트를 숨기게
  };

  // '일간 테스트' 버튼 클릭 시 페이지 이동 (예시)
  const navigateToGrammarTest = () => {
    navigate("/study/grammar_test"); // '/grammar_test' 경로로 이동
  };

  // propGrammarData가 없는 경우 예외 처리
  if (!propGrammarData || propGrammarData.length === 0) {
    return <div>데이터가 없습니다.</div>; // 데이터를 못 받았을 때 출력할 메시지
  }

  return (
    <div className={styles.WordPageForm}>
      {/* 상단 헤드 컴포넌트 설정 */}
      <Head
        propLeftComponent={<NavigationMenu />} // 왼쪽에는 네비게이션 메뉴
        propMidComponent={
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Head/LogoText.svg`}
            alt="LogoText"
          />
        }
        propRightComponent1={
          <RegularButton
            propText={"전체 보기"}
            propFontSize={"20px"}
            propFontWeight={700}
            propWidth={"140px"}
            propHeight={"63px"}
            propColor={"var(--color-white)"}
            propBorderRadius={"15px"}
            propHoverColor={"var(--color-main)"}
            propHoverTextColor={"var(--color-black)"}
            propOnClick={handleFlipToFront} // 앞면 보기 버튼 클릭 시 호출
          />
        }
        propRightComponent2={
          <RegularButton
            propText={"전체 가리기"}
            propFontSize={"20px"}
            propFontWeight={700}
            propWidth={"140px"}
            propHeight={"63px"}
            propColor={"var(--color-white)"}
            propBorderRadius={"15px"}
            propHoverColor={"var(--color-main)"}
            propHoverTextColor={"var(--color-black)"}
            propOnClick={handleFlipToBack} // 뒷면 보기 버튼 클릭 시 호출
          />
        }
        propRightComponent3={
          <RegularButton
            propText={"일간 테스트"}
            propFontSize={"20px"}
            propFontWeight={700}
            propWidth={"140px"}
            propHeight={"63px"}
            propColor={"var(--color-white)"}
            propBorderRadius={"15px"}
            propHoverColor={"var(--color-main)"}
            propHoverTextColor={"var(--color-black)"}
            propOnClick={navigateToGrammarTest} // 일간 테스트 버튼 클릭 시 호출
          />
        }
      />

      <div className={styles.grammar}>
        {/* WordListTop 컴포넌트 (Day 정보 표시) */}
        <WordListTop propText2={propDay} />

        {/* 카드 리스트 렌더링 */}
        <div className={styles.grammarList}>
          {/* 각 WordListElement에 상태를 전달하여 개별 동작 */}
          {propGrammarData.map((grammar, index) => (
            <GrammarListElement
              key={index}
              propFrontNumber={String(index + 1).padStart(2, "0")} // 숫자를 01, 02 형식으로 설정
              propFrontHanja={grammar.hanja} // 한자
              propFrontReading={grammar.reading} // 읽는 법
              propFrontMeaning={grammar.meaning} // 뜻
              propFrontExample1={grammar.example1} // 예문1
              propFrontExample2={grammar.example2} // 예문2
              propFrontExampleTranslation1={grammar.exampleTranslation1}
              propFrontExampleTranslation2={grammar.exampleTranslation2}
              propIsHiddenReading={!showAllText} // 전체 보기/가리기 상태 전달
              propIsHiddenMeaning={!showAllText}
              propIsHiddenExample1={!showAllText}
              propIsHiddenExample2={!showAllText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

GrammarPageForm.propTypes = {
  propDay: PropTypes.string.isRequired, // Day 값을 상위에서 전달받음
  propGrammarData: PropTypes.arrayOf(
    PropTypes.shape({
      hanja: PropTypes.string.isRequired,
      reading: PropTypes.string.isRequired,
      meaning: PropTypes.string.isRequired,
      example1: PropTypes.string.isRequired, // 예문1
      example2: PropTypes.string.isRequired, // 예문2
    })
  ).isRequired, // JSON 데이터 리스트를 전달받음
};

export default GrammarPageForm;
