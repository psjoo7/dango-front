import styles from "./ChatPageCardLeft.module.css";
import PropTypes from "prop-types";
import DoubleText from "../../../../component/Text/DoubleText/DoubleText";
import ProfileImage from "../../../ProfileImage/ProfileImage";

const ChatPageCardLeft = ({ propPartnerImage, propPartnerName }) => {
    return (
        <div className={styles.card}>
            <div className={styles.profile}>
                <ProfileImage
                    propImageWidth={"165px"}
                    propImageHeight={"165px"}
                    propImageCode={propPartnerImage} // 상위에서 받은 propPartnerImage 사용
                />
                <DoubleText
                    propText1={propPartnerName} // 상위에서 받은 propPartnerName 사용
                    propText2={"님"}
                    propText1FontSize={"var(--font-large-title)"}
                    propText2FontSize={"var(--font-title1)"}
                    propText1FontWeight={"900"}
                    propText2FontWeight={"700"}
                    propTextSpacing={"5px"}
                />
            </div>
        </div>
    );
};

ChatPageCardLeft.propTypes = {
    propPartnerImage: PropTypes.string.isRequired, // 상위 컴포넌트로부터 필수로 받음
    propPartnerName: PropTypes.string.isRequired, // 상위 컴포넌트로부터 필수로 받음
};

export default ChatPageCardLeft;
