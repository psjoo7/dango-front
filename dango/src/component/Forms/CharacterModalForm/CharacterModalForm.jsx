import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./CharacterModalForm.module.css";
import CharacterModalCardCenter from "./CharacterModalCardCenter/CharacterModalCardCenter";
import CharacterModalCardSide from "./CharacterModalCardSide/CharacterModalCardSide";
import { RegularText } from "../../Text";

const CharacterModalForm = ({ propOnClose, propCenterImageCode, propCharacterList, propOnImageSelect }) => {
    const [centerImageCode, setCenterImageCode] = useState(propCenterImageCode); // 현재 센터에 있는 캐릭터 이미지 코드 추적
    const [userNationality, setUserNationality] = useState("Japan"); // userNationality 상태 추가

    useEffect(() => {
        setUserNationality("Korea");
    }, []); // 컴포넌트가 처음 렌더링될 때만 실행

    // 1차원 배열로 변환 (이미지 코드만 추출)
    const imageCodes = propCharacterList.map((item) => item[0]);
    const characterNames = propCharacterList.map((item) => item[1]);

    // 현재 이미지가 리스트에서 몇 번째인지 계산
    const currentIndex = imageCodes.indexOf(centerImageCode);

    // 왼쪽 화살표 클릭 시 실행되는 함수
    const handleLeftTriangleClick = () => {
        if (currentIndex > 0) {
            const previousImageCode = imageCodes[currentIndex - 1];
            setCenterImageCode(previousImageCode);
        }
    };

    // 오른쪽 화살표 클릭 시 실행되는 함수
    const handleRightTriangleClick = () => {
        if (currentIndex < imageCodes.length - 1) {
            const nextImageCode = imageCodes[currentIndex + 1];
            setCenterImageCode(nextImageCode);
        }
    };

    // 캐릭터 선택 버튼 클릭 시 동작
    const handleButtonOnClick = () => {
        propOnImageSelect(centerImageCode); // 선택된 캐릭터 이미지 코드를 상위 컴포넌트로 전달
        propOnClose(); // 모달 닫기
    };

    return (
        <div className={styles.modalOverlay} onClick={propOnClose}>
            <div
                className={styles.modalContent}
                onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 방지
            >
                {/* 우측 상단 닫기 버튼 */}
                <span className={styles.closeButton} onClick={propOnClose}>
          &times;
        </span>

                <div className={styles.content}>
                    <RegularText
                        propText={userNationality === "Korea" ? "캐릭터 선택" : "キャラクター選択"} // 한국어 또는 일본어로 동적 변경
                        propFontSize={"45px"}
                    />

                    <div className={styles.cards}>
                        {/* 좌측 캐릭터: 첫 번째 캐릭터일 때 이미지만 숨김 */}
                        <CharacterModalCardSide
                            propCharacterImageCode={imageCodes[currentIndex - 1]}
                            propIsCharacter={currentIndex > 0} // 첫 번째 캐릭터일 때 이미지를 숨김
                            propCharacterName={characterNames[currentIndex - 1] || ""}
                        />

                        {/* 중앙 캐릭터 */}
                        <CharacterModalCardCenter
                            propButtonOnClick={handleButtonOnClick} // 캐릭터 선택 버튼 클릭 시 동작
                            propLeftTriangleOnClick={handleLeftTriangleClick}
                            propRightTriangleOnClick={handleRightTriangleClick}
                            propCenterImageCode={centerImageCode}
                            propCharacterName={characterNames[currentIndex]} // 현재 캐릭터 이름 표시
                        />

                        {/* 우측 캐릭터: 마지막 캐릭터일 때 이미지만 숨김 */}
                        <CharacterModalCardSide
                            propCharacterImageCode={imageCodes[currentIndex + 1]}
                            propIsCharacter={currentIndex < imageCodes.length - 1} // 마지막 캐릭터일 때 이미지를 숨김
                            propCharacterName={characterNames[currentIndex + 1] || ""}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

CharacterModalForm.propTypes = {
    propOnClose: PropTypes.func.isRequired,
    propCenterImageCode: PropTypes.string.isRequired, // 초기 중앙 캐릭터 이미지 코드
    propCharacterList: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired, // 2차원 배열 (이미지 코드, 이름)
    propOnImageSelect: PropTypes.func.isRequired, // 이미지 선택 시 호출될 함수
};

export default CharacterModalForm;
