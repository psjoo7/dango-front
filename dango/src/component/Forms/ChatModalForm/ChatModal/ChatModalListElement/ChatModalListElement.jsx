import PropTypes from "prop-types";
import styles from "./ChatModalListElement.module.css";
import { DoubleText } from "../../../../Text";
import ProfileImage from "../../../../ProfileImage/ProfileImage";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const ChatModalListElement = ({
  className = "",
  propPartnerImageCode,
  propPartnerName,
  propNavigate, // 상위 컴포넌트에서 받은 경로 (이 값을 백엔드에 보냄)
}) => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [userNationality, setUserNationality] = useState(
    userInfo.userNationality
  );

  const handleClick = async () => {
    try {
      // propNavigate를 이용해 POST 요청 보냄
      // const response = await axios.post("http://localhost:8888" + propNavigate);
      const response = await axios.post(
        "https://scit45dango.site" + propNavigate
      );
      console.log("채팅방 post요청 성공:", response.data);

      // POST 요청 성공 후 네비게이션
      navigate(propNavigate);
    } catch (error) {
      // 실패해도 받은 propNavigate 값을 그대로 콘솔에 출력
      console.log("채팅방 post요청 실패, 상위에서 받은 경로:", propNavigate);
    }
  };

  return (
    <div
      className={`${styles.ChatModalListElement} ${className}`}
      onClick={handleClick}
    >
      <ProfileImage
        propImageWidth={"50px"}
        propImageHeight={"50px"}
        propImageCode={propPartnerImageCode}
      />

      <DoubleText
        propText1={propPartnerName}
        propText2={
          userNationality === "Korea" ? "님과 대화방" : "様とのチャットルーム" // 한국어 또는 일본어로 동적 변경
        }
        propText1FontSize={"var(--font-title1)"}
        propText2FontSize={"var(--font-title2)"}
      />
    </div>
  );
};

ChatModalListElement.propTypes = {
  className: PropTypes.string,
  propPartnerImageCode: PropTypes.string.isRequired,
  propPartnerName: PropTypes.string.isRequired,
  propNavigate: PropTypes.string.isRequired, // 상위 컴포넌트에서 받은 경로를 그대로 전달
};

export default ChatModalListElement;
