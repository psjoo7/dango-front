import React, { useState, useEffect } from "react";
import styles from "./MyProfileCard1.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import DoubleText from "../../../../component/Text/DoubleText/DoubleText";
import ProfileImage from "../../../ProfileImage/ProfileImage";
import Badge from "../Badge/Badge";

const MyProfileCard1 = ({
                            propUserName = "??",        // 사용자 이름 프롭
                            propEmail = "이메일 자리입니다.", // 이메일 프롭
                            propJapaneseLevel = "N4",   // 일본어 레벨 프롭
                            propBadge1Text = "칭호1",   // 첫 번째 뱃지 텍스트
                            propBadge2Text = "칭호2",   // 두 번째 뱃지 텍스트
                            propBadge3Text = "칭호3",   // 세 번째 뱃지 텍스트
                            propBadge1Name = "Badge1",  // 첫 번째 뱃지 이름
                            propBadge2Name = "Badge2",  // 두 번째 뱃지 이름
                            propBadge3Name = "Badge3",  // 세 번째 뱃지 이름
                            propOnImageClick,           // 프로필 이미지 클릭 이벤트 핸들러
                            propImageCode = "9_w"       // 프로필 이미지 코드
                        }) => {
    const [userNationality, setUserNationality] = useState("Japan");

    useEffect(() => {
        setUserNationality("Korea");
    }, []); // 컴포넌트가 처음 렌더링될 때만 실행

    return (
        <div className={styles.card}>
            <div className={styles.profile}>
                <ProfileImage
                    propImageCode={propImageCode}  // 상위에서 전달된 이미지 코드
                    propImageWidth={"205px"}
                    propImageHeight={"205px"}
                    propOnImageClick={propOnImageClick}  // 이미지 클릭 이벤트 처리기 전달
                />
                <div className={styles.profileText}>
                    <div className={styles.topText}>
                        <DoubleText
                            propText1={propUserName}
                            propText2={userNationality === "Korea" ? "님" : "様"} // 한국어 또는 일본어로 동적 변경
                            propText1FontSize={"60px"}
                            propText2FontSize={"60px"}
                            propText1FontWeight={"700"}
                            propText2FontWeight={"700"}
                        />

                        <RegularText
                            propText={propEmail}
                            propFontSize={"20px"}
                            propFontWeight={"500"}
                            propColor={"var(--color-gray3)"}
                        />
                    </div>

                    <DoubleText
                        propText1={userNationality === "Korea" ? "일본어 레벨:" : "日本語レベル:"} // 한국어 또는 일본어로 동적 변경
                        propText2={propJapaneseLevel}
                        propText1FontSize={"30px"}
                        propText2FontSize={"30px"}
                        propText1FontWeight={"700"}
                        propText2FontWeight={"700"}
                        propText1Color={"var(--color-white)"}
                        propText2Color={"var(--color-white)"}
                    />
                </div>
            </div>

            <div className={styles.badges}>
                <div className={styles.badge1}>
                    <Badge propBadgeName={propBadge1Name} />
                    <RegularText
                        propText={propBadge1Text}
                        propFontSize={"22px"}
                        propFontWeight={"bold"}
                        propColor={"var(--color-white)"}
                    />
                </div>

                <div className={styles.badge2}>
                    <Badge propBadgeName={propBadge2Name} />
                    <RegularText
                        propText={propBadge2Text}
                        propFontSize={"22px"}
                        propFontWeight={"bold"}
                        propColor={"var(--color-white)"}
                    />
                </div>

                <div className={styles.badge3}>
                    <Badge propBadgeName={propBadge3Name} />
                    <RegularText
                        propText={propBadge3Text}
                        propFontSize={"22px"}
                        propFontWeight={"bold"}
                        propColor={"var(--color-white)"}
                    />
                </div>
            </div>
        </div>
    );
};

MyProfileCard1.propTypes = {
    propUserName: PropTypes.string,       // 사용자 이름 프롭
    propEmail: PropTypes.string,          // 이메일 프롭
    propJapaneseLevel: PropTypes.string,  // 일본어 레벨 프롭
    propBadge1Text: PropTypes.string,     // 첫 번째 뱃지 텍스트
    propBadge2Text: PropTypes.string,     // 두 번째 뱃지 텍스트
    propBadge3Text: PropTypes.string,     // 세 번째 뱃지 텍스트
    propBadge1Name: PropTypes.string,     // 첫 번째 뱃지 이름
    propBadge2Name: PropTypes.string,     // 두 번째 뱃지 이름
    propBadge3Name: PropTypes.string,     // 세 번째 뱃지 이름
    propOnImageClick: PropTypes.func.isRequired, // 프로필 이미지 클릭 핸들러 프롭
    propImageCode: PropTypes.string.isRequired   // 프로필 이미지 코드
};

export default MyProfileCard1;
