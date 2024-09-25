import DoubleText from "../../Text/DoubleText/DoubleText";
import PropTypes from "prop-types";
import styles from "./WordListTop.module.css";
import ProfileImage from "../../ProfileImage/ProfileImage";

const WordListTop = ({
                         propClassName = "wordTop",
                         propText2 = "01",  // propText2만 변경 가능
                         propImageCode = "9_w",  // 이미지 파일명만 변경 가능
                         propImageWidth = "80px",  // 기본 너비 설정
                         propImageHeight = "80px",  // 기본 높이 설정
                         propWidth = "1100px",  // WordListTop의 기본 너비
                         propHeight = "120px",  // WordListTop의 기본 높이
                     }) => {
    const imageSrc = `${process.env.PUBLIC_URL}/assets/images/ProfileWoman/Profile${propImageCode}.svg`;  // 파일명만 동적으로 변경

    return (
        <div
            className={`${styles.wordListTop} ${propClassName}`}
            style={{ width: propWidth, height: propHeight }} // 동적으로 너비와 높이를 설정
        >
            <DoubleText
                propText1="Day"  // 'Day'는 고정
                propText2={propText2}
                propText1FontSize={"58px"}
                propText2FontSize={"58px"}
            />

            <ProfileImage
                propImageCode={propImageCode}
                propImageWidth={propImageWidth}
                propImageHeight={propImageHeight}
            />
        </div>
    );
};

WordListTop.propTypes = {
    propClassName: PropTypes.string,
    propText2: PropTypes.string,  // Day는 고정, propText2만 변경 가능
    propImageCode: PropTypes.string,  // 이미지 파일명만 변경 가능
    propImageWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  // 이미지 너비
    propImageHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  // 이미지 높이
    propWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  // WordListTop 컴포넌트의 너비
    propHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),  // WordListTop 컴포넌트의 높이
};

export default WordListTop;
