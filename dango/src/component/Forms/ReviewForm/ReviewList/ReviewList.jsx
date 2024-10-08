import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./ReviewList.module.css";
import ReviewListElement from "../ReviewListElement/ReviewListElement";

const ReviewList = ({ reviewDates }) => {
  const navigate = useNavigate(); // 네비게이션을 위한 훅

  // 단어 클릭 시 /review/wordDay{day} 경로로 이동
  const handleWordClick = (day) => {
    navigate(`/review/contents`, { state: { day, type: "word" } }); // day 값을 경로에 추가
  };

  // 문법 클릭 시 /review/grammarDay{day} 경로로 이동
  const handleGrammarClick = (day) => {
    navigate(`/review/contents`, { state: { day, type: "grammer" } }); // day 값을 경로에 추가
  };

  return (
    <div className={styles.list}>
      {reviewDates.map((date, index) => (
        <ReviewListElement
          key={index}
          propNumberText={date} // 1부터 시작하는 숫자를 전달
          onWordClick={() => handleWordClick(date)} // 단어 클릭 핸들러
          onGrammarClick={() => handleGrammarClick(date)} // 문법 클릭 핸들러
        />
      ))}
    </div>
  );
};

ReviewList.propTypes = {
  //   propElementCount: PropTypes.number.isRequired, // 리스트의 길이를 결정하는 숫자
  reviewDates: PropTypes.array.isRequired, // 리뷰 날짜 배열을 prop으로 받음
};

export default ReviewList;
