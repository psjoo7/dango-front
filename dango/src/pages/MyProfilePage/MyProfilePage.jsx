import styles from "./MyProfilePage.module.css";
import PropTypes from "prop-types";
import MyProfileForm from "../../component/Forms/MyProfilePageForm/MyProfileForm";
import axios from "axios";
import { useEffect, useState } from "react";

const MyProfilePage = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [attendance, setAttendance] = useState(0);
  const [completionRateData, setCompletionRateData] = useState(0);
  const fetchAttendanceRate = async () => {
    try {
      const response = await axios.post(
        // "https://scit45dango.site/api/member/dates",
        "https://scit45dango.site/api/member/dates",
        { userId: userInfo.userId }
      );
      setAttendance(response.data);
    } catch (error) {
      console.log("attandanceRate error", error);
    }
  };
  const fetchCompletionRate = async () => {
    try {
      const response = await axios.post(
        // "https://scit45dango.site/api/member/CompletionRateData",
        "https://scit45dango.site/api/member/CompletionRateData",
        { userId: userInfo.userId }
      );
      setCompletionRateData(response.data.percentage);
      console.log(response.data);
    } catch (error) {
      console.log("completionRate : ", error);
    }
  };
  useEffect(() => {
    fetchAttendanceRate();
    fetchCompletionRate();
  }, []);

  return (
    <div>
      <MyProfileForm
        // Top Card (MyProfileCard1)에 전달할 프롭
        propUserName={userInfo.nickname}
        propEmail={userInfo.userEmail}
        propJapaneseLevel={userInfo.originalLevel}
        propBadge1Text="도전자"
        propBadge2Text="선구자"
        propBadge3Text="완주자"
        propBadge1Name="Badge1"
        propBadge2Name="Badge2"
        propBadge3Name="Badge3"
        // Bottom Card (MyProfileCard2)에 전달할 프롭
        propBottomLevelText={userInfo.originalLevel} // 학습률 카드
        propBottomLevelRate={completionRateData}
        propBottomAttendanceText={attendance} // 출석률 카드
        propBottomAttendanceRate={attendance}
        propInitialImageCode={"8_w"}
      />
    </div>
  );
};

MyProfilePage.propTypes = {
  className: PropTypes.string,
};

export default MyProfilePage;
