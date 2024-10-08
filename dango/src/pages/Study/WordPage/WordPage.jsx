import React, { useEffect, useState } from "react";
import WordPageForm from "../../../component/Forms/WordPageForm/WordPageForm";
import axios from "axios";

const WordPage = () => {
  const [studyContentList, setStudyContentList] = useState([]);

  // 데이터를 서버에서 가져오고 로컬 스토리지에 저장하는 함수
  const fetchAndStoreData = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user.userId;
      const level = user.currentLevel;
      const type = "단어";

      const response = await axios.post(
        // "https://scit45dango.site/api/study/word",
        "https://scit45dango.site/api/study/word",
        { level, userId, type }
      );

      const processedData = response.data.map((item) => ({
        hanja: item.content || "N/A",
        reading: item.pronunciation,
        meaning: item.meaning,
        level: item.level.level,
        type: item.type,
        id: item.studyContentId,
      }));

      // 현재 시간을 타임스탬프로 저장
      const currentTime = new Date().getTime();

      // 받아온 데이터를 로컬 스토리지에 저장
      localStorage.setItem("studyContent", JSON.stringify(processedData));
      localStorage.setItem("dataTimestamp", currentTime); // 타임스탬프 저장
      localStorage.setItem("currentIndex", 0); // 초기화 시 currentIndex를 0으로
      setStudyContentList(processedData); // 상태에 저장
    } catch (error) {
      console.error(
        "Error fetching study content data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // 새로운 데이터를 서버에서 가져오고 로컬 스토리지에 추가하는 함수
  const fetchAnotherData = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user.userId;
      const level = user.currentLevel;
      const type = "단어";

      const response = await axios.post(
        // "https://scit45dango.site/api/study/word",
        "https://scit45dango.site/api/study/word",
        { level, userId, type }
      );

      const processedData = response.data.map((item) => ({
        hanja: item.content || "N/A",
        reading: item.pronunciation,
        meaning: item.meaning,
        level: item.level.level,
        type: item.type,
        id: item.studyContentId,
      }));

      // 기존 로컬 스토리지에 있는 데이터를 불러오기
      const existingData =
        JSON.parse(localStorage.getItem("studyContent")) || [];

      // 기존 데이터에 새 데이터를 이어 붙이기
      const updatedData = [...existingData, ...processedData];

      // 합쳐진 데이터를 로컬 스토리지에 저장
      localStorage.setItem("studyContent", JSON.stringify(updatedData));

      // 상태 업데이트
      setStudyContentList(updatedData);
    } catch (error) {
      console.error(
        "Error fetching study content data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // 로컬 스토리지의 타임스탬프를 확인하고 만료되었는지 판단하는 함수
  const loadDataWithExpirationCheck = () => {
    const storedData = JSON.parse(localStorage.getItem("studyContent")) || [];
    const storedTimestamp = localStorage.getItem("dataTimestamp");
    const oneDayInMillis = 24 * 60 * 60 * 1000; // 하루(24시간)를 밀리초로 변환

    // 현재 시간과 로컬 스토리지에 저장된 시간 비교
    if (storedTimestamp) {
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - storedTimestamp;

      // 만약 24시간(하루)이 지났다면 로컬 스토리지에서 데이터 삭제
      if (timeDifference > oneDayInMillis) {
        console.log("데이터가 만료되었습니다. 새로운 데이터를 가져옵니다.");
        localStorage.removeItem("studyContent");
        localStorage.removeItem("dataTimestamp");
        localStorage.removeItem("currentIndex");
        return null; // 데이터 만료
      }
    }

    return storedData; // 유효한 데이터 반환
  };

  // 페이지 로드 시 로컬 스토리지에서 데이터 확인 후 처리
  useEffect(() => {
    const storedData = loadDataWithExpirationCheck();
    const index = parseInt(localStorage.getItem("currentIndex"), 10) || 0;

    if (storedData && storedData.length > 0) {
      // 로컬 스토리지에 유효한 데이터가 있으면 사용
      setStudyContentList(storedData);
      console.log("로컬 스토리지에서 데이터 사용:", storedData);
    } else {
      // 유효한 데이터가 없으면 서버에서 데이터 가져오기
      fetchAndStoreData();
    }

    // 만약 현재 인덱스가 마지막 단어일 때, 새로 데이터를 가져옴
    if (index + 1 >= storedData.length) {
      fetchAnotherData();
    }
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행되도록 함

  // 오늘 날짜를 "MM월 DD일" 형태로 포맷팅하는 함수
  const getFormattedDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    return `${month}月 ${day}日`;
  };

  const formattedDay = getFormattedDate();

  return <WordPageForm propDay={formattedDay} wordData={studyContentList} />;
};

export default WordPage;
