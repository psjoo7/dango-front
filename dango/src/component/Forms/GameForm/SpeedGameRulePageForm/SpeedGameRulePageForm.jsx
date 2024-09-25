import SideBar from "../../../../component/SideBar/SideBar";
import styles from "./SpeedGameRulePageForm.module.css";
import { RegularText, BlockText } from "../../../../component/Text/";
import Button from "../../../../component/Buttons/RegularButton/RegularButton";
import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가

const SpeedGameRulePageForm = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleGameStart = () => {
        navigate("/game/speed_rule/speed_game"); // 경로로 이동
    };

    return (
        <div className={styles.backGround}>
            <SideBar />

            <div className={styles.box}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/SpeedGameRule/SpeedGameRuleImage.svg`}
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
                </div>
            </div>
        </div>
    );
};

export default SpeedGameRulePageForm;
