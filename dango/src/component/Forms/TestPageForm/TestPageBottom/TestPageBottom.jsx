import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TestPageBottom.module.css";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import RegularButton from "../../../../component/Buttons/RegularButton/RegularButton";

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
                        color: isLeftHovered ? "white" : "black",
                    }}
                >
                    {/* Hover 시 아이콘 변경 */}
                    {isLeftHovered ? (
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/TestPage/LeftArrowWhite.svg`}
                            alt="Left arrow white"
                        />
                    ) : (
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/TestPage/LeftArrowBlack.svg`}
                            alt="Left arrow black"
                        />
                    )}
                    <RegularText
                        propText={"이전 문제"}
                        propFontSize={"var(--font-title1)"}
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
                        color: isRightHovered ? "white" : "black",
                    }}
                >
                    <RegularText
                        propText={"다음 문제"}
                        propFontSize={"var(--font-title1)"}
                        propColor={isRightHovered ? "white" : "black"}
                    />
                    {isRightHovered ? (
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/TestPage/RightArrowWhite.svg`}
                            alt="Right arrow white"
                        />
                    ) : (
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/TestPage/RightArrowBlack.svg`}
                            alt="Right arrow black"
                        />
                    )}
                </div>
            </div>

            <div className={styles.sideButton}>
                <RegularButton
                    propText={"시험 제출"}
                    propFontSize={"var(--font-title1)"}
                    propFontWeight={"700"}
                    propWidth={"200px"}
                    propHeight={"80px"}
                    propColor={"var(--color-main)"}
                    propBorderRadius={"30px"}
                    propBorder={"4px solid var(--color-black)"}
                    propHoverDisabled={true}
                />
            </div>
        </div>
    );
};

TestPageBottom.propTypes = {
    className: PropTypes.string,
};

export default TestPageBottom;
