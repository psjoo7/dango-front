import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./OmikujiModalForm.module.css";
import { RegularText } from "../../Text";
import OmikujiTempleBack from "./OmikujiTempleBack/OmikujiTempleBack";
import axios from "axios";

const OmikujiModalForm = ({ propOnClose }) => {
  const [isFlipped, setIsFlipped] = useState(false); // 카드가 뒤집혔는지 여부
  const [isVisible, setIsVisible] = useState(false); // OmikujiTempleBack이 보이는지 여부
  const [isOmikujiAvailable, setIsOmikujiAvailable] = useState(true); // 오미쿠지 실행 가능 여부
  const [omiData, setOmiData] = useState([]);
  // 현재 날짜와 로컬 스토리지에 저장된 날짜 비교
  const checkOmikujiAvailability = () => {
    const today = new Date().toLocaleDateString(); // 오늘의 날짜
    const storedOmikujiDate = localStorage.getItem("omikujiDate");

    // 저장된 날짜가 없거나, 저장된 날짜가 오늘 날짜와 다르면 오미쿠지 가능
    if (!storedOmikujiDate || storedOmikujiDate !== today) {
      setIsOmikujiAvailable(true);
    } else {
      setIsOmikujiAvailable(false);
    }
  };

  // 오미쿠지 실행
  const handleOmikuji = async () => {
    try {
      if (isOmikujiAvailable) {
        const user = JSON.parse(localStorage.getItem("user"));
        const response = await axios.post(
          // "https://scit45dango.site/api/OMiKuZi/OmikuziList",
          "https://scit45dango.site/api/OMiKuZi/OmikuziList",
          { userId: user.userId }
        );
        console.log("오미쿠지 : ", response.data);
        setOmiData(response.data);
        setIsVisible(true); // OmikujiTempleBack 보이게 설정
        setTimeout(() => {
          setIsFlipped(true); // 카드 뒤집기
        }, 50);

        // 로컬 스토리지에 오늘의 날짜 저장
        const today = new Date().toLocaleDateString();
        localStorage.setItem("omikujiDate", today);

        setIsOmikujiAvailable(false); // 오늘은 더 이상 오미쿠지 실행 불가
      }
    } catch (error) {
      console.log("오미쿠지 에러 ", error);
    }
  };

  // 페이지 로드 시 오미쿠지 실행 가능 여부 확인
  useEffect(() => {
    checkOmikujiAvailability();
  }, []);

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
          onClick={handleOmikuji} // 클릭 시 오미쿠지 실행 여부 확인 후 처리
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/Omikuji/OmikujiButton.svg`}
          className={styles.OmikujiButton}
          alt="OmikujiButton"
          onClick={handleOmikuji} // 클릭 시 오미쿠지 실행 여부 확인 후 처리
        />

        {/* 오미쿠지 실행 가능 여부를 숫자로 표시 */}
        <RegularText
          propText={isOmikujiAvailable ? "1" : "0"} // 1은 가능, 0은 불가
          propFontSize={"var(--font-title1)"}
          propClassName={styles.count}
        />

        {/* OmikujiTempleBack: 처음엔 안보이고, 클릭하면 보임 */}
        {isVisible && (
          <OmikujiTempleBack
            propTextContent={omiData.jpDescription} // 상위에서 전달받은 내용
            propTextTitle={omiData.omikuziResult} // 상위에서 전달받은 제목
            propIsFlipped={isFlipped} // 상태에 따라 플립 여부 전달
            className={styles.back}
          />
        )}
      </div>
    </div>
  );
};

OmikujiModalForm.propTypes = {
  propOnClose: PropTypes.func.isRequired, // 모달 닫기 함수
  //   propTextTitle: PropTypes.string.isRequired, // 제목 텍스트
  //   propTextContent: PropTypes.string.isRequired, // 내용 텍스트
};

export default OmikujiModalForm;
