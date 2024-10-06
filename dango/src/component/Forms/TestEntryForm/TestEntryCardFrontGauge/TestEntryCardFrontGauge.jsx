import React, { useState, useEffect } from "react";
import styles from "./TestEntryCardFrontGauge.module.css";
import PropTypes from "prop-types";
import TestEntryCardFrontBar from "../TestEntryCardFrontBar/TestEntryCardFrontBar";
import ProfileImage from "../../../ProfileImage/ProfileImage";
import { DoubleText } from "../../../Text";

const TestEntryCardFrontGauge = ({
                                     propGaugePercentage = 100, // 기본 게이지 퍼센트 값
                                     propImageCode = "default_code", // 상위에서 propImageCode를 전달받음
                                 }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);

    useEffect(() => {
        // 컴포넌트가 마운트되면 애니메이션 시작
        const timer = setTimeout(() => {
            setAnimatedPercentage(propGaugePercentage);
        }, 200); // 약간의 지연을 주어 자연스러운 애니메이션 시작
        return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
    }, [propGaugePercentage]);

    // 352px 기준으로 1%당 3.52px로 계산하고, 기본적으로 -40px에서 시작
    const leftPosition = -40 + (animatedPercentage * 3.52);

    return (
        <div className={styles.TestEntryCardFrontGauge}>
            <div
                className={styles.top}
                style={{
                    left: `${leftPosition}px`, // 기본 -40px에서 퍼센트에 맞게 이동
                }}
            >
                <div className={styles.texts}>
                    <DoubleText
                        propText1={"진행"}
                        propText2={"률"}
                        propText1FontSize={"var(--font-caption)"}
                        propText2FontSize={"var(--font-caption)"}
                        propTextSpacing={"0px"}
                    />
                    <DoubleText
                        propText1={animatedPercentage}
                        propText2={"%"}
                        propText1FontSize={"var(--font-caption)"}
                        propText2FontSize={"var(--font-caption)"}
                        propTextSpacing={"0"}
                    />
                </div>

                <div className={styles.image}>
                    <ProfileImage
                        propImageWidth={"70px"}
                        propImageHeight={"70px"}
                        propImageCode={propImageCode} // propImageCode 상위에서 전달
                    />
                    <div className={styles.Triangle}></div>
                </div>
            </div>

            <TestEntryCardFrontBar
                propGaugePercentage={animatedPercentage}
            />
        </div>
    );
};

TestEntryCardFrontGauge.propTypes = {
    propGaugePercentage: PropTypes.number.isRequired, // 게이지 퍼센트를 필수값으로 설정
    propImageCode: PropTypes.string.isRequired, // 이미지 코드를 필수값으로 설정
};

export default TestEntryCardFrontGauge;
