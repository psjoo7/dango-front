import styles from "./WordTestCard2.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import React, { useState, useEffect } from "react";

const WordTestCard2 = ({ propTitle, propContent }) => {
  const [isContentVisible, setIsContentVisible] = useState(false); // 텍스트 표시 여부를 관리
  const [isLoading, setIsLoading] = useState(true); // 데이터 로딩 상태 관리

  // propContent가 변경될 때마다 텍스트 표시 상태를 초기화
  useEffect(() => {
    setIsContentVisible(false); // 텍스트 숨기기
    setIsLoading(true); // 로딩 상태로 전환
    const timer = setTimeout(() => {
      setIsLoading(false); // 로딩이 완료된 후 표시
    }, 0); // 상태가 제대로 반영될 수 있도록 약간의 지연 추가

    return () => clearTimeout(timer); // 타이머 정리
  }, [propContent]);

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
        {!isLoading && ( // 로딩 중일 때는 텍스트를 표시하지 않음
          <div
            className={`${styles.cardText} ${
              isContentVisible ? styles.visible : ""
            }`}
          >
            <RegularText
              propText={propContent} // 클릭하면 글자 표시
              propFontSize={"55px"}
              propFontWeight={"bold"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

WordTestCard2.propTypes = {
  propTitle: PropTypes.string.isRequired,
  propContent: PropTypes.string.isRequired,
};

export default WordTestCard2;
