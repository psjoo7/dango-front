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
import OXModal from "../../component/OXModal/OXModal"; // OXModal 추가

const LevelUpTest = () => {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const [studyContent, setStudyContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 표시 상태
  const [isCorrect, setIsCorrect] = useState(false); // 정답 여부 상태

  const userInfo = JSON.parse(localStorage.getItem("user"));

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

  const moveToHomePage = () => {
    navigate("/home");
  };

  const fetchFirstQuestion = async () => {
    try {
      const response = await axios.post(
        "https://scit45dango.site/api/quiz/weekly/start",
        { userId: parseInt(userInfo.userId) }
      );
      const parsedQuestions = response.data.questions
        .map((questionStr) =>
          typeof questionStr === "string"
            ? cleanAndParseJSON(questionStr)
            : questionStr
        )
        .filter((question) => question !== null);

      if (parsedQuestions.length > 0) {
        setQuizData(parsedQuestions);
        setStudyContent(response.data.studyContent);
        setIsLoading(false);
      } else {
        throw new Error("파싱된 문제가 없습니다.");
      }
    } catch (error) {
      if (retryCount < 3) {
        setRetryCount(retryCount + 1);
      } else {
        setIsLoading(false);
        alert("문제를 가져오는 데 실패했습니다. 재시도 횟수를 초과했습니다.");
      }
    }
  };

  useEffect(() => {
    if (!quizData && retryCount < 3) {
      fetchFirstQuestion();
    }
  }, [quizData, retryCount]);

  const handleSelectedChoice = (choice) => {
    setSelectedChoice(choice);
    const correctAnswer = quizData[currentIndex - 1]?.answer;
    const isAnswerCorrect = choice === correctAnswer;
    setIsCorrect(isAnswerCorrect);
    setIsModalOpen(true); // 정답 여부에 따라 모달 표시
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (isCorrect) {
      handleNextQuestion();
    }
  };

  const handleNextQuestion = async () => {
    if (quizData.length < studyContent.length) {
      try {
        const response = await axios.post(
          "https://scit45dango.site/api/quiz/weekly/next",
          {
            generatedQuestions: quizData,
            studyContent: studyContent,
            userId: userInfo.userId,
            userNationality: userInfo.userNationality,
            currentIndex: currentIndex + 2,
          }
        );
        const parsedQuestions = response.data.questions
          .map((question) => {
            if (typeof question === "string") {
              return cleanAndParseJSON(question);
            }
            return question;
          })
          .filter((question) => question !== null);

        setQuizData(parsedQuestions);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setSelectedChoice(null);
      } catch (error) {
        if (retryCount < 3) {
          setRetryCount(retryCount + 1);
        } else {
          setIsLoading(false);
          alert("문제를 가져오는 데 실패했습니다. 재시도 횟수를 초과했습니다.");
        }
      }
    } else if (currentIndex < quizData.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
      setSelectedChoice(null);
    } else {
      moveToHomePage();
    }
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  return (
    <div>
      <Head
        propLeftComponent={
          <RegularText
            propText={"승급 테스트"}
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
            propText1={`${currentIndex}`}
            propText2={` / 20문제`}
            propIsImageVisible={false}
            propWidth={"165px"}
            propHeight={"63px"}
          />
        }
      />

      <TestPageForm
        propChoice1={quizData[currentIndex - 1]?.options[0]}
        propChoice2={quizData[currentIndex - 1]?.options[1]}
        propChoice3={quizData[currentIndex - 1]?.options[2]}
        propChoice4={quizData[currentIndex - 1]?.options[3]}
        propQuizCount={`${currentIndex}`}
        propQuiz={quizData[currentIndex - 1]?.content}
        propChoiceSelect={handleSelectedChoice}
        selectedChoice={selectedChoice}
      />

      <TestPageBottom onNextQuestion={handleNextQuestion} />

      {isModalOpen && (
        <OXModal propOnClose={closeModal} propCheck={isCorrect} />
      )}
    </div>
  );
};

LevelUpTest.propTypes = {
  className: PropTypes.string,
};

export default LevelUpTest;
