import React from "react";
import ConnectionGameTop from "./ConnectionGameTop/ConnectionGameTop";
import SideBar from "../../../../component/SideBar/SideBar";
import styles from "./ConnectionGamePageForm.module.css";
import CharacterMy from "../CharacterMy/CharacterMy";
import CharacterPartner from "../CharacterPartner/CharacterPartner";
import ConnectionGameMid from "./ConnectionGameMid/ConnectionGameMid";
import PropTypes from "prop-types";

const ConnectionGamePageForm = ({
  propCount = "5",
  propFirstBoxText = "토끼",
  propProfileImageCode = "5_w",
  propShowGameLose = false,
  propShowProfile = true,
  propCharacterCodeMy = "9_w",
  propShowHeartMy = true,
  propShowRainMy = false,
  propMidText = "중간 단계", // GPT 응답을 중간 텍스트로 표시
  propCharacterCodePartner = "5_w",
  handleAnswerSubmit, // ConnectionGamePage로부터 받은 함수
}) => {
  return (
    <div className={styles.backGround}>
      <SideBar />
      <div className={styles.contents}>
        <ConnectionGameTop
          propCount={propCount}
          propFirstBoxText={propFirstBoxText}
          propProfileImageCode={propProfileImageCode}
          propShowGameLose={propShowGameLose}
          propShowProfile={propShowProfile}
          propAnswer={handleAnswerSubmit} // ConnectionGameTop으로 handleAnswerSubmit 전달
        />
        <div className={styles.bottom}>
          <CharacterPartner
            propPartnerUserName="Ai"
            propShowHeart={false}
            propShowRain={false}
            propCharacterCode={propCharacterCodePartner}
          />
          <div className={styles.mid}>
            <ConnectionGameMid
              propText={propMidText} // GPT 응답을 중간 텍스트로 표시
            />
          </div>
          <CharacterMy
            propCharacterCode={propCharacterCodeMy}
            propShowHeart={propShowHeartMy}
            propShowRain={propShowRainMy}
          />
        </div>
      </div>
    </div>
  );
};

ConnectionGamePageForm.propTypes = {
  propCount: PropTypes.string,
  propFirstBoxText: PropTypes.string,
  propProfileImageCode: PropTypes.string,
  propShowGameLose: PropTypes.bool,
  propShowProfile: PropTypes.bool,
  propCharacterCodeMy: PropTypes.string,
  propShowHeartMy: PropTypes.bool,
  propShowRainMy: PropTypes.bool,
  propMidText: PropTypes.string,
  propCharacterCodePartner: PropTypes.string,
  handleAnswerSubmit: PropTypes.func,
};

export default ConnectionGamePageForm;
