import styles from "./GameRankingPage.module.css";
import GameRankingPageForm from "../../../component/Forms/GameForm/GameRankingPageForm/GameRankingPageForm";

const GameRankingPage = () => {
  const propSpeedGameRanking = [
    { UserName: "John", UserScore: 200, ProfileImage: "5_w" },
    { UserName: "Jane", UserScore: 120, ProfileImage: "2_m" },
    { UserName: "Jake", UserScore: 100, ProfileImage: "3_m" },
    { UserName: "Mike", UserScore: 95, ProfileImage: "1_w" },
    { UserName: "Emily", UserScore: 90, ProfileImage: "3_w" },
    { UserName: "Steve", UserScore: 85, ProfileImage: "8_m" },
    { UserName: "Sarah", UserScore: 80, ProfileImage: "6_m" },
    { UserName: "Lily", UserScore: 75, ProfileImage: "8_m" },
  ];

  const propSpeedGameMyRanking = {
    MyImageCode: "1_w",
    MyUserName: "줄리줄리줄리",
    MyUserScore: 150,
    MyUserRank: 100,
  };

  const propConnectionGameRanking = [
    { UserName: "John", UserScore: 200, ProfileImage: "5_w" },
    { UserName: "Jane", UserScore: 120, ProfileImage: "2_m" },
    { UserName: "Jake", UserScore: 100, ProfileImage: "2_w" },
    { UserName: "Mike", UserScore: 95, ProfileImage: "1_w" },
    { UserName: "Emily", UserScore: 90, ProfileImage: "3_w" },
    { UserName: "Steve", UserScore: 85, ProfileImage: "8_m" },
    { UserName: "Sarah", UserScore: 80, ProfileImage: "6_m" },
    { UserName: "Lily", UserScore: 75, ProfileImage: "8_m" },
  ];

  const propConnectionGameMyRanking = {
    MyImageCode: "1_w",
    MyUserName: "줄리",
    MyUserScore: 150,
    MyUserRank: 100,
  };

  return (
    <div className={styles.backGround}>
      <GameRankingPageForm
        propSpeedGameRanking={propSpeedGameRanking}
        propSpeedGameMyRanking={propSpeedGameMyRanking}
        propConnectionGameRanking={propConnectionGameRanking}
        propConnectionGameMyRanking={propConnectionGameMyRanking}
      />
    </div>
  );
};

export default GameRankingPage;
