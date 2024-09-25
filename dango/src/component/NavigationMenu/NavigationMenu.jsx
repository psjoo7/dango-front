import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";  // useNavigate 훅 임포트
import styles from "./NavigationMenu.module.css";

const NavigationMenu = ({
                            propClassName = "",
                            propImgFileName = "HeadHome.svg",  // 기본 파일명
                            propAltText = "HeadHome",
                            propOnClick,
                            propNavigatePath = "/"
                        }) => {
    const navigate = useNavigate();  // 페이지 이동을 위한 useNavigate 훅 사용

    const handleClick = () => {
        if (propOnClick) {
            propOnClick();  // prop으로 전달된 onClick 함수 호출
        } else {
            navigate(propNavigatePath);  // 지정된 경로로 이동
        }
    };

    return (
        <img
            src={`${process.env.PUBLIC_URL}/assets/images/NavigationMenu/${propImgFileName}`}  // 이미지 파일명만 프롭으로 설정
            alt={propAltText}  // alt 텍스트를 프롭으로 설정
            onClick={handleClick}  // 클릭 이벤트 핸들러
            style={{ cursor: "pointer" }}  // 클릭 가능한 포인터 커서 스타일 적용
            className={propClassName}  // 추가적인 CSS 클래스
        />
    );
};

NavigationMenu.propTypes = {
    propClassName: PropTypes.string,  // 추가적인 CSS 클래스 prop
    propImgFileName: PropTypes.string,  // 이미지 파일명 prop
    propAltText: PropTypes.string,  // alt 텍스트 prop
    propOnClick: PropTypes.func,  // 클릭 시 호출할 함수
    propNavigatePath: PropTypes.string,  // navigate 경로 prop
};

export default NavigationMenu;
