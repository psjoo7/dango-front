import React from 'react';
import PropTypes from 'prop-types';
import styles from './OmikujiTempleBack.module.css';
import RegularText from "../../../Text/RegularText/RegularText";
import {DoubleText} from "../../../Text";

const OmikujiTempleBack = ({ className = '', propTextTitle, propTextContent, propIsFlipped  }) => {
    return (
        <div className={`${styles.OmikujiPageElement} ${className}`}>
            {/* 카드 앞면과 뒷면을 포함하는 OmikujiCard */}
            <div className={`${styles.OmikujiCard} ${propIsFlipped ? styles.flipped : ''}`}>
                {/* 카드 앞면 */}
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Omikuji/OmikujiTempleBack.svg`}
                    className={styles.OmikujiTempleFront}
                    alt="OmikujiTempleFront"
                />

                {/* 카드 뒷면 */}
                <div className={styles.back}>
                    <RegularText
                        propText={propTextTitle}  // 상위 컴포넌트로부터 전달받은 제목
                        propFontSize={"60px"}
                        propClassName={styles.Title}
                    />

                    <RegularText
                        propText={propTextContent}  // 상위 컴포넌트로부터 전달받은 내용
                        propFontSize={"var(--font-title3)"}
                        propClassName={styles.Content}
                        propLineHeight={"1.4"}
                    />


                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/Omikuji/OmikujiTempleBack.svg`}
                        className={styles.OmikujiTempleBack}
                        alt="OmikujiTempleBack"
                    />
                </div>
            </div>
        </div>
    );
};

OmikujiTempleBack.propTypes = {
    className: PropTypes.string, // className을 프롭으로 받음
    propTextTitle: PropTypes.string.isRequired,   // 제목 텍스트를 동적으로 받음
    propTextContent: PropTypes.string.isRequired, // 내용 텍스트를 동적으로 받음
    propIsFlipped: PropTypes.bool.isRequired,     // 상위 컴포넌트에서 전달된 플립 여부
};

export default OmikujiTempleBack;
