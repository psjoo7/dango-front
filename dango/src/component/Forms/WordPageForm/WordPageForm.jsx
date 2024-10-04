import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./WordPageForm.module.css";
import WordListElement from "../../Word/WordListElement/WordListElement";
import Head from "../../Head/Head";
import WordListTop from "../../Word/WordListTop/WordListTop";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";
import RegularButton from "../../../component/Buttons/RegularButton/RegularButton";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트

const WordPageForm = ({ propDay, wordData }) => {
  // wordData 길이에 맞춰 flipState 초기화
  const [flipState, setFlipState] = useState([]);

  // wordData가 업데이트될 때마다 flipState 초기화
  useEffect(() => {
    const wordDataLength = wordData.length;
    // wordData 길이만큼의 false로 배열을 채워서 flipState 설정
    setFlipState(Array(wordDataLength).fill(false));
  }, [wordData]); // wordData가 변경될 때마다 실행됨

  const navigate = useNavigate(); // useNavigate 훅 사용

  // 네비게이트 함수 추가 (버튼 클릭 시 /word_test 페이지로 이동)
  const navigateToWordTest = () => {
    navigate("/study/word_test"); // "/word_test" 경로로 이동
  };

  // 앞면 보기 버튼 클릭 시 호출되는 함수
  const handleFlipToFront = () => {
    setFlipState((prevState) =>
      prevState.map((isFlipped) => (isFlipped ? false : isFlipped))
    );
  };

  // 뒷면 보기 버튼 클릭 시 호출되는 함수
  const handleFlipToBack = () => {
    setFlipState((prevState) =>
      prevState.map((isFlipped) => (!isFlipped ? true : isFlipped))
    );
  };

  // 개별 카드가 클릭될 때 상태 변경
  const handleIndividualFlip = (index) => {
    setFlipState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // 해당 카드의 상태를 반전
      return newState;
    });
  };

  return (
    <div className={styles.WordPageForm}>
      <Head
        propLeftComponent={<NavigationMenu />}
        propMidComponent={
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Head/LogoText.svg`}
            alt="LogoText"
          />
        }
        propRightComponent1={
          <RegularButton
            propText={"앞면 보기"}
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
            propText={"뒷면 보기"}
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
            propOnClick={navigateToWordTest} // 일간 테스트 버튼 클릭 시 "/word_test"로 이동
          />
        }
      />

      <div className={styles.word}>
        <WordListTop propText2={propDay} />

        <div className={styles.wordList}>
          {/* 각 WordListElement에 상태를 전달하여 개별 동작 */}
          {wordData.map((word, index) => (
            <WordListElement
              key={index}
              propFrontNumber={String(index + 1).padStart(2, "0")}
              propFrontHanja={word.hanja} // JSON 데이터에서 한자
              propFrontReading={word.reading} // JSON 데이터에서 요미가나
              propFrontMeaning={word.meaning} // JSON 데이터에서 뜻
              propBackNumber={String(index + 1).padStart(2, "0")}
              propBackHanja={word.hanja} // 뒷면에도 한자만 표시
              propIsFlipped={flipState[index]} // 개별 상태 반영
              propOnFlip={() => handleIndividualFlip(index)} // 개별 카드 클릭 처리
            />
          ))}
        </div>
      </div>
    </div>
  );
};

WordPageForm.propTypes = {
  propDay: PropTypes.string.isRequired, // Day 값을 상위에서 전달받음
  wordData: PropTypes.arrayOf(
    PropTypes.shape({
      hanja: PropTypes.string.isRequired,
      reading: PropTypes.string.isRequired,
      meaning: PropTypes.string.isRequired,
      level: PropTypes.string, // 레벨과 타입은 사용되지 않지만 JSON에 포함되어 있음
      type: PropTypes.string,
    })
  ).isRequired, // JSON 데이터 리스트를 전달받음
};

export default WordPageForm;
