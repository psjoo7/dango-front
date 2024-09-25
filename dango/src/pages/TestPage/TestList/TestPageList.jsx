import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TestPageList.module.css";
import RegularText from "../../../component/Text/RegularText/RegularText";

const TestPageList = ({ className = "" }) => {
    const [isChecked, setIsChecked] = useState(false);  // 클릭 상태를 관리

    const handleClick = () => {
        setIsChecked(!isChecked);  // 클릭할 때마다 상태를 토글
    };

    return (
        <div
            className={`${styles.testList} ${isChecked ? styles.checked : ""}`}  // 클릭 상태에 따라 클래스 변경
            onClick={handleClick}  // 클릭 시 상태 변경
        >
            <RegularText
                text={"선택 1"}
                propFontSize={"30px"}
                propColor={isChecked ? "black" : "var(--color-gray2)"}  // 체크된 상태에서 검은색으로 변경
            />
            <div className={`${styles.circle} ${isChecked ? styles.circleChecked : ""}`}>
                <div className={`${styles.check} ${isChecked ? styles.checkVisible : ""}`}></div>  {/* 체크 표시 스타일 적용 */}
            </div>
        </div>
    );
};

TestPageList.propTypes = {
    className: PropTypes.string,
};

export default TestPageList;
