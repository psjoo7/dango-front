import React from "react";
import PropTypes from "prop-types";
import styles from "./ImageDoubleText.module.css";

const ImageDoubleText = ({
  propImageSrc,
  propText1,
  propText2,
  propText1FontSize = "var(--font-title3)",
  propText2FontSize = "var(--font-title3)",
  propText1FontWeight = "700",
  propText2FontWeight = "700",
  propText1Color = "var(--color-black)",
  propText2Color = "var(--color-black)",
  propWidth = "174px", // 전체적인 너비
  propHeight = "56px", // 전체적인 높이
  propBorder = "2px solid var(--color-black)", // border 설정
  propBorderRadius = "15px", // border-radius 설정
  propBackgroundColor = "var(--color-white)", // 배경 색상 설정
  propImagePadding = "0px", // 이미지에 대한 패딩
  propText1Padding = "0px", // 첫 번째 텍스트에 대한 패딩
  propText2Padding = "0px", // 두 번째 텍스트에 대한 패딩
  propPadding = "0px", // 전체 컴포넌트의 패딩 설정
  propClassName = "", // 추가적인 클래스명
  propIsImageVisible = true, // 이미지 표시 여부를 제어하는 prop
}) => {
  return (
    <div
      className={[styles.imageDoubleText, propClassName].join(" ")}
      style={{
        width: propWidth,
        height: propHeight,
        border: propBorder,
        borderRadius: propBorderRadius,
        backgroundColor: propBackgroundColor,
        padding: propPadding, // 전체 컴포넌트의 패딩 적용
      }}
    >
      {propIsImageVisible && (
        <img
          src={propImageSrc}
          className={styles.image}
          style={{
            padding: propImagePadding, // 이미지 패딩 적용
          }}
          alt="Content Image"
        />
      )}
      <span
        className={styles.text1}
        style={{
          fontSize: propText1FontSize,
          fontWeight: propText1FontWeight,
          color: propText1Color,
          padding: propText1Padding, // 첫 번째 텍스트 패딩 적용
        }}
      >
        {propText1}
      </span>
      <span
        className={styles.text2}
        style={{
          fontSize: propText2FontSize,
          fontWeight: propText2FontWeight,
          color: propText2Color,
          padding: propText2Padding, // 두 번째 텍스트 패딩 적용
        }}
      >
        {propText2}
      </span>
    </div>
  );
};

ImageDoubleText.propTypes = {
  propImageSrc: PropTypes.string.isRequired, // 이미지 URL
  propText1: PropTypes.string.isRequired, // 첫 번째 텍스트
  propText2: PropTypes.string.isRequired, // 두 번째 텍스트
  propText1FontSize: PropTypes.string, // 첫 번째 텍스트 크기
  propText2FontSize: PropTypes.string, // 두 번째 텍스트 크기
  propText1FontWeight: PropTypes.string, // 첫 번째 텍스트 굵기
  propText2FontWeight: PropTypes.string, // 두 번째 텍스트 굵기
  propText1Color: PropTypes.string, // 첫 번째 텍스트 색상
  propText2Color: PropTypes.string, // 두 번째 텍스트 색상
  propWidth: PropTypes.string, // 전체적인 너비
  propHeight: PropTypes.string, // 전체적인 높이
  propBorder: PropTypes.string, // border 설정
  propBorderRadius: PropTypes.string, // border-radius 설정
  propBackgroundColor: PropTypes.string, // 배경 색상
  propImagePadding: PropTypes.string, // 이미지 패딩
  propText1Padding: PropTypes.string, // 첫 번째 텍스트 패딩
  propText2Padding: PropTypes.string, // 두 번째 텍스트 패딩
  propPadding: PropTypes.string, // 전체 컴포넌트의 패딩
  propClassName: PropTypes.string, // 추가 클래스명
  propIsImageVisible: PropTypes.bool, // 이미지 표시 여부를 제어하는 prop
};

export default ImageDoubleText;
