import styles from "./HomeMyRanking.module.css";
import PropTypes from "prop-types";
import DoubleText from "../../../../component/Text/DoubleText/DoubleText";
import ProfileImage from "../../../../component/ProfileImage/ProfileImage";
import { useState, useEffect } from "react";
import LoadingComponent from "../../../../component/LoadingComponent/LoadingComponent";

const HomeMyRanking = ({
  propClassName = "",
  propMyRankInfo,
  propMyRankNum,
}) => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // propMyRankInfo가 있고, user와 nickname이 존재할 때만 userName 설정
    if (propMyRankInfo && propMyRankInfo.user && propMyRankInfo.user.nickname) {
      console.log("my rank ", propMyRankInfo);
      setUserName(propMyRankInfo.user.nickname);
    }
  }, [propMyRankInfo]);

  if (!propMyRankInfo || !propMyRankInfo.user) {
    // 데이터가 준비되지 않은 경우 로딩 상태 표시
    return <LoadingComponent />;
  }

  const userRank = parseInt(propMyRankNum) + 1;
  const userPoint = propMyRankInfo?.weeklyPoints || 0;

  return (
    <div className={[styles.myRanking, propClassName].join(" ")}>
      <div className={styles.myProfile}>
        <ProfileImage propImageWidth="43px" propImageHeight="43px" />

        <DoubleText
          propText1={userName}
          propText2={"님"}
          propText1FontSize={"22px"}
          propText2FontSize={"22px"}
        />
      </div>

      <DoubleText
        propText1={userPoint}
        propText2={"점"}
        propText1FontSize={"22px"}
        propText2FontSize={"22px"}
        propText1Color={"black"}
        propText2Color={"black"}
      />

      <DoubleText
        propText1={userRank}
        propText2={"등"}
        propText1FontSize={"34px"}
        propText2FontSize={"34px"}
        propText1Color={"black"}
        propText2Color={"black"}
      />
    </div>
  );
};

HomeMyRanking.propTypes = {
  propClassName: PropTypes.string,
  propMyRankInfo: PropTypes.any,
  propMyRankNum: PropTypes.number,
};

export default HomeMyRanking;
