import PropTypes from "prop-types";
import TestPageForm from "../../component/Forms/TestPageForm/TestPageForm";
import Head from "../../component/Head/Head";
import React, { useState, useEffect } from "react";
import { RegularText } from "../../component/Text";
import ImageDoubleText from "../../component/ImageDoubleText/ImageDoubleText";
import TestPageBottom from "../../component/Forms/TestPageForm/TestPageBottom/TestPageBottom";
import axios from "axios"; // axios 임포트

const LevelTestPage = () => {
  const [selectedValue, setSelectedValue] = useState(null); // 선택된 값 관리
  const [studyContentList, setStudyContentList] = useState(null);

  // TestPageForm에서 선택된 값을 받는 함수
  const handleSelectedChoice = (choice) => {
    setSelectedValue(choice); // 선택된 값을 상태로 저장
    console.log(`ParentComponent에서 선택된 값: ${choice}`); // 콘솔에 선택된 값 출력
  };

  // 페이지 로드 시 호출할 함수 (try, await 적용)
  const handleStudyContentData = async () => {
    try {
      const jlptLevel = sessionStorage.getItem("jlptLevel");
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user.userId; // userId 추출
      const response = await axios.post(
        "http://localhost:8888/api/study/word", // 백엔드 API 경로
        { jlptLevel, userId } // 빈 body가 필요할 경우 이렇게 비워둡니다.
      );

      console.log("Study content data:", response.data);
      // 받아온 데이터를 state에 저장하거나 다른 방식으로 처리
      setStudyContentList(response.data);
    } catch (error) {
      console.error(
        "Error fetching study content data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // 페이지가 로드될 때 handleStudyContentData 함수를 호출
  useEffect(() => {
    handleStudyContentData();
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행되도록 함

  const quizData = [
    {
      content:
        "忘れ物をしたので、駅に電話すれば対応してもらえると思っていたが、その日は連絡先でもわからず仕方なかった。",
      options: ["1. 確実", "2. 不明", "3. 緊急", "4. 理解"],
      answer: "2",
    },
    {
      content:
        "パスポートを忘れたので、空港に連絡すればなんとかなると思ったが、対応できなかった。",
      options: ["1. 安心", "2. 不安", "3. 理解", "4. 紛失"],
      answer: "4",
    },
    {
      content:
        "財布を落としてしまい、警察に届ければ見つかると考えていたが、結局見つからなかった。",
      options: ["1. 成功", "2. 不明", "3. 捜査", "4. 理解"],
      answer: "2",
    },
    {
      content:
        "重要な書類をオフィスに忘れてしまい、すぐに取りに戻れば大丈夫だと思ったが、オフィスはすでに閉まっていた。",
      options: ["1. 開いていた", "2. 不明", "3. 緊急", "4. 理解"],
      answer: "2",
    },
    {
      content:
        "携帯電話を家に忘れたので、友達に連絡して取ってきてもらうつもりだったが、友達も忙しかったため無理だった。",
      options: ["1. 確実", "2. 不明", "3. 緊急", "4. 理解"],
      answer: "2",
    },
  ];

  return (
    <div>
      <Head
        propLeftComponent={
          <RegularText
            propText={"레벨테스트"}
            propColor={"var(--color-white)"}
            propFontSize={"32px"}
          />
        }
        propMidComponent={
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Head/LogoText.svg`}
            alt="LogoText"
          />
        }
        propRightComponent3={
          <ImageDoubleText
            propText1={"4"}
            propText2={"번째 / 20번째"}
            propIsImageVisible={false}
            propWidth={"165px"}
            propHeight={"63px"}
          />
        }
      />

      <TestPageForm
        propChoice1={"선택1"} // 각 선택지를 전달
        propChoice2={"선택2"}
        propChoice3={"선택3"}
        propChoice4={"선택4"}
        propQuizCount={"1"}
        propQuiz={"퀴즈 내용이 여기에 표시됩니다."}
        propChoiceSelect={handleSelectedChoice} // 선택된 값을 전달받을 함수
      />

      <TestPageBottom />
    </div>
  );
};

LevelTestPage.propTypes = {
  className: PropTypes.string,
};

export default LevelTestPage;
