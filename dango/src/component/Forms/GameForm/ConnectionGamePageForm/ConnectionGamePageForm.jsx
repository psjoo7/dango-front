import ConnectionGameTop from "./ConnectionGameTop/ConnectionGameTop";
import SideBar from "../../../../component/SideBar/SideBar";
import styles from "./ConnectionGamePageForm.module.css";
import CharacterMy from "../CharacterMy/CharacterMy";
import CharacterPartner from "../CharacterPartner/CharacterPartner";
import ConnectionGameMid from "./ConnectionGameMid/ConnectionGameMid";
import PropTypes from "prop-types";

const ConnectionGamePageForm = ({
                                    propCount = "5",                     // 첫 번째 텍스트 (기본값 5)
                                    propFirstBoxText = "토끼",           // 첫 번째 박스 텍스트 (기본값 토끼)
                                    propProfileImageCode = "5_w",        // 프로필 이미지 코드 (기본값 5_w)
                                    propShowGameLose = false,            // GameLose 이미지 표시 여부 (기본값 false)
                                    propShowProfile = true,              // 프로필 이미지 표시 여부 (기본값 true)
                                    propCharacterCodeMy = "9_w",         // CharacterMy 캐릭터 이미지 코드 (기본값 9_w)
                                    propShowHeartMy = true,              // CharacterMy 하트 이미지 표시 여부
                                    propShowRainMy = false,              // CharacterMy 레인 이미지 표시 여부
                                    propMidText = "중간 단계"            // 중간 텍스트 (기본값 중간 단계)
                                }) => {
    return (
        <div className={styles.backGround}>
            <SideBar />
            <div className={styles.contents}>
                {/* ConnectionGameTop에 동적 prop 전달 */}
                <ConnectionGameTop
                    propCount={propCount}                     // 카운트 텍스트
                    propFirstBoxText={propFirstBoxText}       // 첫 번째 박스 텍스트
                    propProfileImageCode={propProfileImageCode} // 프로필 이미지 코드
                    propShowGameLose={propShowGameLose}       // GameLose 이미지 표시 여부
                    propShowProfile={propShowProfile}         // 프로필 이미지 표시 여부
                />

                <div className={styles.bottom}>
                    {/* CharacterPartner에 동적 prop 전달 */}
                    <CharacterPartner
                        propPartnerUserName={"Ai"}            // 파트너 유저 이름
                        propShowHeart={false}
                        propShowRain={false}
                    />

                    {/* ConnectionGameMid에 동적 prop 전달 */}
                    <div className={styles.mid}>
                        <ConnectionGameMid
                            propText={propMidText}             // 중간 텍스트
                        />
                    </div>

                    {/* CharacterMy에 동적 prop 전달 */}
                    <CharacterMy
                        propCharacterCode={propCharacterCodeMy} // CharacterMy 캐릭터 이미지 코드
                        propShowHeart={propShowHeartMy}       // 하트 이미지 표시 여부
                        propShowRain={propShowRainMy}         // 레인 이미지 표시 여부
                    />
                </div>
            </div>
        </div>
    );
};

ConnectionGamePageForm.propTypes = {
    propCount: PropTypes.string,           // 첫 번째 텍스트 (카운트) Prop
    propFirstBoxText: PropTypes.string,    // 첫 번째 박스 텍스트 Prop
    propProfileImageCode: PropTypes.string, // 프로필 이미지 코드 Prop
    propShowGameLose: PropTypes.bool,      // GameLose 이미지 표시 여부 Prop
    propShowProfile: PropTypes.bool,       // 프로필 이미지 표시 여부 Prop
    propCharacterCodeMy: PropTypes.string, // CharacterMy 캐릭터 이미지 코드 Prop
    propShowHeartMy: PropTypes.bool,       // CharacterMy 하트 이미지 표시 여부 Prop
    propShowRainMy: PropTypes.bool,        // CharacterMy 레인 이미지 표시 여부 Prop
    propMidText: PropTypes.string          // 중간 텍스트 Prop
};

export default ConnectionGamePageForm;
