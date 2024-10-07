import styles from "./WordTestPageForm.module.css";
import WordCard1 from "./WordTestCard1/WordTestCard1";
import WordTestCard2 from "./WordTestCard2/WordTestCard2";
import Button from "../../../component/Buttons/RegularButton/RegularButton";
import DoubleText from "../../../component/Text/DoubleText/DoubleText";
import WordListTop from "../../../component/Word/WordListTop/WordListTop";
import Head from "../../Head/Head";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const WordTestPageForm = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 단어 인덱스
  const [words, setWords] = useState([]); // 로컬 스토리지에서 가져올 단어 배열

  // 컴포넌트가 처음 로드될 때 로컬 스토리지에서 데이터를 가져옴
  useEffect(() => {
    const storedWords = JSON.parse(localStorage.getItem("studyContent")) || [];
    const storedIndex = parseInt(localStorage.getItem("currentIndex")) || 0;
    setWords(storedWords);
    setCurrentIndex(storedIndex);
  }, []);

  // 단어 데이터가 없는 경우
  if (words.length === 0) {
    return <div>로컬 스토리지에 단어 데이터가 없습니다.</div>;
  }

  // 현재 단어 가져오기
  const currentWord = words[currentIndex];

  // 백엔드로 "알아!" 또는 "몰라!" 정보를 보내는 함수 (임시)
  const sendAnswerToBackend = async (studyContentId, answer) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user.userId;
      const studyType = "단어";
      // 예시 백엔드 요청
      // await axios.post("http://localhost:8888/api/study/answer", {
      await axios.post("https://scit45dango.site/api/study/answer", {
        studyContentId,
        answer,
        userId,
        studyType,
      });
      console.log(`Word ID: ${studyContentId}, Answer: ${answer} 전송 성공`);
    } catch (error) {
      console.error("백엔드로 전송 실패:", error);
    }
  };

  // "알아!" 버튼 클릭 시
  const handleKnowClick = () => {
    // 백엔드로 "알아!" 정보 전송
    sendAnswerToBackend(currentWord.id, "O");
    const user = JSON.parse(localStorage.getItem("user"));
    user.userMileage += 1;
    localStorage.setItem("user", JSON.stringify(user));
    // currentIndex 업데이트 및 로컬 스토리지에 저장
    if (currentIndex + 1 < words.length) {
      // 아직 남은 단어가 있을 때
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      localStorage.setItem("currentIndex", newIndex);
    } else {
      // 모든 단어를 다 학습했을 때
      alert("모든 단어를 학습했습니다! 단어 화면으로 돌아갑니다.");
      navigate("/study/word");
    }
  };

  // "몰라!" 버튼 클릭 시
  const handleDontKnowClick = () => {
    // 백엔드로 "몰라!" 정보 전송
    sendAnswerToBackend(currentWord.id, "X");

    // currentIndex 업데이트 및 로컬 스토리지에 저장
    if (currentIndex + 1 < words.length) {
      // 아직 남은 단어가 있을 때
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      localStorage.setItem("currentIndex", newIndex);
    } else {
      // 모든 단어를 다 학습했을 때
      alert("모든 단어를 학습했습니다! 단어 화면으로 돌아갑니다.");
      navigate("/study/word");
    }
  };
  // 전체 단어 리스트 보러가기
  const moveToWordPage = () => {
    navigate("/study/word");
  };

  return (
    <div className={styles.backGround}>
      <Head
        propLeftComponent={<NavigationMenu />}
        propMidComponent={
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Head/LogoText.svg`}
            alt="LogoText"
          />
        }
      />
      <div className={styles.wrapper}>
        <WordListTop
          propWidth={"1000px"}
          propHeight={"110px"}
          propText2={currentIndex + 1}
        />
        <WordCard1 propContent={currentWord.hanja} />

        <div className={styles.cards}>
          <WordTestCard2
            propTitle={"요미가나"}
            propContent={currentWord.reading}
          />
          <WordTestCard2 propTitle={"뜻"} propContent={currentWord.meaning} />
        </div>

        <div className={styles.bottom}>
          <div className={styles.leftButton}>
            <Button
              propHeight={"50px"}
              propWidth={"120px"}
              propText={"단어 보러 가기"}
              propBorder={"4px solid black"}
              propOnClick={moveToWordPage}
            />
          </div>

          <div className={styles.midText}>
            <DoubleText
              propText1={`${currentIndex + 1}`} // 현재 단어 번호 (1부터 시작)
              propText2={`/ ${words.length}`} // 전체 단어 수
              propText1FontSize={"30px"}
              propText2FontSize={"30px"}
              propText1FontWeight={"bold"}
              propText2FontWeight={"bold"}
            />
          </div>

          <div className={styles.rightButtons}>
            <Button
              propHeight={"50px"}
              propWidth={"120px"}
              propText={"알아!"}
              propBorder={"4px solid black"}
              propOnClick={handleKnowClick} // 알아 버튼 클릭 시
            />

            <Button
              propHeight={"50px"}
              propWidth={"120px"}
              propText={"몰라!"}
              propBorder={"4px solid black"}
              propOnClick={handleDontKnowClick} // 몰라 버튼 클릭 시
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordTestPageForm;
