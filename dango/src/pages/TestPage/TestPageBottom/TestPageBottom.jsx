import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TestPageBottom.module.css";

// SVG를 ReactComponent로 불러오기
import { ReactComponent as LeftArrowBlack } from "../../../Image/TestImage/LeftArrowBlack.svg";
import { ReactComponent as LeftArrowWhite } from "../../../Image/TestImage/LeftArrowWhite.svg";
import { ReactComponent as RightArrowBlack } from "../../../Image/TestImage/RightArrowBlack.svg";
import { ReactComponent as RightArrowWhite } from "../../../Image/TestImage/RightArrowWhite.svg";
import RegularText from "../../../component/Text/RegularText/RegularText";
import Button from "../../../component/Buttons/RegularButton/RegularButton"

const TestPageBottom = ({ className = "" }) => {
    const [isLeftHovered, setIsLeftHovered] = useState(false);
    const [isRightHovered, setIsRightHovered] = useState(false);

    return (
        <div className={styles.bottom}>
            
            <div className={styles.buttons}>
                {/* 이전 문제 버튼 */}
                <div
                    className={`${styles.button} ${styles.leftButton}`}
                    onMouseEnter={() => setIsLeftHovered(true)}
                    onMouseLeave={() => setIsLeftHovered(false)}
                    style={{
                        backgroundColor: isLeftHovered ? "black" : "white",
                        color: isLeftHovered ? "white" : "black"
                    }}
                >
                    {isLeftHovered ? <LeftArrowWhite/> : <LeftArrowBlack/>} {/* Hover 시 아이콘 변경 */}
                    <RegularText
                        text={"이전 문제"}
                        propFontSize={"20px"}
                        propColor={isLeftHovered ? "white" : "black"}
                        propFontWeight={700}
                    />
                </div>

                {/* 다음 문제 버튼 */}
                <div
                    className={`${styles.button} ${styles.rightButton}`}
                    onMouseEnter={() => setIsRightHovered(true)}
                    onMouseLeave={() => setIsRightHovered(false)}
                    style={{
                        backgroundColor: isRightHovered ? "black" : "white",
                        color: isRightHovered ? "white" : "black"
                    }}
                >
                    <RegularText
                        text={"다음 문제"}
                        propFontSize={"20px"}
                        propColor={isRightHovered ? "white" : "black"}
                    />
                    {isRightHovered ? <RightArrowWhite/> : <RightArrowBlack/>}
                </div>
            </div>

            <div className={styles.sideButton}>
                <Button
                    buttonText={"시험 제출"}
                    buttonFontSize={"20px"}
                    buttonWidth={"160px"}
                    buttonHeight={"65px"}
                    buttonColor={"var(--color-main)"}
                    buttonBorderRadius={"20px"}
                    buttonBorder={"4px solid var(--color-black)"}
                    buttonHover={false}
                />

            </div>


        </div>

    );
};

TestPageBottom.propTypes = {
    className: PropTypes.string,
};

export default TestPageBottom;
