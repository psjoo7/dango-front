import React, { useEffect, useState } from "react";
import ReviewForm from "../../component/Forms/ReviewForm/ReviewForm";
import axios from "axios";

const ReviewPage = () => {
  const [reviewDates, setReviewDates] = useState([]);
  // 오늘 날짜를 "MM월 DD일" 형태로 포맷팅하는 함수
  const getFormattedDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    return `${month}月 ${day}日`;
  };

  const formattedDay = getFormattedDate();
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const handleReviewDates = async () => {
    try {
      const response = await axios.post(
        // "http://localhost:8888/api/study/studyReview",
        "https://scit45dango.site/api/study/studyReview",
        { userId: userInfo.userId }
      );
      console.log("review Dates : ", response.data);
      setReviewDates(response.data); // 리뷰 날짜 리스트를 상태로 저장
    } catch (error) {
      console.log("리뷰 날짜 불러오기 실패 ", error);
      alert("리뷰 날짜 불러오기 실패 ");
    }
  };

  useEffect(() => {
    handleReviewDates();
  }, []);
  return (
    <ReviewForm
      propDay={formattedDay}
      propImageCode={"2_m"}
      reviewDates={reviewDates}
    />
  );
};

export default ReviewPage;
