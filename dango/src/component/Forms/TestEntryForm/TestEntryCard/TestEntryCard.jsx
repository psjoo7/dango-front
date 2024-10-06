import styles from "./TestEntryCard.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import TestEntryCardFront from "../TestEntryCardFront/TestEntryCardFront";
import TestEntryCardBack from "../TestEntryCardBack/TestEntryCardBack";

const TestEntryCard = ({
                           propTitle = "일간테스트",
                           propFrontImageCode = "5_w",
                           propBackImageCode = "1_w",
                           propGaugePercentage = 50,
                           propButtonText = "테스트 보기",
                           propButtonColor = "var(--color-dangoIvory)",
                           propLink = "/word", // 기본 경로 설정
                       }) => {
    const [isFlipping, setIsFlipping] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleMouseEnter = () => {
        if (!isFlipping && !isFlipped) {
            setIsFlipping(true);
            setIsFlipped(true);
            setTimeout(() => {
                setIsFlipping(false);
            }, 350); // 애니메이션 시간과 동일하게 설정 (0.7초)
        }
    };

    const handleMouseLeave = () => {
        if (!isFlipping && isFlipped) {
            setIsFlipping(true);
            setIsFlipped(false);
            setTimeout(() => {
                setIsFlipping(false);
            }, 350); // 애니메이션 시간과 동일하게 설정 (0.7초)
        }
    };

    return (
        <div
            className={styles.cardContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className={`${styles.card} ${isFlipped ? styles.isFlipped : ""}`}>
                {/* 프론트 카드 */}
                <div className={styles.cardFront}>
                    <TestEntryCardFront
                        propFrontTitle={propTitle}
                        propFrontImageCode={propFrontImageCode}
                        propFrontGaugePercentage={propGaugePercentage}
                        propFrontButtonText={propButtonText}
                        propFrontButtonColor={propButtonColor}
                        propOnClick={propLink} // 버튼 클릭 시 사용할 경로 전달
                    />
                </div>

                {/* 백 카드 */}
                <div className={styles.cardBack}>
                    <TestEntryCardBack
                        propBackTitle={propTitle}
                        propBackImageCode={propBackImageCode}
                        propBackButtonText={propButtonText}
                        propBackButtonColor={propButtonColor}
                        propOnClick={propLink} // 버튼 클릭 시 사용할 경로 전달
                    />
                </div>
            </div>
            {/* 삼각형 */}
            <div className={styles.Triangle}></div>
        </div>
    );
};

TestEntryCard.propTypes = {
    propTitle: PropTypes.string.isRequired,
    propFrontImageCode: PropTypes.string.isRequired,
    propBackImageCode: PropTypes.string.isRequired,
    propGaugePercentage: PropTypes.number.isRequired,
    propButtonText: PropTypes.string.isRequired,
    propButtonColor: PropTypes.string.isRequired,
    propLink: PropTypes.string.isRequired, // 문자열 타입으로 변경
};

export default TestEntryCard;
