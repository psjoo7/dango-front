import React from "react";
import PropTypes from "prop-types";
import styles from "./TestListElement.module.css";
import DoubleText from "../../../../component/Text/DoubleText/DoubleText";

const TestListElement = ({ className = "",
                             propChoiceNumber,
                             propChoice,
                             propIsSelected,
                             propOnClick }) => {
    return (
        <div
            className={`${styles.testList} ${propIsSelected ? styles.checked : ""}`}  // 선택 상태에 따라 클래스 변경
            onClick={propOnClick}  // 클릭 시 상위 컴포넌트로 전달
        >
            <DoubleText
                propText1={propChoiceNumber}  // 동적으로 전달받은 값 사용
                propText2={propChoice}        // 동적으로 전달받은 값 사용
                propText1FontSize={"30px"}
                propText2FontSize={"30px"}
                propText1Color={propIsSelected ? "black" : "var(--color-gray2)"}  // 선택된 상태에서 검은색으로 변경
                propText2Color={propIsSelected ? "black" : "var(--color-gray2)"}  // 선택된 상태에서 검은색으로 변경
            />
            <div className={`${styles.circle} ${propIsSelected ? styles.circleChecked : ""}`}>
                <div className={`${styles.check} ${propIsSelected ? styles.checkVisible : ""}`}></div>
            </div>
        </div>
    );
};

TestListElement.propTypes = {
    className: PropTypes.string,
    propChoiceNumber: PropTypes.string.isRequired,
    propChoice: PropTypes.string.isRequired,
    propIsSelected: PropTypes.bool.isRequired,  // 선택된 상태를 관리하는 Prop
    propOnClick: PropTypes.func.isRequired,     // 클릭 시 상위 컴포넌트로 전달되는 함수
};

export default TestListElement;
