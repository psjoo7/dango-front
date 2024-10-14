import styles from "./GameRankingPageForm.module.css";
import SideBar from "../../../../component/SideBar/SideBar";
import Ranking from "./Ranking/Ranking";

const GameRankingPageForm = () => {
  return (
    <div className={styles.backGround}>
      <SideBar />

      <div className={styles.contents}>
        <Ranking
          propRankingTitle="빨리 쓰기 랭킹" // 동적으로 제목 수정
          propFirstUserName="John"
          propFirstUserScore="200"
          propFirstProfileImage="5_w"
          propSecondUserName="Jane"
          propSecondUserScore="170"
          propSecondProfileImage="2_m"
          propThirdUserName="Jake"
          propThirdUserScore="160"
          propThirdProfileImage="1_m"
          propFourthUserName="당고"
          propFourthUserScore="150"
          propFourthProfileImage="1_w"
          propFifthUserName="Emily"
          propFifthUserScore="100"
          propFifthProfileImage="3_w"
          propSixthUserName="Steve"
          propSixthUserScore="85"
          propSixthProfileImage="8_m"
          propSeventhUserName="Sarah"
          propSeventhUserScore="80"
          propSeventhProfileImage="6_m"
          propEighthUserName="Lily"
          propEighthUserScore="75"
          propEighthProfileImage="8_m"
          propMyImageCode={"1_w"}
          propMyUserName={"당고"}
          propMyUserScore={"150"}
          propMyUserRank={"4"}
          propButtonLink={"/game/speed/rule"}
        />
        <div className={styles.maincharacter}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/GameRanking/GameMainCharacter.svg`}
            className={styles.gameMainCharacter}
            alt="Game main character"
          />
        </div>

        <Ranking
          propRankingTitle="끝말 잇기 랭킹" // 동적으로 제목 수정
          propFirstUserName="John"
          propFirstUserScore="200"
          propFirstProfileImage="5_w"
          propSecondUserName="Jane"
          propSecondUserScore="120"
          propSecondProfileImage="2_m"
          propThirdUserName="Jake"
          propThirdUserScore="100"
          propThirdProfileImage="1_m"
          propFourthUserName="Mike"
          propFourthUserScore="95"
          propFourthProfileImage="1_w"
          propFifthUserName="Emily"
          propFifthUserScore="90"
          propFifthProfileImage="3_w"
          propSixthUserName="Steve"
          propSixthUserScore="85"
          propSixthProfileImage="8_m"
          propSeventhUserName="Sarah"
          propSeventhUserScore="80"
          propSeventhProfileImage="6_m"
          propEighthUserName="Lily"
          propEighthUserScore="75"
          propEighthProfileImage="8_m"
          propMyImageCode={"1_w"}
          propMyUserName={"당고"}
          propMyUserScore={"60"}
          propMyUserRank={"10"}
          propButtonLink={"/game/connection/rule"}
        />
      </div>
    </div>
  );
};

export default GameRankingPageForm;
