import PropTypes from "prop-types";
import styles from "./DoubleText.module.css";

const DoubleText = ({
                        propClassName = "",
                        propText1 = "text1",
                        propText2 = "text2",
                        propText1Style = {},
                        propText2Style = {},
                        propContainerStyle = {},
                        propText1FontSize,
                        propText1FontWeight,
                        propText1Color,
                        propText2FontSize,
                        propText2FontWeight,
                        propText2Color,
                        propTextSpacing = "5px", // 기본 간격 설정 (gap)
                    }) => {
    // text1과 text2의 스타일을 props로 받아 적용
    const combinedText1Style = {
        fontSize: propText1FontSize,
        fontWeight: propText1FontWeight,
        color: propText1Color,
        ...propText1Style, // 기존에 전달된 스타일과 병합
    };

    const combinedText2Style = {
        fontSize: propText2FontSize,
        fontWeight: propText2FontWeight,
        color: propText2Color,
        ...propText2Style, // 기존에 전달된 스타일과 병합
    };

    // 컨테이너 스타일에 gap을 추가하여 propTextSpacing을 반영
    const combinedContainerStyle = {
        gap: propTextSpacing, // gap을 propTextSpacing 값으로 설정
        ...propContainerStyle, // 기존 containerStyle과 병합
    };

    return (
        <div className={[styles.textdoublecomponent, propClassName].join(" ")} style={combinedContainerStyle}>
            <b id="text1" className={styles.text1} style={combinedText1Style}>
                {propText1}
            </b>
            <b id="text2" className={styles.text2} style={combinedText2Style}>
                {propText2}
            </b>
        </div>
    );
};

DoubleText.propTypes = {
    propClassName: PropTypes.string,
    propText1: PropTypes.string,
    propText2: PropTypes.string,
    propText1Style: PropTypes.object,
    propText2Style: PropTypes.object,
    propContainerStyle: PropTypes.object,
    propText1FontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 폰트 크기
    propText1FontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 폰트 굵기
    propText1Color: PropTypes.string, // 색상
    propText2FontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 폰트 크기
    propText2FontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 폰트 굵기
    propText2Color: PropTypes.string, // 색상
    propTextSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 텍스트 간의 간격 설정
};

export default DoubleText;
