import PropTypes from "prop-types";
import styles from "./CharacterPartner.module.css";
import { RegularText } from "../../../Text";

const CharacterPartner = ({
  className = "",
  propCharacterCode = "2_m", // 캐릭터 이미지 코드를 동적으로 받음
  propShowHeart = true, // 하트 이미지 표시 여부 (기본값 true)
  propShowRain = true, // 레인 이미지 표시 여부 (기본값 true)
  propPartnerUserName = "파트너", // 파트너의 유저 이름 (기본값 파트너)
  propShowLose = false, // GameLose 이미지 표시 여부 (기본값 true)
  propShowWin = false, // GameWin 이미지 표시 여부 (기본값 true)
}) => {
  return (
    <div className={styles.CharacterPartner}>
      {propShowLose && (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/Game/GameLose.svg`}
          alt="GameLose"
          className={styles.GameLose}
        />
      )}

      {/* GameWin 이미지: propShowWin이 true일 때만 표시 */}
      {propShowWin && (
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/Game/GameWin.svg`}
          alt="GameWin"
          className={styles.GameWin}
        />
      )}

      <div className={styles.Character}>
        <RegularText
          propText={propPartnerUserName} // 동적으로 변경되는 파트너의 유저 이름
          propFontSize={"35px"}
          propClassName={"text"}
        />

        <div className={styles.images}>
          {/* 동적으로 변경되는 캐릭터 이미지 */}
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Character/Profile${propCharacterCode}.svg`}
            alt="Character"
            className={styles.characterImage}
          />

          {/* 하트 이미지: propShowHeart가 true일 때만 표시 */}
          {propShowHeart && (
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Game/GameHeart.svg`}
              alt="Heart"
              className={styles.heartImage}
            />
          )}

          {/* 레인 이미지: propShowRain이 true일 때만 표시 */}
          {propShowRain && (
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Game/GameRain.svg`}
              alt="Rain"
              className={styles.rainImage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

CharacterPartner.propTypes = {
  className: PropTypes.string,
  propCharacterCode: PropTypes.string, // 캐릭터 이미지 코드 Prop
  propShowHeart: PropTypes.bool, // 하트 이미지 표시 여부 Prop
  propShowRain: PropTypes.bool, // 레인 이미지 표시 여부 Prop
  propPartnerUserName: PropTypes.string, // 파트너 유저 이름 Prop
  propShowLose: PropTypes.bool, // GameLose 이미지 표시 여부 Prop
  propShowWin: PropTypes.bool, // GameWin 이미지 표시 여부 Prop
};

export default CharacterPartner;
