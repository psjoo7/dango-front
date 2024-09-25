import styles from "./ConnectionGameTop.module.css";
import RegularText from "../../../../../component/Text/RegularText/RegularText";
import PropTypes from "prop-types";
import DoubleText from "../../../../../component/Text/DoubleText/DoubleText";
import ProfileImage from "../../../../ProfileImage/ProfileImage";
import { useState } from "react";

const ConnectionGameTop = ({
                               className = "",
                               propCount = "??",             // 첫 번째 텍스트 (기본값 ??)
                               propFirstBoxText = "오리",    // 첫 번째 박스 텍스트 (기본값 오리)
                               propProfileImageCode = "4_w", // 프로필 이미지 코드 (기본값 4_w)
                               propShowGameLose = false,     // GameLose 이미지 표시 여부 (기본값 false)
                               propShowProfile = true        // 프로필 이미지 표시 여부 (기본값 true)
                           }) => {
    // 두 번째 박스 (리본) 입력 필드 값을 관리하는 상태
    const [inputText, setInputText] = useState("");

    // 입력 필드 변경 핸들러
    const handleInputChange = (e) => {
        setInputText(e.target.value);  // 입력된 값으로 상태 업데이트
    };

    return (
        <div className={styles.background}>
            {/* propShowGameLose가 true일 때만 GameLose 이미지 표시 */}
            {propShowGameLose && (
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Game/GameLose.svg`}
                    alt="GameLose"
                />
            )}

            {/* propShowProfile가 true일 때만 프로필 이미지 및 텍스트 표시 */}
            {propShowProfile && (
                <div className={styles.profile}>
                    <ProfileImage
                        propImageHeight={"71px"}
                        propImageWidth={"71px"}
                        propImageCode={propProfileImageCode}  // 동적으로 변경 가능한 이미지 코드
                    />
                    <DoubleText
                        propText1={propCount}          // 동적으로 변경 가능한 카운트 텍스트
                        propText2={"번째"}             // 고정 텍스트 "번째"
                        propText1FontSize={"35px"}
                        propText2FontSize={"35px"}
                    />
                </div>
            )}

            <div className={styles.wrapper}>
                <div className={styles.firstBox}>
                    <RegularText
                        propText={propFirstBoxText}    // 첫 번째 박스 텍스트
                        propFontSize="50px"
                    />
                </div>

                <div className={styles.line}></div>
                {/* 라인 */}

                {/* 두 번째 박스: 인풋 필드를 스타일에 맞게 변환 */}
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputChange}
                    className={styles.secondBox}  // div 스타일을 input에 적용
                    placeholder="정답"
                />

                <div className={styles.line}></div>
                {/* 라인 */}

                {/* 세 번째 박스 */}
                <div className={styles.thirdBox}></div>
            </div>
        </div>
    );
};

ConnectionGameTop.propTypes = {
    className: PropTypes.string,
    propCount: PropTypes.string,           // 첫 번째 텍스트 (카운트) Prop
    propFirstBoxText: PropTypes.string,    // 첫 번째 박스 텍스트 Prop
    propProfileImageCode: PropTypes.string, // 프로필 이미지 코드 Prop
    propShowGameLose: PropTypes.bool,      // GameLose 이미지 표시 여부 Prop
    propShowProfile: PropTypes.bool        // 프로필 이미지 표시 여부 Prop
};

export default ConnectionGameTop;
