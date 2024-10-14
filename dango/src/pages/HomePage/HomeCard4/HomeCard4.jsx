import styles from "./HomeCard4.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../component/Text/RegularText/RegularText";
import HomeRanking from "./HomeRanking/HomeRanking";
import HomeMyRanking from "./HomeMyRanking/HomeMyRanking";
import axios from "axios";
import { useEffect, useState } from "react";

const HomeCard4 = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const userId = userInfo.userId;
  const [user, setUser] = useState([]);
  const [myRanking, setMyRanking] = useState(0);
  const [userList, setUserList] = useState([]);

  const getRankingInfo = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8888/api/member/rank?userId=${userId}`
      );
      const rankingList = response.data.RankingList;
      console.log(rankingList);
      // weeklyPoints 기준으로 내림차순 정렬
      rankingList.sort((a, b) => b.weeklyPoints - a.weeklyPoints);
      rankingList.forEach((element, index) => {
        if (element.user.userId === userId) {
          setUser(element);
          setMyRanking(index);
        }
      });
      setUserList(rankingList);
      console.log("user ", user);
      console.log("my ranking ", myRanking);
    } catch (error) {
      console.log("getting rank infomation : ", error);
    }
  };

  useEffect(() => {
    if (userId) {
      console.log(userId);
      getRankingInfo();
    } else {
      console.log("User info is not available.");
    }
  }, [userId]);
  return (
    <div className={styles.homeCard4}>
      <HomeRanking propList={userList} />
      <HomeMyRanking propMyRankInfo={user} propMyRankNum={myRanking} />

      <div className={styles.cardTitle}>
        <RegularText
          propText={"학습률 랭킹"}
          propFontSize={"25px"}
          propFontWeight={700}
        />
      </div>
    </div>
  );
};

HomeCard4.propTypes = {
  propClassName: PropTypes.string,
};

export default HomeCard4;
