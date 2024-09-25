import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./RadioButton.module.css";

const RadioButton = ({
                         className = "",
                         propLabel,               // 라벨 텍스트
                         propLabelFontSize = "18px",  // 텍스트 크기
                         propLabelFontWeight = "500",  // 텍스트 굵기
                         propLabelColor = "var(--color-black)",    // 텍스트 색상
                         propGap = "5px",            // 버튼과 텍스트 사이의 간격 (마진을 없애기 위해 기본값을 0px로 설정)
                         propButtonSize = "15px",     // 버튼 크기
                         propButtonBorder = "1px solid var(--color-gray2)",  // 버튼의 border 설정
                         propName = "radioGroup",     // 라디오 버튼 그룹 이름 (중복 체크 방지)
                         propValue,                   // 라디오 버튼의 value 값
                         propChecked,                 // 라디오 버튼이 체크되어 있는지 여부
                         propOnChange,                // 라디오 버튼의 변경 이벤트 핸들러
                     }) => {
    const radioStyle = useMemo(() => {
        return {
            width: propButtonSize,
            height: propButtonSize,
            border: propButtonBorder,
        };
    }, [propButtonSize, propButtonBorder]);

    const labelStyle = useMemo(() => {
        return {
            fontSize: propLabelFontSize,
            fontWeight: propLabelFontWeight,
            color: propLabelColor,
            marginLeft: propGap,  // 버튼과 텍스트 사이의 간격 설정 (기본 0px)
        };
    }, [propLabelFontSize, propLabelFontWeight, propLabelColor, propGap]);

    return (
        <div className={[styles.radioButtonContainer, className].join(" ")}>
            <input
                className={styles.radioButton}
                type="radio"
                name={propName}
                value={propValue}
                checked={propChecked}
                onChange={propOnChange}
                style={radioStyle}   // 버튼 크기 및 스타일 적용
            />
            <label className={styles.label} style={labelStyle}>
                {propLabel}
            </label>
        </div>
    );
};

RadioButton.propTypes = {
    className: PropTypes.string,
    propLabel: PropTypes.string.isRequired,    // 라벨 텍스트
    propLabelFontSize: PropTypes.string,       // 텍스트 크기
    propLabelFontWeight: PropTypes.string,     // 텍스트 굵기
    propLabelColor: PropTypes.string,          // 텍스트 색상
    propGap: PropTypes.string,                 // 버튼과 텍스트 사이의 간격
    propButtonSize: PropTypes.string,          // 버튼 크기
    propButtonBorder: PropTypes.string,        // 버튼 border 설정
    propCheckedColor: PropTypes.string,        // 체크된 라디오 버튼 색상
    propName: PropTypes.string,                // 라디오 버튼 그룹 이름
    propValue: PropTypes.string.isRequired,    // 라디오 버튼의 value 값
    propChecked: PropTypes.bool,               // 라디오 버튼이 체크되어 있는지 여부
    propOnChange: PropTypes.func.isRequired,   // 라디오 버튼 변경 이벤트 핸들러
};

export default RadioButton;
