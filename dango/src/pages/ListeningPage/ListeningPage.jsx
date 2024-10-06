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

const ListeningPage = () => {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null); // 퀴즈 문제 데이터를 관리하는 상태
  const [currentIndex, setCurrentIndex] = useState(1); // 현재 문제 인덱스 (1부터 시작)
  const [selectedValue, setSelectedValue] = useState(null); // 사용자가 선택한 값
  const [answerAmount, setAnswerAmount] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null); // 선택된 항목 상태
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리
  const [retryCount, setRetryCount] = useState(0); // 재시도 횟수 관리

  const userInfo = JSON.parse(localStorage.getItem("user"));
  const level = sessionStorage.getItem("setLevel");

  // 페이지 로드 시 첫 번째 문제를 가져오는 함수
  useEffect(() => {
    if (!quizData && retryCount < 3) {
      fetchFirstQuestion();
    }
  }, [quizData, retryCount]);

  const moveToLevelFinishPage = () => {
    navigate("/quiz/level_test_finish");
  };

  const moveToAgain = () => {
    navigate("/member/sign_up_finish");
  };

  const cleanAndParseJSON = (question) => {
    try {
      let cleanedQuestion = question.replace(/```json|```/g, "").trim();
      cleanedQuestion = cleanedQuestion.replace(/'(.*?)':/g, '"$1":');
      cleanedQuestion = cleanedQuestion.replace(/\((\d+)\)\./g, "$1.");
      cleanedQuestion = cleanedQuestion.replace(/'(.*?)'/g, '"$1"');
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
        "http://localhost:8888/api/quiz/listening/start",
        {
          level: level, // 청해 레벨 설정
          userId: parseInt(userInfo.userId), // 사용자 ID
        }
      );
      const parsedQuestions = response.data.questions
        .map((questionStr) => {
          if (typeof questionStr === "string") {
            return cleanAndParseJSON(questionStr);
          }
          return questionStr;
        })
        .filter((question) => question !== null);

      if (parsedQuestions.length > 0) {
        setQuizData(parsedQuestions); // 파싱된 문제 데이터를 상태로 저장
        console.log("응답 데이터:", quizData);
        setIsLoading(false);
        playAudio(parsedQuestions[currentIndex - 1].content); // 첫 번째 문제 읽기
      } else {
        throw new Error("파싱된 문제가 없습니다.");
      }
    } catch (error) {
      if (retryCount < 3) {
        console.log(`재시도 중... (${retryCount + 1}번째 시도)`);
        setRetryCount(retryCount + 1);
      } else {
        console.error("첫 번째 문제 불러오기 실패: ", error);
        setIsLoading(false);
        alert("문제를 가져오는 데 실패했습니다. 재시도 횟수를 초과했습니다.");
      }
    }
  };

  const playAudio = (text) => {
    if (
      typeof SpeechSynthesisUtterance === "undefined" ||
      typeof window.speechSynthesis === "undefined"
    ) {
      alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
      return;
    }

    window.speechSynthesis.cancel(); // 현재 재생 중인 음성을 초기화

    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.rate = 1; // 속도 설정
    speechMsg.pitch = 1; // 음높이 설정
    speechMsg.lang = "ja-JP"; // 일본어로 설정
    speechMsg.text = text; // 읽을 텍스트 설정

    window.speechSynthesis.speak(speechMsg); // 음성 합성 실행
  };

  const handleSelectedChoice = (choice) => {
    setSelectedChoice(choice);
    setSelectedValue(choice);
    console.log(`사용자가 선택한 값: ${choice}`);
  };

  const handleNextQuestion = async () => {
    if (selectedValue == quizData[currentIndex - 1].answer) {
      setAnswerAmount(answerAmount + 1);
    }

    if (quizData.length < 20) {
      try {
        const response = await axios.post(
          "http://localhost:8888/api/quiz/listening/next",
          {
            generatedQuestions: quizData,
            level: level,
            userId: userInfo.userId,
          }
        );
        console.log("response", response);

        const parsedQuestions = response.data.questions
          .map((question) => {
            if (typeof question === "string") {
              return cleanAndParseJSON(question);
            }
            return question;
          })
          .filter((question) => question !== null);

        setQuizData(parsedQuestions);
        setCurrentIndex((prevIndex) => prevIndex + 1); // 인덱스 증가
        setSelectedChoice(null); // 새로운 문제로 이동 시 선택 초기화
        playAudio(parsedQuestions[currentIndex].content); // 새로운 문제 읽기
      } catch (error) {
        if (retryCount < 3) {
          console.log(`재시도 중... (${retryCount + 1}번째 시도)`);
          setRetryCount(retryCount + 1);
        } else {
          alert("문제를 불러오는 데 실패했습니다. 재시도 횟수를 초과했습니다.");
        }
      }
    } else if (answerAmount < 14) {
      moveToAgain();
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8888/api/quiz/listening/finish",
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

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      {/* 헤더 */}
      <Head
        propLeftComponent={
          <RegularText
            propText={"청해 테스트"}
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

      {/* Play 버튼 추가 */}
      <button onClick={() => playAudio(quizData[currentIndex - 1].content)}>
        문제 듣기
      </button>

      {/* 하단의 '다음 문제' 또는 '제출' 버튼 */}
      <TestPageBottom onNextQuestion={handleNextQuestion} />
    </div>
  );
};

ListeningPage.propTypes = {
  className: PropTypes.string,
};

export default ListeningPage;
