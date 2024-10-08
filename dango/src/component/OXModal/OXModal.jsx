import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./OXModal.module.css";
import CharacterImage from "../CharacterImage/CharacterImage";
import { RegularButton } from "../Buttons";

const OXModal = ({ propOnClose, propCheck }) => {
    const [userNationality, setUserNationality] = useState("Japan");
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        setUserNationality("Korea"); // 처음에 'Japan'으로 설정되지만, 실제론 상위에서 변경 가능
    }, []);

    // 텍스트를 언어에 따라 변경하는 로직
    const getButtonText = () => {
        if (userNationality === "Japan") {
            return propCheck ? "正解です！" : "不正解です。"; // 일본어로 텍스트 설정
        } else {
            return propCheck ? "정답입니다!" : "오답입니다."; // 한국어로 텍스트 설정
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={propOnClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 막기
            >
                <div className={styles.mid}>
                    <div className={styles.images}>
                        <div className={styles.CharacterImage}>
                            <CharacterImage
                                propImageCode={"2_w"}
                                propImageWidth={"198px"}
                                propImageHeight={"474px"}
                            />
                        </div>
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/OXImage/O_Image.svg`}
                            className={styles.O_Image}
                            alt="O_Image"
                            style={{ opacity: propCheck ? 1 : 0 }} // propCheck가 true일 때 O 이미지 보임
                        />
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/OXImage/X_Image.svg`}
                            className={styles.X_Image}
                            alt="X_Image"
                            style={{ opacity: propCheck ? 0 : 1 }} // propCheck가 false일 때 X 이미지 보임
                        />
                    </div>
                    <RegularButton
                        propWidth={"200px"}
                        propHeight={"70px"}
                        propColor={"var(--color-main)"}
                        propClassName={styles.button}
                        propFontSize={"29px"}
                        propBorder={"5px solid black"}
                        propBorderRadius={"23px"}
                        propText={getButtonText()} // 언어에 따른 텍스트 설정
                        onClick={propOnClose} // 버튼 클릭 시 모달 닫기
                    />
                </div>
            </div>
        </div>
    );
};

// PropTypes를 컴포넌트 바깥에 정의
OXModal.propTypes = {
    propOnClose: PropTypes.func.isRequired,
    propCheck: PropTypes.bool.isRequired,
};

export default OXModal;
