import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./ChatModalForm.module.css";
import ProfileImage from "../../ProfileImage/ProfileImage";
import { RegularText } from "../../Text";
import ChatModalList from "./ChatModal/ChatModalList/ChatModalList";
import { RegularButton } from "../../Buttons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ChatModalForm = ({ onClose, propPostChatList, propMyImageCode }) => {
  console.log("컴포넌트 ChatModalForm");
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [userNationality, setUserNationality] = useState(
    userInfo.userNationality
  );
  const createNewRoom = async () => {
    try {
      const response = await axios.post(
        // "http://localhost:8888/api/chat/rooms",
        "https://scit45dango.site/api/chat/rooms",
        {
          userId: parseInt(userInfo.userId),
          nationality: userNationality, // userNationality를 서버로 보냅니다.
        }
      );
      const newRoomId = response.data.roomId;
    } catch (error) {
      console.error("채팅방 생성 오류:", error);
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 막기
      >
        {/* 우측 상단 닫기 버튼을 span으로 대체 */}
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <RegularButton
          propHeight={"50px"}
          propWidth={"120px"}
          propText={"새로운 대화"}
          propBorder={"4px solid black"}
          propColor={"var(--color-main)"}
          propOnClick={createNewRoom}
          propHoverDisabled={true}
          propClassName={styles.new}
        />

        <div className={styles.profile}>
          <ProfileImage
            propImageCode={propMyImageCode}
            propImageWidth={"222px"}
            propImageHeight={"222px"}
          />

          <RegularText
            propText={
              userNationality === "Korea" ? "대화 목록" : "チャットリスト"
            } // 한국어 또는 일본어로 동적 변경
            propFontSize={userNationality === "Korea" ? "65px" : "47px"}
          />
        </div>

        <ChatModalList propPostChatList={propPostChatList} />
      </div>
    </div>
  );
};

ChatModalForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  propPostChatList: PropTypes.arrayOf(
    PropTypes.shape({
      propPartnerName: PropTypes.string.isRequired,
      propPartnerImageCode: PropTypes.string.isRequired,
      propNavigate: PropTypes.string.isRequired,
    })
  ).isRequired,
  propMyImageCode: PropTypes.string.isRequired,
};

export default ChatModalForm;
