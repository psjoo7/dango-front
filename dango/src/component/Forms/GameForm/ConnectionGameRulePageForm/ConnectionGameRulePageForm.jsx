import SideBar from "../../../../component/SideBar/SideBar";
import styles from "./ConnectionGameRulePageForm.module.css";
import { RegularText, BlockText } from "../../../../component/Text/";
import Button from "../../../../component/Buttons/RegularButton/RegularButton";
import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가

const ConnectionGameRulePageForm = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleGameStart = () => {
    navigate("/game/connection/play"); // 경로로 이동
  };

  return (
    <div className={styles.backGround}>
      <SideBar />

      <div className={styles.box}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/GameRulePage/ConnectionGameRuleImage.svg`}
          alt="SpeedGameRuleImage"
        />

        <div className={styles.contents}>
          <div className={styles.texts}>
            <RegularText
              propText={"끝말잇기 게임"}
              propFontSize={"51px"}
              propFontWeight={700}
            />

            <div className={styles.textBox}>
              <BlockText
                propFontSize={"26.9px"}
                propLineHeight={1.7}
                propFontWeight={700}
                propContent={`AI와 하는 끝말잇기 게임에서는 AI가 단어를 제시하면,
플레이어는 10초 안에 그 단어의 마지막 글자로 시작하는
새로운 단어를 말해야 합니다. 단어를 성공적으로 이어가면
몇 번째 단어인지 기록되며, 기록 숫자가 계속 올라갑니다.
이렇게 단어를 이어가다가 시간 내에 단어를 말하지 못하면 게임에서 패배하게 됩니다.`}
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
        </div>
      </div>
    </div>
  );
};

export default ConnectionGameRulePageForm;
