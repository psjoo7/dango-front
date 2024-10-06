import styles from "./TestEntryCardBack.module.css";
import PropTypes from "prop-types";
import { RegularText } from "../../../Text";
import { RegularButton } from "../../../Buttons";
import CharacterImage from "../../../CharacterImage/CharacterImage";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트

const TestEntryCardBack = ({
                               propBackTitle = "일간테스트", // 상위에서 제목을 전달받음
                               propBackImageCode = "1_w", // 이미지 코드를 상위에서 전달받음
                               propBackButtonText = "단어", // 버튼 텍스트를 상위에서 전달받음
                               propBackButtonColor = "var(--color-dangoIvory)", // 버튼 색상을 상위에서 전달받음
                               propOnClick, // 네비게이션 경로를 상위에서 전달받음
                           }) => {
    const navigate = useNavigate(); // 네비게이터 생성

    const handleButtonClick = () => {
        navigate(propOnClick); // propOnClick 경로로 네비게이션
    };

    return (
        <div className={styles.card}>
            <RegularText
                propText={propBackTitle} // 상위에서 전달받은 제목
                propFontSize={"50px"}
            />

            <div className={styles.bottom}>
                <CharacterImage
                    propImageWidth={"145px"}
                    propImageHeight={"348px"}
                    propImageCode={propBackImageCode} // 이미지 코드 전달
                />

                <RegularButton
                    propText={propBackButtonText} // 버튼 텍스트 전달
                    propFontSize={"24px"}
                    propWidth={"170px"}
                    propHeight={"60px"}
                    propBorderRadius={"50px"}
                    propColor={propBackButtonColor} // 버튼 색상 전달
                    propOnClick={handleButtonClick} // 버튼 클릭 시 네비게이션 함수 실행
                />
            </div>
        </div>
    );
};

TestEntryCardBack.propTypes = {
    propBackTitle: PropTypes.string.isRequired, // 제목
    propBackImageCode: PropTypes.string.isRequired, // 이미지 코드
    propBackButtonText: PropTypes.string.isRequired, // 버튼 텍스트
    propBackButtonColor: PropTypes.string.isRequired, // 버튼 색상
    propOnClick: PropTypes.string.isRequired, // 네비게이션 경로
};

export default TestEntryCardBack;
