import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import WordPageForm from "../../component/Forms/WordPageForm/WordPageForm";

const ReviewContentPage = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const userId = userInfo.userId;
  const level = userInfo.currentLevel;

  const [studyContentList, setStudyContentList] = useState([]);
  const location = useLocation();
  const { day, type } = location.state || {};

  console.log(day, type);

  const handle = async () => {
    try {
      const response = await axios.post(
        // "http://localhost:8888/api/study/studyReviewByDateAndType",
        "https://scit45dango.site/api/study/studyReviewByDateAndType",
        { userId: userInfo.userId, date: day, type: type }
      );
      console.log("handle : ", response.data);
      const processedData = response.data.map((item) => ({
        hanja: item.content || "N/A",
        reading: item.pronunciation,
        meaning: item.meaning,
        type: item.type,
        id: item.studyContentId,
      }));
      setStudyContentList(processedData); // 상태에 저장
    } catch (error) {
      console.log("review failed ", error);
    }
  };
  useEffect(() => {
    handle();
  });

  // 오늘 날짜를 "MM월 DD일" 형태로 포맷팅하는 함수
  const getFormattedDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    return `${month}月 ${day}日`;
  };

  return <WordPageForm propDay={day} wordData={studyContentList} />;
};

export default ReviewContentPage;
