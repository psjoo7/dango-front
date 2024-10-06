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

const DailyTestPage = () => {
  const navigate = useNavigate();
  const [quizData, setQuizData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [retryCount, setRetryCount] = useState(0);
  const [studyContent, setStudyContent] = useState(null);

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
};
