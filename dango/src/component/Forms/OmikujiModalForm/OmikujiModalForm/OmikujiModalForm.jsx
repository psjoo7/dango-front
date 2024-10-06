import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./OmikujiModalForm.module.css";
import { RegularText } from "../../Text";
import OmikujiTempleBack from "./OmikujiTempleBack/OmikujiTempleBack";

const OmikujiModalForm = ({
                                    propOnClose,
                                    propTextTitle="대길",
                                    propTextContent ="대길",
                                }) => {
    const [isFlipped, setIsFlipped] = useState(false); // 카드가 뒤집혔는지 여부
    const [isVisible, setIsVisible] = useState(false); // OmikujiTempleBack이 보이는지 여부
    const [count, setCount] = useState(1); // 숫자 상태 관리 (1부터 시작)

    // 클릭 시 카드 뒤집기 및 숫자 감소 로직
    const handleFlip = () => {
        if (count > 0) {
            setIsVisible(true); // OmikujiTempleBack 보이게 설정

            // 상태 업데이트에 지연을 추가하여 DOM 업데이트 후 애니메이션 실행
            setTimeout(() => {
                setIsFlipped(true); // 약간의 지연 후 카드 뒤집기
            }, 50);  // 50ms 지연 후 실행

            setCount((prevCount) => prevCount - 1); // 숫자 감소
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={propOnClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 막기
            >
                {/* 우측 상단 닫기 버튼 */}
                <span className={styles.closeButton} onClick={propOnClose}>
                    &times;
                </span>

                {/* 기본 이미지들 */}
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Omikuji/OmikujiBack.svg`}
                    className={styles.OmikujiBack}
                    alt="OmikujiBack"
                />
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Omikuji/OmikujiBox.svg`}
                    className={styles.OmikujiBox}
                    alt="OmikujiBox"
                    onClick={handleFlip} // 클릭 시 숫자 감소 및 카드 뒤집기
                />
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Omikuji/OmikujiButton.svg`}
                    className={styles.OmikujiButton}
                    alt="OmikujiButton"
                    onClick={handleFlip} // 클릭 시 숫자 감소 및 카드 뒤집기
                />

                {/* 숫자 표시 */}
                <RegularText
                    propText={String(count)} // 현재 숫자 표시
                    propFontSize={"var(--font-title1)"}
                    propClassName={styles.count}
                />

                {/* OmikujiTempleBack: 처음엔 안보이고, 클릭하면 보임 */}
                {isVisible && (
                    <OmikujiTempleBack
                        propTextContent={propTextContent} // 상위에서 전달받은 내용
                        propTextTitle={propTextTitle}     // 상위에서 전달받은 제목
                        propIsFlipped={isFlipped}         // 상태에 따라 플립 여부 전달
                        className={styles.back}
                    />
                )}
            </div>
        </div>
    );
};

OmikujiModalForm.propTypes = {
    propOnClose: PropTypes.func.isRequired,         // 모달 닫기 함수
    propTextTitle: PropTypes.string.isRequired, // 제목 텍스트
    propTextContent: PropTypes.string.isRequired, // 내용 텍스트
};

export default OmikujiModalForm;
