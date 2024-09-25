import React from "react";
import PropTypes from "prop-types";
import styles from "./RegularButton.module.css";

const RegularButton = ({
                           propClassName = "",
                           propType = "button", // 기본값은 "button"
                           propText = "Button", // 기본 텍스트
                           propFontSize = "16px", // 텍스트 크기
                           propFontWeight = "700", // 텍스트 굵기
                           propTextColor = "var(--color-black)", // 텍스트 색상
                           propHoverTextColor = "var(--color-white)", // hover 시 텍스트 색상
                           propWidth = "200px", // 기본 너비
                           propHeight = "50px", // 기본 높이
                           propColor = "var(--color-white)", // 기본 배경색
                           propHoverColor = "var(--color-black)", // hover 시 배경색
                           propBorder = "3px solid var(--color-black)", // border 값
                           propBorderRadius = "15px", // 기본 border-radius
                           propIcon = null, // 아이콘 없을 때는 null
                           propIconPosition = "left", // 아이콘 위치 (왼쪽, 오른쪽)
                           propHoverDisabled = false, // hover를 막는 기능 (기본값 false, 즉 hover 활성화)
                           propGap = "10px", // 아이콘과 텍스트 사이의 간격
                           propOnClick, // 클릭 시 호출될 함수
                       }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    const buttonStyle = {
        width: propWidth,
        height: propHeight,
        backgroundColor: isHovered ? propHoverColor : propColor, // hover 시 배경색 변경
        border: propBorder,
        borderRadius: propBorderRadius,
        fontSize: propFontSize,
        fontWeight: propFontWeight,
        display: "flex",
        justifyContent: "center", // 아이콘과 텍스트를 가운데 정렬
        alignItems: "center", // 수직 가운데 정렬
        transition: "background-color 0.3s ease, color 0.3s ease",
        cursor: "pointer",
        padding: "0", // 패딩 없앰
    };

    const textStyle = {
        color: isHovered ? propHoverTextColor : propTextColor, // hover 시 텍스트 색상 변경
    };

    const handleMouseEnter = () => {
        if (!propHoverDisabled) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        if (!propHoverDisabled) {
            setIsHovered(false);
        }
    };

    return (
        <button
            className={`${styles.buttoncomponent} ${propClassName}`}
            style={buttonStyle}
            type={propType}
            onClick={propOnClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* 아이콘이 왼쪽에 있는 경우 */}
            {propIcon && propIconPosition === "left" && (
                <span style={{ marginRight: propGap, display: "flex", alignItems: "center" }}>
                    {propIcon}
                </span>
            )}

            {/* 텍스트 */}
            <span style={textStyle}> {/* 텍스트 스타일 적용 */}
                {propText}
            </span>

            {/* 아이콘이 오른쪽에 있는 경우 */}
            {propIcon && propIconPosition === "right" && (
                <span style={{ marginLeft: propGap, display: "flex", alignItems: "center" }}>
                    {propIcon}
                </span>
            )}
        </button>
    );
};

RegularButton.propTypes = {
    propClassName: PropTypes.string,
    propText: PropTypes.string,
    propType: PropTypes.oneOf(["button", "submit", "reset"]),
    propWidth: PropTypes.any,
    propHeight: PropTypes.any,
    propFontSize: PropTypes.any,
    propFontWeight: PropTypes.any,
    propColor: PropTypes.string,
    propHoverColor: PropTypes.string,
    propTextColor: PropTypes.string,
    propHoverTextColor: PropTypes.string,
    propBorder: PropTypes.string,
    propBorderRadius: PropTypes.any,
    propIcon: PropTypes.element,
    propIconPosition: PropTypes.oneOf(["left", "right"]),
    propGap: PropTypes.string,
    propHoverDisabled: PropTypes.bool,
    propOnClick: PropTypes.func,
};

export default RegularButton;
