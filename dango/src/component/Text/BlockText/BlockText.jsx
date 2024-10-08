import PropTypes from "prop-types";
import styles from "./BlockText.module.css";

const BlockText = ({
                               className = "",
                               propContent = "",        // content -> propContent
                               propFontSize = "16px",   // fontSize -> propFontSize
                               propFontWeight = "600",  // fontWeight -> propFontWeight
                               propColor = "var(--color-black)", // color -> propColor
                               propLineHeight = "1.5",  // lineHeight -> propLineHeight
                           }) => {
    const textStyle = {
        fontSize: propFontSize,
        fontWeight: propFontWeight,
        color: propColor,
        lineHeight: propLineHeight,
        whiteSpace: "pre-wrap", // 줄바꿈 및 공백을 유지
    };

    return (
        <div className={[styles.text, className].join(" ")} style={textStyle}>
            {propContent}
        </div>
    );
};

BlockText.propTypes = {
    className: PropTypes.string,
    propContent: PropTypes.string,     // 내용 텍스트를 prop으로 받음
    propFontSize: PropTypes.string,    // 글자 크기를 prop으로 받음
    propFontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // 글자 굵기를 prop으로 받음
    propColor: PropTypes.string,       // 글자 색상을 prop으로 받음
    propLineHeight: PropTypes.string,  // 줄 간격을 prop으로 받음
};

export default BlockText;
