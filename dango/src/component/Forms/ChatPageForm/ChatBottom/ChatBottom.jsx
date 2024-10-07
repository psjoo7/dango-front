import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import axios from "axios"; // axios 임포트
import styles from "./ChatBottom.module.css";
import { RegularText, DoubleText } from "../../../Text/";
import Button from "../../../Buttons/RegularButton/RegularButton";

const ChatBottom = ({ propPoint = "400", roomId }) => {
  const [inputText, setInputText] = useState(""); // textarea의 입력값을 관리할 상태
  useEffect(() => {
    console.log(roomId);
  }, [roomId]);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputText(value); // 입력값 상태 업데이트
  };

  const handleSend = async () => {
    try {
      console.log("handleSend Worked!!!");
      const response = await axios.post(
        `http://localhost:8888/api/chat/rooms/${String(roomId)}/send`,
        {
          message: inputText,
        }
      );

      if (response.status === 200) {
        alert("Message sent successfully!");
        setInputText(""); // 전송 후 입력란 초기화
      } else {
        console.log("handleSend ", roomId);
        alert("Failed to send message.");
      }
    } catch (error) {
      console.log("handleSend ", roomId);
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

  return (
    <div className={styles.ChatBottom}>
      <div className={styles.wrap}>
        <div className={styles.point}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/ChatPage/CoinIcon.svg`}
            alt="CoinIcon"
          />

          <div className={styles.pointText}>
            <RegularText
              propText={"남은 마일리지"}
              propFontSize={"13px"}
              propFontWeight={500}
            />

            <DoubleText
              propText1={propPoint}
              propText2={"Point"}
              propText1FontSize={"var(--font-title3)"}
              propText2FontSize={"var(--font-title3)"}
            />
          </div>
        </div>

        <div className={styles.chatBox}>
          <div className={styles.scrollContent}>
            <textarea
              className={styles.text}
              value={inputText} // 상태에 따라 텍스트를 업데이트
              onChange={handleInputChange} // 입력값 변경 처리
              aria-label="메시지를 입력해 주세요."
              rows={1} // 기본적으로 한 줄만 보이게 설정
              onInput={(e) => {
                e.target.style.height = "auto"; // 입력할 때마다 높이를 다시 계산
                e.target.style.height = `${e.target.scrollHeight}px`; // 텍스트 높이에 맞게 자동 확장
              }}
            />
          </div>
        </div>

        <Button
          propIcon={
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/ChatPage/SendIconBlack.svg`}
              alt="SendIconBlack"
            />
          }
          propWidth={"250px"}
          propHeight={"77.2px"}
          propText={"메세지 보내기"}
          propFontSize={"var(--font-title1)"}
          propFontWeight={"700"}
          propColor={"var(--color-main)"}
          propHoverDisabled={true}
          propBorderRadius={"15px"}
          propBorder={"4px solid black"}
          propOnClick={handleSend} // 버튼 클릭 시 handleSend 호출
        />
      </div>
    </div>
  );
};

ChatBottom.propTypes = {
  roomId: PropTypes.string,
};

export default ChatBottom;
