import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const DynamicText = ({
  propText,
  propMaxFontSize = 42, // 최대 폰트 크기
  propMinFontSize = 12, // 최소 폰트 크기
  propFontWeight = "700", // 폰트 굵기
  propColor = "black", // 폰트 색상
  propLineHeight = "1", // 라인 높이
  propMaxLength = 6, // 폰트 크기 조정을 시작할 기준 길이 (기본값 6)
  propClassName = "", // 상위 컴포넌트에서 받을 클래스 이름
}) => {
  const [fontSize, setFontSize] = useState(`${propMaxFontSize}px`);
  const textRef = useRef(null);

  useEffect(() => {
    const adjustFontSize = () => {
      const textLength = propText.length;

      // 텍스트가 propMaxLength 이상일 때만 폰트 크기 조정
      if (textLength > propMaxLength) {
        const newSize = Math.max(
          propMaxFontSize - (textLength - propMaxLength) * 3,
          propMinFontSize
        );
        setFontSize(`${newSize}px`);
      } else {
        // 텍스트가 기준 길이 이하일 경우 최대 폰트 크기 유지
        setFontSize(`${propMaxFontSize}px`);
      }
    };

    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);

    return () => window.removeEventListener("resize", adjustFontSize);
  }, [propText, propMaxFontSize, propMinFontSize, propMaxLength]);

  // 텍스트 스타일 적용
  const textStyle = {
    fontSize,
    fontWeight: propFontWeight,
    color: propColor,
    lineHeight: propLineHeight,
  };

  return (
    <div ref={textRef} style={textStyle} className={propClassName}>
      {propText}
    </div>
  );
};

DynamicText.propTypes = {
  propText: PropTypes.string.isRequired,
  propMaxFontSize: PropTypes.number,
  propMinFontSize: PropTypes.number,
  propFontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  propColor: PropTypes.string,
  propLineHeight: PropTypes.string,
  propMaxLength: PropTypes.number, // 폰트 크기 조정을 시작할 기준 길이를 프롭으로 받음
  propClassName: PropTypes.string, // 상위에서 클래스 이름을 전달받음
};

export default DynamicText;
