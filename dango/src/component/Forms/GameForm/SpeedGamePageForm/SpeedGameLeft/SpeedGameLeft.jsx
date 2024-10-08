import PropTypes from "prop-types";
import styles from "./SpeedGameLeft.module.css";
import { RegularText } from "../../../../Text";
import CharacterPartner from "../../CharacterPartner/CharacterPartner";

const SpeedGameLeft = ({
  className = "",
  propH1Color = "var(--color-main)", // HP1 색상 기본값
  propH2Color = "var(--color-main)", // HP2 색상 기본값
  propH3Color = "var(--color-main)", // HP3 색상 기본값
  propH4Color = "var(--color-main)", // HP4 색상 기본값
  propH5Color = "var(--color-main)", // HP5 색상 기본값
  propAnswerText = "정답", // 정답 텍스트 기본값
  // CharacterPartner 컴포넌트에 전달할 모든 props
  propCharacterCode = "2_m_c", // 캐릭터 이미지 코드
  propShowHeart = true, // 하트 이미지 표시 여부
  propShowRain = false, // 레인 이미지 표시 여부
  propPartnerUserName = "파트너", // 파트너의 유저 이름
  propShowLose = false, // 패배 이미지 표시 여부
  propShowWin = false, // 승리 이미지 표시 여부
}) => {
  return (
    <div className={styles.SpeedGameRight}>
      <CharacterPartner
        propCharacterCode={propCharacterCode}
        propShowHeart={propShowHeart}
        propShowRain={propShowRain}
        propPartnerUserName={propPartnerUserName}
        propShowLose={propShowLose}
        propShowWin={propShowWin}
      />

      <div className={styles.bottom}>
        {/* HP Bar */}
        <div className={styles.hpBar}>
          <RegularText
            propText={"HP"}
            propFontSize={"35px"}
            propClassName={styles.hpText}
          />
          {/* HP Bar의 각 색상을 props로 받아 변경 */}
          <div
            className={styles.hp1}
            style={{ backgroundColor: propH1Color }}
          />
          <div
            className={styles.hp2}
            style={{ backgroundColor: propH2Color }}
          />
          <div
            className={styles.hp3}
            style={{ backgroundColor: propH3Color }}
          />
          <div
            className={styles.hp4}
            style={{ backgroundColor: propH4Color }}
          />
          <div
            className={styles.hp5}
            style={{ backgroundColor: propH5Color }}
          />
        </div>

        {/* 정답 텍스트 */}
        <RegularText propText={propAnswerText} propFontSize={"50px"} />
      </div>
    </div>
  );
};

SpeedGameLeft.propTypes = {
  className: PropTypes.string,
  // HP Bar 색상 Props
  propH1Color: PropTypes.string,
  propH2Color: PropTypes.string,
  propH3Color: PropTypes.string,
  propH4Color: PropTypes.string,
  propH5Color: PropTypes.string,
  propAnswerText: PropTypes.string, // 정답 텍스트 Prop
  // CharacterPartner에서 사용하는 Props
  propCharacterCode: PropTypes.string,
  propShowHeart: PropTypes.bool,
  propShowRain: PropTypes.bool,
  propPartnerUserName: PropTypes.string,
  propShowLose: PropTypes.bool,
  propShowWin: PropTypes.bool,
};

export default SpeedGameLeft;
