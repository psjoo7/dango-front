import { DoubleText, RegularText } from "../../../component/Text";
import RegularButton from "../../../component/Buttons/RegularButton/RegularButton";
import styles from "./SignUpFinishPageForm.module.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SignUpFinishPageForm = ({ propUsername }) => {
  const navigate = useNavigate();
  const moveToLevelTestPage = () => {
    navigate("/quiz/level_test");
  };
  // 입력 값을 저장할 상태 변수 선언
  const [inputValue, setInputValue] = useState("");

  // 버튼 클릭 시 호출되는 함수
  const handleButtonClick = () => {
    // 유효한 입력 값 리스트
    const validValues = ["N1", "N2", "N3", "N4", "N5"];

    // 입력 값에서 공백 제거
    const trimmedValue = inputValue.trim();

    // 입력 값이 유효한지 확인
    if (validValues.includes(trimmedValue)) {
      // 유효한 경우 세션 스토리지에 저장
      sessionStorage.setItem("setLevel", trimmedValue);
      // 다음 단계로 이동하는 로직을 추가할 수 있습니다.
      // 예: 페이지 이동 또는 상태 업데이트
      console.log("세션에 저장되었습니다:", trimmedValue);
      moveToLevelTestPage();
    } else {
      // 유효하지 않은 경우 팝업 창 표시
      alert("N1~5 중에 입력해주세요. N은 대문자로 입력 부탁드립니다. Ex) N1");
    }
  };
  return (
    <div className={styles.signUpFinishPageForm}>
      <div className={styles.texts}>
        <div className={styles.topText}>
          <RegularText
            propText="당신의 JLPT 실력은?"
            propFontSize="80px"
            propFontWeight="700"
          />

          <input
            className={styles.textInput}
            type="text"
            value={inputValue} // 입력 값 바인딩
            onChange={(e) => setInputValue(e.target.value)} // 입력 값 변경 시 상태 업데이트
          />
        </div>

        <div className={styles.bottomText}>
          <div className={styles.bottomText1}>
            <RegularText
              propText="주의!!! "
              propFontSize="50px"
              propFontWeight="700"
              propColor="var(--color-gray3)"
            />
            <RegularText
              propText="정답률 "
              propFontSize="50px"
              propFontWeight="700"
              propColor="var(--color-gray3)"
            />
            <RegularText
              propText="70%"
              propFontSize="50px"
              propFontWeight="700"
              propColor="var(--color-tomato)"
            />
            <RegularText
              propText="넘지 않으면"
              propFontSize="50px"
              propFontWeight="700"
              propColor="var(--color-gray3)"
            />
          </div>

          <div className={styles.bottomText2}>
            <RegularText
              propText="입력하신 레벨보다 낮은 레벨로 "
              propFontSize="50px"
              propFontWeight="700"
              propColor="var(--color-gray3)"
            />
            <RegularText
              propText="재시험 "
              propFontSize="50px"
              propFontWeight="700"
              propColor="var(--color-tomato)"
            />
            <RegularText
              propText="봅니다"
              propFontSize="50px"
              propFontWeight="700"
              propColor="var(--color-gray3)"
            />
          </div>
        </div>
      </div>

      <RegularButton
        propWidth="370px"
        propHeight="120px"
        propColor="var(--color-black)"
        propBorderRadius="30px"
        propText="실력 테스트 하기"
        propFontSize="35px"
        propFontWeight="700"
        propTextColor="var(--color-white)"
        propClassName={styles.button}
        propOnClick={handleButtonClick} // 버튼 클릭 시 이벤트 핸들러 연결
      />
    </div>
  );
};

export default SignUpFinishPageForm;
