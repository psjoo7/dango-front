import PropTypes from "prop-types";
import styles from "./Badge.module.css";

const Badge = ({
                    propBadgeName = "Badge1",  // 기본 이미지 파일명
                    propAltText = "Badge",  // 기본 alt 텍스트
                }) => {
    const imageSrc = `${process.env.PUBLIC_URL}/assets/images/MyProfilePage/Badges/${propBadgeName}.svg`;  // 파일명만 변경 가능


    return (
        <div>
            <img
                src={imageSrc}
                alt={propAltText}
            />
        </div>
    );
};

Badge.propTypes = {
    propImageCode: PropTypes.string,  // 이미지 파일명
    propAltText: PropTypes.string,  // alt 텍스트
    propImageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  // 이미지 너비
    propImageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number])  // 이미지 높이
};

export default Badge;
