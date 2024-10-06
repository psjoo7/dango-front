import styles from "./TestEntryCardFront.module.css";
import PropTypes from "prop-types";
import { RegularText } from "../../../Text";
import TestEntryCardFrontGauge from "../TestEntryCardFrontGauge/TestEntryCardFrontGauge";
import { RegularButton } from "../../../Buttons";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트

const TestEntryCardFront = ({
                                propFrontTitle = "일간테스트", // 제목을 상위에서 전달받음
                                propFrontImageCode = "5_w", // 이미지 코드를 상위에서 전달받음
                                propFrontGaugePercentage = 30, // 게이지 퍼센트를 상위에서 전달받음
                                propFrontButtonText = "단어", // 버튼 텍스트를 상위에서 전달받음
                                propFrontButtonColor = "var(--color-dangoIvory)", // 버튼 색상을 상위에서 전달받음
                                propOnClick, // 네비게이션 경로를 상위에서 전달받음
                            }) => {
    const navigate = useNavigate(); // 네비게이터 생성

    const handleButtonClick = () => {
        navigate(propOnClick); // propOnClick 경로로 네비게이션
    };

    return (
        <div className={styles.card}>
            <RegularText
                propText={propFrontTitle} // 상위에서 전달받은 제목
                propFontSize={"50px"}
            />

            <div className={styles.bottom}>
                <TestEntryCardFrontGauge
                    propImageCode={propFrontImageCode} // 이미지 코드 전달
                    propGaugePercentage={propFrontGaugePercentage} // 게이지 퍼센트 전달
                />
                <RegularButton
                    propText={propFrontButtonText} // 버튼 텍스트 전달
                    propFontSize={"24px"}
                    propWidth={"170px"}
                    propHeight={"60px"}
                    propBorderRadius={"50px"}
                    propColor={propFrontButtonColor} // 버튼 색상 전달
                    propOnClick={handleButtonClick} // 버튼 클릭 시 네비게이션 함수 실행
                />
            </div>
        </div>
    );
};

TestEntryCardFront.propTypes = {
    propFrontTitle: PropTypes.string.isRequired, // 제목
    propFrontImageCode: PropTypes.string.isRequired, // 이미지 코드
    propFrontGaugePercentage: PropTypes.number.isRequired, // 게이지 퍼센트
    propFrontButtonText: PropTypes.string.isRequired, // 버튼 텍스트
    propFrontButtonColor: PropTypes.string.isRequired, // 버튼 색상
    propOnClick: PropTypes.string.isRequired, // 네비게이션 경로
};

export default TestEntryCardFront;
