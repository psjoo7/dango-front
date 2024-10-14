import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SideBar from "../../../../component/SideBar/SideBar";
import styles from "./SpeedGameRulePageForm.module.css";
import { RegularText, BlockText } from "../../../../component/Text/";
import Button from "../../../../component/Buttons/RegularButton/RegularButton";

const SpeedGameRulePageForm = () => {
  const navigate = useNavigate();
  const [waiting, setWaiting] = useState(false); // 대기 상태
  const [message, setMessage] = useState(""); // 메시지 상태

  // SpeedGameRulePageForm.js
  const handleGameStart = async () => {
    const userInfo = JSON.parse(localStorage.getItem("user"));

    try {
      const response = await axios.post(
        "http://localhost:8888/api/game/match",
        { userId: userInfo.userId }
      );

      // 대기 상태인 경우 2초마다 상태를 재확인
      if (response.data.status === "waiting") {
        setMessage("다른 사용자가 들어올 때까지 기다리는 중...");
        setWaiting(true);

        const interval = setInterval(async () => {
          const checkResponse = await axios.post(
            "http://localhost:8888/api/game/match",
            { userId: userInfo.userId }
          );

          if (checkResponse.data.roomId) {
            clearInterval(interval); // 매칭 완료 시 interval 종료
            setWaiting(false); // 대기 상태 종료
            navigate(`/game/speed/play/${checkResponse.data.roomId}`);
          }
        }, 2000); // 2초 간격으로 상태 확인
      } else if (response.data.roomId) {
        // 즉시 매칭된 경우
        navigate(`/game/speed/play/${response.data.roomId}`);
      }
    } catch (error) {
      setMessage("매칭 오류가 발생했습니다. 다시 시도해주세요.");
      setWaiting(false);
      console.error("매칭 오류:", error);
    }
  };

  return (
    <div className={styles.backGround}>
      <SideBar />

      <div className={styles.box}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/GameRulePage/SpeedGameRuleImage.svg`}
          alt="SpeedGameRuleImage"
        />

        <div className={styles.contents}>
          <div className={styles.texts}>
            <RegularText
              propText={"빨리 쓰기 게임"}
              propFontSize={"51px"}
              propFontWeight={700}
            />

            <div className={styles.textBox}>
              <BlockText
                propFontSize={"27px"}
                propLineHeight={1.7}
                propFontWeight={700}
                propContent={`일본어 한자를 보고 10초 안에 읽거나 뜻을 맞추면 
상대의 HP를 1포인트 깎을 수 있습니다. 각 플레이어는
5포인트의 HP를 가지고 있으며, HP가 0이 되면 게임에서
패배합니다. 10초 내에 정답을 맞추지 못하면 무승부로
처리됩니다. 승리한 플레이어는 마일리지를 획득합니다.`}
              />
            </div>
          </div>

          <Button
            propText={"게임하기"}
            propFontSize={"28px"}
            propWidth={"300px"}
            propHeight={"80px"}
            propColor={"var(--color-black)"}
            propTextColor={"var(--color-white)"}
            propBorderRadius={"29px"}
            propOnClick={handleGameStart} // 버튼 클릭 시 경로 이동
          />

          {waiting && (
            <div className={styles.waitingMessage}>
              <p>{message}</p>
              <div className={styles.spinner}></div> {/* 로딩 스피너 추가 */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeedGameRulePageForm;
