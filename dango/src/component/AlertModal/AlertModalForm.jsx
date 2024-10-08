import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./AlertModalForm.module.css";
import CharacterImage from "../CharacterImage/CharacterImage";
import { RegularText } from "../Text";

const AlertModalForm = ({ propOnClose }) => {
  const [userNationality, setUserNationality] = useState("Korea");
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    setUserNationality("Japan");
  }, []); // 컴포넌트가 처음 렌더링될 때만 실행

  return (
    <div className={styles.modalOverlay} onClick={propOnClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 이벤트 전파 막기
      >
        {/* 우측 상단 닫기 버튼을 span으로 대체 */}
        <span className={styles.closeButton} onClick={propOnClose}>
          &times;
        </span>

        <div className={styles.mid}>
          <div className={styles.images}>
            <div className={styles.midImage}>
              <CharacterImage
                propImageCode={"2_w"}
                propImageWidth={"164px"}
                propImageHeight={"384px"}
              />
            </div>

            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Alert/Alert1.svg`}
              className={styles.Alert1}
              alt="Alert1"
            />

            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Alert/Alert2.svg`}
              className={styles.Alert2}
              alt="Alert2"
            />

            <img
              src={`${process.env.PUBLIC_URL}/assets/images/Alert/Alert3.svg`}
              className={styles.Alert3}
              alt="Alert3"
            />
          </div>

          <div className={styles.texts}>
            <RegularText
              propText={"Error"}
              propFontSize={"var(--font-large-title)"}
            />
            <RegularText
              propText={"."}
              propFontSize={"var(--font-large-title)"}
              propClassName={styles.dot1}
            />
            <RegularText
              propText={"."}
              propFontSize={"var(--font-large-title)"}
              propClassName={styles.dot2}
            />
            <RegularText
              propText={"."}
              propFontSize={"var(--font-large-title)"}
              propClassName={styles.dot3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

AlertModalForm.propTypes = {
  propOnClose: PropTypes.func.isRequired,
  propPostChatList: PropTypes.arrayOf(
    PropTypes.shape({
      propPartnerName: PropTypes.string.isRequired,
      propPartnerImageCode: PropTypes.string.isRequired,
      propNavigate: PropTypes.string.isRequired,
    })
  ).isRequired,
  propMyImageCode: PropTypes.string.isRequired,
};

export default AlertModalForm;
