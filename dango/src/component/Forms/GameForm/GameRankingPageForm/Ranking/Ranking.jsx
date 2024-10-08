import styles from "./Ranking.module.css";
import RegularText from "../../../../../component/Text/RegularText/RegularText";
import PropTypes from "prop-types";
import MyRanking from "../MyRanking/MyRanking";
import RankingTop from "../RankingTop/RankingTop";
import RankingList from "../RankingList/RankingList";
import RegularButton from "../../../../../component/Buttons/RegularButton/RegularButton";
import { useNavigate } from "react-router-dom"; // useNavigate 추가

const Ranking = ({
  propClassName = "",
  propRankingTitle = "빨리 쓰기 랭킹", // 기본값을 설정
  propFirstUserName,
  propFirstUserScore,
  propFirstProfileImage,
  propSecondUserName,
  propSecondUserScore,
  propSecondProfileImage,
  propThirdUserName,
  propThirdUserScore,
  propThirdProfileImage,
  propFourthUserName,
  propFourthUserScore,
  propFourthProfileImage,
  propFifthUserName,
  propFifthUserScore,
  propFifthProfileImage,
  propSixthUserName,
  propSixthUserScore,
  propSixthProfileImage,
  propSeventhUserName,
  propSeventhUserScore,
  propSeventhProfileImage,
  propEighthUserName,
  propEighthUserScore,
  propEighthProfileImage,

  propMyImageCode, // MyRanking 동적 입력
  propMyUserName,
  propMyUserScore,
  propMyUserRank,
  propButtonLink, // 버튼 클릭 시 이동할 링크
}) => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleGameStart = () => {
    navigate(propButtonLink); // 버튼 클릭 시 propButtonLink로 이동
  };

  return (
    <div className={`${styles.ranking} ${propClassName}`}>
      <div className={styles.top}>
        <RegularText
          propText={propRankingTitle} // propRankingTitle로 제목 수정 가능
          propFontWeight={"bold"}
          propFontSize={"43px"}
        />
      </div>

      <div className={styles.mid}>
        <div className={styles.myRanking}>
          <MyRanking
            propImageCode={propMyImageCode} // 이미지 동적 입력
            propUserName={propMyUserName} // 이름 동적 입력
            propUserScore={propMyUserScore} // 점수 동적 입력
            propUserRank={propMyUserRank} // 순위 동적 입력
          />
        </div>

        <div>
          <RankingTop
            propFirstUserName={propFirstUserName}
            propFirstScore={propFirstUserScore}
            propFirstImageCode={propFirstProfileImage}
            propSecondUserName={propSecondUserName}
            propSecondScore={propSecondUserScore}
            propSecondImageCode={propSecondProfileImage}
            propThirdUserName={propThirdUserName}
            propThirdScore={propThirdUserScore}
            propThirdImageCode={propThirdProfileImage}
          />
        </div>

        <div className={styles.list}>
          <RankingList
            propUserName={propFourthUserName}
            propScore={propFourthUserScore}
            propProfileImageCode={propFourthProfileImage}
          />
          <RankingList
            propUserName={propFifthUserName}
            propScore={propFifthUserScore}
            propProfileImageCode={propFifthProfileImage}
            propRank={"5"}
          />
          <RankingList
            propUserName={propSixthUserName}
            propScore={propSixthUserScore}
            propProfileImageCode={propSixthProfileImage}
            propRank={"6"}
          />
          <RankingList
            propUserName={propSeventhUserName}
            propScore={propSeventhUserScore}
            propProfileImageCode={propSeventhProfileImage}
            propRank={"7"}
          />

          <RankingList
            propUserName={propEighthUserName}
            propScore={propEighthUserScore}
            propProfileImageCode={propEighthProfileImage}
            propRank={"8"}
          />
        </div>
      </div>

      <RegularButton
        propText={"게임하기"}
        propWidth={"220px"}
        propHeight={"62px"}
        propBorderRadius={"22px"}
        propBorder={"5px solid var(--color-black)"}
        propFontSize={"28px"}
        propOnClick={handleGameStart} // 버튼 클릭 시 propButtonLink로 이동
      />
    </div>
  );
};

Ranking.propTypes = {
  propClassName: PropTypes.string,
  propRankingTitle: PropTypes.string, // propRankingTitle로 제목을 받음
  propFirstUserName: PropTypes.string.isRequired,
  propFirstUserScore: PropTypes.string.isRequired,
  propFirstProfileImage: PropTypes.string.isRequired,
  propSecondUserName: PropTypes.string.isRequired,
  propSecondUserScore: PropTypes.string.isRequired,
  propSecondProfileImage: PropTypes.string.isRequired,
  propThirdUserName: PropTypes.string.isRequired,
  propThirdUserScore: PropTypes.string.isRequired,
  propThirdProfileImage: PropTypes.string.isRequired,
  propFourthUserName: PropTypes.string.isRequired,
  propFourthUserScore: PropTypes.string.isRequired,
  propFourthProfileImage: PropTypes.string.isRequired,
  propFifthUserName: PropTypes.string.isRequired,
  propFifthUserScore: PropTypes.string.isRequired,
  propFifthProfileImage: PropTypes.string.isRequired,
  propSixthUserName: PropTypes.string.isRequired,
  propSixthUserScore: PropTypes.string.isRequired,
  propSixthProfileImage: PropTypes.string.isRequired,
  propSeventhUserName: PropTypes.string.isRequired,
  propSeventhUserScore: PropTypes.string.isRequired,
  propSeventhProfileImage: PropTypes.string.isRequired,
  propEighthUserName: PropTypes.string.isRequired,
  propEighthUserScore: PropTypes.string.isRequired,
  propEighthProfileImage: PropTypes.string.isRequired,

  // MyRanking 관련 prop 추가
  propMyImageCode: PropTypes.string.isRequired,
  propMyUserName: PropTypes.string.isRequired,
  propMyUserScore: PropTypes.string.isRequired,
  propMyUserRank: PropTypes.string.isRequired,

  // 버튼 클릭 시 이동할 링크
  propButtonLink: PropTypes.string.isRequired,
};

export default Ranking;
