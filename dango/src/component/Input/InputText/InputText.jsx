import { useMemo, useState } from "react";
import PropTypes from "prop-types";
import styles from "./InputText.module.css";

const InputText = ({
  className = "",
  propLabelText,
  propLabelPadding,
  propLabelFontSize,
  propLabelFontWeight,
  propLabelColor = "var(--color-black)",
  propWidth,
  propHeight,
  propBorder,
  propBorderRadius,
  propInputFontSize,
  propInputFontWeight,
  propInputFontColor = "var(--color-black)",
  propPlaceholder, // placeholder prop
  propValue, // propValue
  propOnChange, // propOnChange
  propType = "text", // 기본값을 'text'로 설정한 type prop
  name,
}) => {
  // 상태로 placeholder 제어
  const [placeholder, setPlaceholder] = useState(propPlaceholder);

  const inputLabelStyle = useMemo(() => {
    return {
      padding: propLabelPadding,
      fontSize: propLabelFontSize,
      fontWeight: propLabelFontWeight,
      color: propLabelColor,
    };
  }, [
    propLabelPadding,
    propLabelFontSize,
    propLabelFontWeight,
    propLabelColor,
  ]);

  const inputStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      border: propBorder,
      borderRadius: propBorderRadius,
      fontSize: propInputFontSize, // 입력 필드 안의 텍스트 크기 적용
      fontWeight: propInputFontWeight, // 입력 필드 안의 텍스트 굵기 적용
      color: propInputFontColor, // 입력 필드 안의 텍스트 색상 적용
    };
  }, [
    propWidth,
    propHeight,
    propBorder,
    propBorderRadius,
    propInputFontSize,
    propInputFontWeight,
    propInputFontColor,
  ]);

  return (
    <div className={[styles.inputComponent, className].join(" ")}>
      {propLabelText && (
        <div className={styles.inputLabel} style={inputLabelStyle}>
          {propLabelText}
        </div>
      )}
      <input
        className={styles.inputText}
        type={propType} // propType으로 변경
        style={inputStyle}
        placeholder={placeholder} // 상태로 제어되는 placeholder
        name={name} // name 속성 추가
        value={propValue} // propValue로 변경
        onChange={propOnChange} // propOnChange로 변경
        onFocus={() => setPlaceholder("")} // 포커스 시 placeholder 제거
        onBlur={() => setPlaceholder(propPlaceholder)} // 포커스 해제 시 placeholder 복원
      />
    </div>
  );
};

InputText.propTypes = {
  className: PropTypes.string,
  propLabelText: PropTypes.string, // 라벨이 있을 수도 없을 수도 있음
  propPlaceholder: PropTypes.string, // placeholder 속성 추가
  propValue: PropTypes.string, // propValue로 변경
  propOnChange: PropTypes.func, // propOnChange로 변경
  propType: PropTypes.string, // 추가된 propType, 기본값은 'text'
  propName: PropTypes.string,
  name: PropTypes.string,

  /** Label Style props */
  propLabelPadding: PropTypes.string,
  propLabelFontSize: PropTypes.string,
  propLabelFontWeight: PropTypes.string,
  propLabelColor: PropTypes.string,

  /** Input Style props */
  propWidth: PropTypes.string,
  propHeight: PropTypes.string,
  propBorder: PropTypes.string,
  propBorderRadius: PropTypes.string,
  propInputFontSize: PropTypes.string,
  propInputFontWeight: PropTypes.string,
  propInputFontColor: PropTypes.string,
};

export default InputText;
