import PropTypes from "prop-types";
import styles from "./ReviewListElement.module.css";
import DynamicText from "../../../Text/DynamicText/DynamicText";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}-${day}`;
};

const ReviewListElement = ({
  propNumberText = "1",
  onWordClick,
  onGrammarClick,
}) => {
  const formattedDate = formatDate(propNumberText); // 날짜를 포맷팅
  return (
    <div className={styles.wordListElementBack}>
      <div className={styles.number}>
        <DynamicText
          propText={formattedDate}
          propMaxFontSize={55}
          propMinFontSize={25}
        />
      </div>

      <div
        className={styles.wordElement}
        onClick={() => onWordClick(propNumberText)}
      >
        <DynamicText
          propText="단어"
          propMaxFontSize={55}
          propMinFontSize={25}
        />
      </div>

      <div
        className={styles.wordElement}
        onClick={() => onGrammarClick(propNumberText)}
      >
        <DynamicText
          propText="문법"
          propMaxFontSize={55}
          propMinFontSize={25}
        />
      </div>
    </div>
  );
};

ReviewListElement.propTypes = {
  propNumberText: PropTypes.string.isRequired,
  onWordClick: PropTypes.func.isRequired, // "단어" 클릭 시 호출되는 함수
  onGrammarClick: PropTypes.func.isRequired, // "문법" 클릭 시 호출되는 함수
};

export default ReviewListElement;
