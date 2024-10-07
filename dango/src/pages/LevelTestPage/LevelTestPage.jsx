import PropTypes from "prop-types";
import TestPageForm from "../../component/Forms/TestPageForm/TestPageForm";
import Head from "../../component/Head/Head";
import React, { useState, useEffect } from "react";
import { RegularText } from "../../component/Text";
import ImageDoubleText from "../../component/ImageDoubleText/ImageDoubleText";
import TestPageBottom from "../../component/Forms/TestPageForm/TestPageBottom/TestPageBottom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../component/LoadingComponent/LoadingComponent";

const LevelTestPage = () => {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null); // 퀴즈 문제 데이터를 관리하는 상태
  const [currentIndex, setCurrentIndex] = useState(1); // 현재 문제 인덱스 (1부터 시작)
  const [selectedValue, setSelectedValue] = useState(null); // 사용자가 선택한 값
  const [answerAmount, setAnswerAmount] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null); // 선택된 항목 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  const userInfo = JSON.parse(localStorage.getItem("user"));
  const level = sessionStorage.getItem("setLevel");
  // 페이지 로드 시 첫 번째 문제를 가져오는 함수
  useEffect(() => {
    if (!quizData) {
      // 중복 데이터 요청 방지
      fetchFirstQuestion();
    }
  }, [quizData]);

  const moveToLevelFinishPage = () => {
    navigate("/quiz/level_test_finish");
  };
  const moveToAgain = () => {
    navigate("/member/sign_up_finish");
  };

  const cleanAndParseJSON = (question) => {
    try {
      // 불필요한 ```json 및 ``` 제거
      let cleanedQuestion = question.replace(/```json|```/g, "").trim();
      // 잘못된 따옴표 수정 (싱글 쿼트를 더블 쿼트로 변경)
      cleanedQuestion = cleanedQuestion.replace(/'(.*?)':/g, '"$1":');
      // 잘못된 옵션 번호 수정 (예: (4). -> 4.)
      cleanedQuestion = cleanedQuestion.replace(/\((\d+)\)\./g, "$1.");
      // 잘못된 따옴표가 있는 값 수정 (예: '④' -> 4)
      cleanedQuestion = cleanedQuestion.replace(/'(.*?)'/g, '"$1"');
      // 줄 바꿈 문자 제거
      cleanedQuestion = cleanedQuestion.replace(/\\n/g, "");

      return JSON.parse(cleanedQuestion);
    } catch (error) {
      console.error("문자열 파싱 실패:", error);
      return null;
    }
  };

  const fetchFirstQuestion = async () => {
    try {
      console.log("start : ", level, parseInt(userInfo.userId));
      const response = await axios.post(
        // "http://localhost:8888/api/quiz/levelup/jlpt/start",
        "https://scit45dango.site/api/quiz/levelup/jlpt/start",
        {
          level: level, // JLPT 레벨 설정
          userId: parseInt(userInfo.userId), // 사용자 ID
        }
      );

      console.log("응답 데이터:", response.data);

      // 데이터 파싱 및 클리닝 작업
      const parsedQuestions = response.data.questions
        .map((questionStr) => {
          if (typeof questionStr === "string") {
            return cleanAndParseJSON(questionStr);
          }
          return questionStr; // 이미 객체인 경우 그대로 반환
        })
        .filter((question) => question !== null); // null 제거

      if (parsedQuestions.length > 0) {
        setQuizData(parsedQuestions); // 파싱된 문제 데이터를 상태로 저장
        setIsLoading(false); // 데이터가 로드되면 로딩 상태 해제
      } else {
        setIsLoading(false); // 데이터가 로드되면 로딩 상태 해제
        throw new Error("파싱된 문제가 없습니다.");
      }
    } catch (error) {
      console.error("첫 번째 문제 불러오기 실패: ", error);
      setIsLoading(false); // 데이터가 로드되면 로딩 상태 해제
      alert("문제를 가져오는 데 실패했습니다."); // 사용자 알림 추가
    }
  };

  // 사용자가 선택한 값을 처리하는 함수
  const handleSelectedChoice = (choice) => {
    setSelectedChoice(choice); // 선택된 값을 상위에서 관리
    setSelectedValue(choice); // 선택된 값을 상태로 저장
    console.log(`사용자가 선택한 값: ${choice}`);
    console.log("currentIndex", currentIndex);
    console.log("data  :  ", quizData);
    console.log("answer amount: ", answerAmount);
    if (quizData[currentIndex - 1].answer == choice) {
      alert("정답");
    } else {
      alert("오답");
    }
  };

  // 사용자가 다음을 누를때.
  const handleNextQuestion = async () => {
    if (selectedValue == quizData[currentIndex - 1].answer) {
      setAnswerAmount(answerAmount + 1);
    }
    console.log(answerAmount);
    if (quizData.length < 20) {
      try {
        const response = await axios.post(
          // "http://localhost:8888/api/quiz/levelup/jlpt/next",
          "https://scit45dango.site/api/quiz/levelup/jlpt/next",
          { jlptGeneratedQuestions: quizData, level: level }
        );
        console.log("response", response);

        // JSON 파싱 및 클리닝 작업
        const parsedQuestions = response.data.questions
          .map((question) => {
            if (typeof question === "string") {
              return cleanAndParseJSON(question);
            }
            return question; // 이미 객체인 경우 그대로 반환
          })
          .filter((question) => question !== null); // null 항목 제거

        setQuizData(parsedQuestions);
        setCurrentIndex((prevIndex) => prevIndex + 1); // 인덱스 증가
        setSelectedChoice(null); // 새로운 문제로 이동 시 선택 초기화
      } catch (error) {
        console.error("다음 문제로 이동 중 에러 발생: ", error);
        let retryCount = 0;
        if (retryCount < 3) {
          // 재시도 로직 (최대 3번까지 재시도)
          console.log(`재시도 중... (${retryCount + 1}번째 시도)`);
          handleNextQuestion(retryCount + 1);
        } else {
          alert("문제를 불러오는 데 실패했습니다. 다시 시도해 주세요.");
        }
      }
    } else if (currentIndex >= 20 && answerAmount < 14) {
      moveToAgain();
    } else {
      try {
        const response = await axios.post(
          // "http://localhost:8888/api/quiz/levelup/jlpt/finish",
          "https://scit45dango.site/api/quiz/levelup/jlpt/finish",
          { userId: userInfo.userId, level: level }
        );
        console.log("level updated : ", response);
        moveToLevelFinishPage();
      } catch (error) {
        console.error("레벨 업데이트 중 에러 발생 : ", error);
        alert("레벨 업데이트 중 에러 발생했습니다.");
      }
    }
  };

  // 문제 데이터가 없으면 로딩 상태 표시
  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      {/* 헤더 */}
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
            propText1={`${currentIndex}`} // 현재 문제 번호
            propText2={` / 20문제`}
            propIsImageVisible={false}
            propWidth={"165px"}
            propHeight={"63px"}
          />
        }
      />

      {/* 문제와 선택지를 표시하는 컴포넌트 */}
      <TestPageForm
        propChoice1={quizData[currentIndex - 1]?.options[0]} // 백엔드에서 받은 선택지 1
        propChoice2={quizData[currentIndex - 1]?.options[1]} // 백엔드에서 받은 선택지 2
        propChoice3={quizData[currentIndex - 1]?.options[2]} // 백엔드에서 받은 선택지 3
        propChoice4={quizData[currentIndex - 1]?.options[3]} // 백엔드에서 받은 선택지 4
        propQuizCount={`${currentIndex}`} // 현재 문제 번호
        propQuiz={quizData[currentIndex - 1]?.content} // 백엔드에서 받은 문제 내용
        propChoiceSelect={handleSelectedChoice} // 선택된 값을 처리하는 함수
        selectedChoice={selectedChoice} // 상위에서 관리하는 선택된 상태 전달
      />

      {/* 하단의 '다음 문제' 또는 '제출' 버튼 */}
      <TestPageBottom onNextQuestion={handleNextQuestion} />
    </div>
  );
};

LevelTestPage.propTypes = {
  className: PropTypes.string,
};

export default LevelTestPage;
