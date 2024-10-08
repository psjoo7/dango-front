import PropTypes from "prop-types";
import SideBar from "../../../../component/SideBar/SideBar";
import SpeedGameLeft from "./SpeedGameLeft/SpeedGameLeft";
import SpeedGameRight from "./SpeedGameRight/SpeedGameRight";
import SpeedGameMid from "./SpeedGameMid/SpeedGameMid";
import styles from "./SpeedGamePageForm.module.css";

const SpeedGamePageForm = ({
  propH1ColorLeft,
  propH2ColorLeft,
  propH3ColorLeft,
  propH4ColorLeft,
  propH5ColorLeft,
  propAnswerTextLeft,
  propCharacterCodeLeft,
  propShowHeartLeft,
  propShowRainLeft,
  propPartnerUserNameLeft,
  propShowLoseLeft,
  propShowWinLeft,
  propQuestionMid,
  propTimeLeftMid,
  propRemainingQuestionsMid,
  propAnswerMid,
  propH1ColorRight,
  propH2ColorRight,
  propH3ColorRight,
  propH4ColorRight,
  propH5ColorRight,
  propAnswerTextRight,
  propCharacterCodeRight,
  propShowHeartRight,
  propShowRainRight,
  propShowLoseRight,
  propShowWinRight,
}) => {
  return (
    <div className={styles.SpeedGamePageForm}>
      <SideBar />
      <div className={styles.contents}>
        <SpeedGameLeft
          propH1Color={propH1ColorLeft}
          propH2Color={propH2ColorLeft}
          propH3Color={propH3ColorLeft}
          propH4Color={propH4ColorLeft}
          propH5Color={propH5ColorLeft}
          propAnswerText={propAnswerTextLeft}
          propCharacterCode={propCharacterCodeLeft}
          propShowHeart={propShowHeartLeft}
          propShowRain={propShowRainLeft}
          propPartnerUserName={propPartnerUserNameLeft}
          propShowLose={propShowLoseLeft}
          propShowWin={propShowWinLeft}
        />
        <SpeedGameMid
          propQuestion={propQuestionMid}
          propTimeLeft={propTimeLeftMid}
          propRemainingQuestions={propRemainingQuestionsMid}
          propAnswer={propAnswerMid}
        />
        <SpeedGameRight
          propH1Color={propH1ColorRight}
          propH2Color={propH2ColorRight}
          propH3Color={propH3ColorRight}
          propH4Color={propH4ColorRight}
          propH5Color={propH5ColorRight}
          propAnswerText={propAnswerTextRight}
          propCharacterCode={propCharacterCodeRight}
          propShowHeart={propShowHeartRight}
          propShowRain={propShowRainRight}
          propShowLose={propShowLoseRight}
          propShowWin={propShowWinRight}
        />
      </div>
    </div>
  );
};

SpeedGamePageForm.propTypes = {
  propH1ColorLeft: PropTypes.string,
  propH2ColorLeft: PropTypes.string,
  propH3ColorLeft: PropTypes.string,
  propH4ColorLeft: PropTypes.string,
  propH5ColorLeft: PropTypes.string,
  propAnswerTextLeft: PropTypes.string,
  propCharacterCodeLeft: PropTypes.string,
  propShowHeartLeft: PropTypes.bool,
  propShowRainLeft: PropTypes.bool,
  propPartnerUserNameLeft: PropTypes.string,
  propShowLoseLeft: PropTypes.bool,
  propShowWinLeft: PropTypes.bool,
  propQuestionMid: PropTypes.string,
  propTimeLeftMid: PropTypes.number,
  propRemainingQuestionsMid: PropTypes.string,
  propAnswerMid: PropTypes.func,
  propH1ColorRight: PropTypes.string,
  propH2ColorRight: PropTypes.string,
  propH3ColorRight: PropTypes.string,
  propH4ColorRight: PropTypes.string,
  propH5ColorRight: PropTypes.string,
  propAnswerTextRight: PropTypes.string,
  propCharacterCodeRight: PropTypes.string,
  propShowHeartRight: PropTypes.bool,
  propShowRainRight: PropTypes.bool,
  propShowLoseRight: PropTypes.bool,
  propShowWinRight: PropTypes.bool,
};

export default SpeedGamePageForm;
