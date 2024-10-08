import styles from "./ConnectionGameTop.module.css";
import RegularText from "../../../../../component/Text/RegularText/RegularText";
import PropTypes from "prop-types";
import DoubleText from "../../../../../component/Text/DoubleText/DoubleText";
import ProfileImage from "../../../../ProfileImage/ProfileImage";
import { useState } from "react";

const ConnectionGameTop = ({
  className = "",
  propCount = "??",
  propFirstBoxText = "오리",
  propProfileImageCode = "4_w",
  propShowGameLose = false,
  propShowProfile = true,
  propAnswer, // 상위 컴포넌트로 인풋 값을 전달하는 함수
}) => {
  const [inputText, setInputText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 기본 Enter 행동 방지
      propAnswer(inputText); // 입력된 값을 ConnectionGamePageForm으로 전달
      setInputText(""); // 입력 필드를 비움
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value); // 입력된 값으로 상태 업데이트
  };

  return (
    <div className={styles.background}>
      {propShowGameLose && (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/Game/GameLose.svg`}
          alt="GameLose"
        />
      )}

      {propShowProfile && (
        <div className={styles.profile}>
          <ProfileImage
            propImageHeight={"71px"}
            propImageWidth={"71px"}
            propImageCode={propProfileImageCode}
          />
          <DoubleText
            propText1={propCount}
            propText2={"번째"}
            propText1FontSize={"35px"}
            propText2FontSize={"35px"}
          />
        </div>
      )}

      <div className={styles.wrapper}>
        <div className={styles.firstBox}>
          <RegularText propText={propFirstBoxText} propFontSize="50px" />
        </div>

        <div className={styles.line}></div>

        {/* 두 번째 박스: 인풋 필드 */}
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange} // 입력 변경 시 상태 업데이트
          onKeyDown={handleKeyDown} // Enter 키 입력 시 상위 컴포넌트로 전달
          className={styles.secondBox}
          placeholder="정답 작성"
        />

        <div className={styles.line}></div>

        <div className={styles.thirdBox}></div>
      </div>
    </div>
  );
};

ConnectionGameTop.propTypes = {
  className: PropTypes.string,
  propCount: PropTypes.string,
  propFirstBoxText: PropTypes.string,
  propProfileImageCode: PropTypes.string,
  propShowGameLose: PropTypes.bool,
  propShowProfile: PropTypes.bool,
  propAnswer: PropTypes.func.isRequired,
};

export default ConnectionGameTop;
