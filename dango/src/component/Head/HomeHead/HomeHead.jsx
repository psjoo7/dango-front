import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";  // useNavigate 훅 임포트
import styles from "./HomeHead.module.css";

const HomeHead = ({ className = "" }) => {
    const navigate = useNavigate();  // 페이지 이동을 위한 useNavigate 훅 사용

    const handleClick = () => {
        navigate("/");  // 클릭 시 홈 경로로 이동
    };

    return (
        <img
            src={`${process.env.PUBLIC_URL}/assets/images/Head/HeadHome.svg`}
            alt="HeadHome"
            onClick={handleClick}  // 클릭 이벤트 핸들러 추가
            style={{ cursor: "pointer" }}  // 클릭 가능한 포인터 커서 스타일 적용
        />
    );
};

HomeHead.propTypes = {
    className: PropTypes.string,  // 추가적인 CSS 클래스 prop
};

export default HomeHead;
