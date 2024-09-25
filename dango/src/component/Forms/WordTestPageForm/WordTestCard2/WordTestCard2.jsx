import styles from "./WordTestCard2.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import React, { useState } from "react";

const TurtleContent = ({ propTitle, propContent }) => {
    const [isContentVisible, setIsContentVisible] = useState(false); // 텍스트 표시 여부를 관리

    const handleShowContent = () => {
        setIsContentVisible(true); // 클릭 시 텍스트 표시
    };

    return (
        <div className={styles.cardBack} onClick={handleShowContent}>
            <div className={styles.text}>
                <RegularText
                    propText={propTitle}
                    propFontSize={"25px"}
                    propFontWeight={"700"}
                />
            </div>

            <div className={styles.cardFront}>
                <div className={`${styles.cardText} ${isContentVisible ? styles.visible : ""}`}>
                    <RegularText
                        propText={propContent} // 클릭하면 글자 표시
                        propFontSize={"55px"}
                        propFontWeight={"bold"}
                    />
                </div>
            </div>
        </div>
    );
};

TurtleContent.propTypes = {
    propTitle: PropTypes.string.isRequired,
    propContent: PropTypes.string.isRequired,
};

export default TurtleContent;
