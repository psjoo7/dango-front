import React from "react";
import PropTypes from "prop-types";
import styles from "./WordListElement.module.css";
import WordListElementFront from "./WordListElementFront";
import WordListElementBack from "./WordListElementBack";

const WordListElement = ({
                             propFrontNumber,
                             propFrontHanja,
                             propFrontReading,
                             propFrontMeaning,
                             propBackNumber,
                             propBackHanja,
                             propIsFlipped, // 카드가 뒤집혔는지 여부를 상위에서 받음
                             propOnFlip, // 개별 카드 클릭 시 호출할 함수
                             className = "",
                         }) => {
    return (
        <div className={`${styles.wordListElement} ${className}`} onClick={propOnFlip}>
            <div className={`${styles.card} ${propIsFlipped ? styles.flipped : ""}`}>
                <div className={styles.front}>
                    <WordListElementFront
                        propFrontNumber={propFrontNumber}
                        propFrontHanja={propFrontHanja}
                        propFrontReading={propFrontReading}
                        propFrontMeaning={propFrontMeaning}
                    />
                </div>
                <div className={styles.back}>
                    <WordListElementBack
                        propBackNumber={propBackNumber}
                        propBackHanja={propBackHanja}
                    />
                </div>
            </div>
        </div>
    );
};

WordListElement.propTypes = {
    propFrontNumber: PropTypes.string,
    propFrontHanja: PropTypes.string,
    propFrontReading: PropTypes.string,
    propFrontMeaning: PropTypes.string,
    propBackNumber: PropTypes.string,
    propBackHanja: PropTypes.string,
    propIsFlipped: PropTypes.bool, // 카드가 뒤집혔는지 여부
    propOnFlip: PropTypes.func, // 개별 카드 클릭 시 호출할 함수
    className: PropTypes.string,
};

export default WordListElement;
