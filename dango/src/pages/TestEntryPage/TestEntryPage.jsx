import React, { useState, useEffect } from "react";
import TestEntryForm from "../../component/Forms/TestEntryForm/TestEntryForm";
import axios from "axios";

const TestEntryPage = () => {
  const [propWord, setPropWord] = useState(
    parseFloat(localStorage.getItem("currentIndex")) || 0
  );
  const [propGrammer, setPropGrammer] = useState(
    parseFloat(localStorage.getItem("currentGrammerIndex")) || 0
  );
  const [daily, setDaily] = useState(0);
  const [weekly, setWeekly] = useState(0);

  const handleWeek = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("user"));
      const response = await axios.post(
        "http://localhost:8888/api/member/dates",
        { userId: userInfo.userId }
      );
      console.log(response);
      setWeekly(response.data);
    } catch (error) {
      console.log("get weekly : ", error);
      alert("getting weekly failed!!!!");
    }
  };
  useEffect(() => {
    const wordProgress = Math.round((propWord / 20) * 100); // 단어 진행 상황 (20개의 문제)
    const grammerProgress = Math.round((propGrammer / 3) * 100); // 문법 진행 상황 (3개의 문제)

    // 단어와 문법 진행 상황을 반으로 나눠 더한 값 계산
    const combinedProgress = Math.round(wordProgress / 2 + grammerProgress / 2);

    // 최대값 100으로 제한
    const limitedProgress = Math.min(combinedProgress, 100);

    // 계산된 값을 daily에 저장
    setDaily(limitedProgress);
    handleWeek();
  }, [propWord, propGrammer]);

  return (
    <TestEntryForm
      propFrontImageCode="2_w" // 모든 카드에서 동일하게 사용할 프론트 이미지 코드
      propFirstGaugePercentage={daily} // daily로 계산된 진행률 사용
      propFirstBackImageCode="1_w"
      propFirstLink="/quiz/test"
      propSecondGaugePercentage={weekly} // 다른 값들은 임의로 설정된 것 유지
      propSecondBackImageCode="3_w"
      propSecondLink="/review"
      propThirdGaugePercentage={100}
      propThirdBackImageCode="4_w"
      propThirdLink="/word"
    />
  );
};

export default TestEntryPage;
