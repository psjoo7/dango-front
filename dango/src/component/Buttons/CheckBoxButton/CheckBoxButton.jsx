import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./CheckBoxButton.module.css";

const CheckBoxButton = ({
                            className = "",
                            propLabelText = "이메일 저장",
                            propFontSize = "16px",
                            propFontWeight = "normal",
                            propFontColor = "var(--color-black)",
                            propLabelPadding = "0",
                            propCheckboxWidth = "20px",
                            propCheckboxHeight = "20px",
                            propCheckboxBorder = "1px solid #000",
                            propCheckboxBorderRadius = "4px",  // 기본 border-radius 추가
                        }) => {
    const checkboxLabelStyle = useMemo(() => {
        return {
            fontSize: propFontSize,
            fontWeight: propFontWeight,
            color: propFontColor,
            padding: propLabelPadding,
        };
    }, [propFontSize, propFontWeight, propFontColor, propLabelPadding]);

    const checkboxStyle = useMemo(() => {
        return {
            width: propCheckboxWidth,
            height: propCheckboxHeight,
            border: propCheckboxBorder,
            borderRadius: propCheckboxBorderRadius,  // border-radius 적용
        };
    }, [propCheckboxWidth, propCheckboxHeight, propCheckboxBorder, propCheckboxBorderRadius]);

    return (
        <div className={[styles.checkboxComponent, className].join(" ")}>
            <input
                className={styles.checkbox}
                type="checkbox"
                style={checkboxStyle}
            />
            <div className={styles.checkboxLabel} style={checkboxLabelStyle}>
                {propLabelText}
            </div>
        </div>
    );
};

CheckBoxButton.propTypes = {
    className: PropTypes.string,
    propLabelText: PropTypes.string, // 라벨 텍스트
    propFontSize: PropTypes.string, // 라벨 폰트 크기
    propFontWeight: PropTypes.string, // 라벨 폰트 굵기
    propFontColor: PropTypes.string, // 라벨 폰트 색상
    propLabelPadding: PropTypes.string, // 라벨 패딩
    propCheckboxWidth: PropTypes.string, // 체크박스 너비
    propCheckboxHeight: PropTypes.string, // 체크박스 높이
    propCheckboxBorder: PropTypes.string, // 체크박스 보더
    propCheckboxBorderRadius: PropTypes.string, // 체크박스 border-radius
};

export default CheckBoxButton;
