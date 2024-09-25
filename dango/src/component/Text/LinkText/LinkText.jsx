import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./LinkText.module.css";

const LinkText = ({
                      propUrl,             // URL (내부 또는 외부)
                      propText,            // 링크에 표시할 텍스트
                      propFontWeight = "700",  // 폰트 굵기
                      propFontSize = "16px",   // 폰트 크기
                      propColor = "inherit",   // 링크의 색상
                      propClassName = "",      // 추가적인 CSS 클래스
                      propIsExternal = false,  // 외부 링크 여부
                  }) => {
    const linkStyle = {
        fontWeight: propFontWeight,
        fontSize: propFontSize,
        color: propColor,
        textDecoration: "inherit",  // 기본 밑줄 스타일 유지
        fontFamily: "var(--font-noto-sans)", // 폰트 패밀리 설정
    };

    // 외부 링크일 경우 <a> 태그, 내부 링크일 경우 <Link> 컴포넌트 사용
    return propIsExternal ? (
        <a
            href={propUrl}
            className={[styles.linkText, propClassName].join(" ")}
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"  // 외부 링크의 보안을 위한 설정
        >
            {propText}
        </a>
    ) : (
        <Link
            to={propUrl}
            className={[styles.linkText, propClassName].join(" ")}
            style={linkStyle}
        >
            {propText}
        </Link>
    );
};

LinkText.propTypes = {
    propUrl: PropTypes.string.isRequired,       // 링크 URL
    propText: PropTypes.string.isRequired,      // 링크 텍스트
    propFontWeight: PropTypes.string,           // 텍스트 굵기
    propFontSize: PropTypes.string,             // 텍스트 크기
    propColor: PropTypes.string,                // 텍스트 색상
    propClassName: PropTypes.string,            // 추가적인 클래스명
    propIsExternal: PropTypes.bool,             // 외부 링크 여부를 나타내는 플래그
};

export default LinkText;
