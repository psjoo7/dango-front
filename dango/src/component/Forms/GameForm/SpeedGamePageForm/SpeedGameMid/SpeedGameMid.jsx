import PropTypes from "prop-types";
import styles from "./SpeedGameMid.module.css";
import { RegularText, DoubleText } from "../../../../../component/Text/";
import { useState } from "react";

const SpeedGameMid = ({
  propRemainingQuestions = 2, // 남은 문제 수
  propTimeLeft = "??", // 남은 시간
  propQuestion = 3, // 현재 문제 번호
  propAnswer, // 정답 제출 시 호출되는 함수 (상위 컴포넌트에서 받음)
}) => {
  const [answer, setAnswer] = useState(""); // 입력 값을 관리하는 state

  // Enter 키를 눌렀을 때 상위 컴포넌트에 값을 전달하는 함수
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 기본 동작(폼 제출 등) 방지
      if (answer.trim() !== "") {
        // 빈 값이 아닐 때만 제출
        propAnswer(answer); // 상위 컴포넌트에 입력 값 전달
        setAnswer(""); // 제출 후 입력 필드를 비움
      }
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.title}>
        <RegularText
          propText="빨리 쓰기 게임"
          propColor="var(--color-black)"
          propFontSize={"50px"}
        />
      </div>

      <div className={styles.texts}>
        <div className={styles.count}>
          {/* <RegularText
            propText="남은 문제 :"
            propColor="var(--color-gray3)"
            propFontSize={"var(--font-title3)"}
          /> */}
          {/* <DoubleText
            propText1={propRemainingQuestions}
            propText2={"/10"}
            propText1Color={"var(--color-gray3)"}
            propText2Color={"var(--color-gray3)"}
            propText1FontSize={"var(--font-title3)"}
            propText2FontSize={"var(--font-title3)"}
          /> */}
        </div>

        <div className={styles.time}>
          <RegularText propText="남은시간 :" propFontSize={"35px"} />
          <DoubleText
            propText1={propTimeLeft}
            propText2="초"
            propText1FontSize={"35px"}
            propText2FontSize={"35px"}
          />
        </div>
      </div>

      <div style={{ paddingBottom: "60px" }}>
        <RegularText
          propText={propQuestion}
          propColor="var(--color-black)"
          propFontSize={"80px"}
          propFontWeight={"900"}
        />
      </div>

      <div style={{ paddingBottom: "50px" }}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/Game/GameMainCharacter.svg`}
          alt="Game Main Character"
        />
      </div>

      <div>
        <input
          placeholder="정답 작성"
          className={styles.inputText}
          value={answer}
          onChange={(e) => setAnswer(e.target.value)} // 입력 필드 업데이트
          onKeyDown={handleKeyDown} // Enter 키 입력 시 처리
        />
      </div>
    </div>
  );
};

SpeedGameMid.propTypes = {
  propRemainingQuestions: PropTypes.number, // 남은 문제 수 Prop
  propTimeLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 남은 시간 Prop
  propQuestion: PropTypes.number, // 현재 문제 번호 Prop
  propAnswer: PropTypes.func.isRequired, // 정답 제출 시 상위 컴포넌트로 전달하는 함수
};

export default SpeedGameMid;
