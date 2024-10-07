import styles from "./ChatPageCardTop.module.css";
import PropTypes from "prop-types";
import { RegularText, DoubleText } from "../../../../component/Text/";
import Button from "../../../../component/Buttons/RegularButton/RegularButton";
import ProfileImage from "../../../ProfileImage/ProfileImage";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 임포트

const ChatPageCardTop = ({ propMyImage, propPartnerImage, propPartnerName }) => {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 navigate 함수 생성

    const handleEndChat = () => {
        // "대화 그만하기" 버튼 클릭 시 HomePage로 네비게이트
        navigate("/"); // '/'는 HomePage를 가리키는 경로로, 실제 경로에 맞게 수정 가능
    };

    return (
        <div className={styles.card}>
            <div className={styles.contents}>
                <div className={styles.topImages}>
                    <ProfileImage
                        propImageWidth={"65px"}
                        propImageHeight={"65px"}
                        propImageCode={propMyImage} // 상위에서 받은 propMyImage 사용
                    />
                    <ProfileImage
                        propImageWidth={"65px"}
                        propImageHeight={"65px"}
                        propImageCode={propPartnerImage} // 상위에서 받은 propPartnerImage 사용
                    />
                </div>

                <div className={styles.topText}>
                    <DoubleText
                        propText1={propPartnerName} // 상위에서 받은 propPartnerName 사용
                        propText2={"님과 대화중"}
                        propText1FontSize={"var(--font-large-title)"}
                        propText2FontSize={"var(--font-title1)"}
                        text1FontWeight={"900"}
                        text2FontWeight={"700"}
                        propTextSpacing={"5px"}
                    />
                </div>

                <div className={styles.topButton}>
                    <Button
                        propText={"대화 그만하기"}
                        propFontSize={"var(--font-body1)"}
                        propHoverColor={"var(--color-main)"}
                        propHoverTextColor={"var(--color-black)"}
                        propWidth={"144px"}
                        propHeight={"56px"}
                        propOnClick={handleEndChat} // 버튼 클릭 시 handleEndChat 함수 호출
                    />
                </div>
            </div>
        </div>
    );
};

ChatPageCardTop.propTypes = {
    propMyImage: PropTypes.string.isRequired, // 상위 컴포넌트로부터 필수로 받음
    propPartnerImage: PropTypes.string.isRequired, // 상위 컴포넌트로부터 필수로 받음
    propPartnerName: PropTypes.string.isRequired, // 상위 컴포넌트로부터 필수로 받음
};

export default ChatPageCardTop;
