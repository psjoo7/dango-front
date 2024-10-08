import React, { useState } from "react";
import styles from "./ChatBottom.module.css";
import Button from "../../../Buttons/RegularButton/RegularButton";
import { RegularText, DoubleText } from "../../../Text/";

const ChatBottom = ({ propPoint, onSend, onNext }) => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => setInputText(e.target.value);

  const handleSendClick = () => {
    onSend(inputText);
    setInputText(""); // 메시지 전송 후 입력 필드 초기화
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
              propText={"나의 마일리지"}
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
          <textarea
            className={styles.text}
            value={inputText}
            onChange={handleInputChange}
            rows={1}
            onInput={(e) => {
              e.target.style.height = "auto";
              e.target.style.height = `75.2px`;
            }}
            style={{ height: "75.2px" }}
            aria-label="메시지를 입력해 주세요."
          />
        </div>
        <Button
          propWidth={"120px"}
          propHeight={"77.2px"}
          propText={"메세지"}
          propFontSize={"var(--font-title1)"}
          propFontWeight={"700"}
          propColor={"var(--color-main)"}
          propHoverDisabled={true}
          propBorderRadius={"15px"}
          propBorder={"4px solid black"}
          propOnClick={handleSendClick}
        />
        <Button
          propWidth={"120px"}
          propHeight={"77.2px"}
          propText={"다음"}
          propFontSize={"var(--font-title1)"}
          propFontWeight={"700"}
          propColor={"var(--color-dangoGreen)"}
          propHoverDisabled={true}
          propBorderRadius={"15px"}
          propBorder={"4px solid black"}
          propOnClick={onNext}
        />
      </div>
    </div>
  );
};

export default ChatBottom;
