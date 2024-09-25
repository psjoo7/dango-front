import styles from "./MyProfileForm.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../component/Text/RegularText/RegularText";
import RegularButton from "../../../component/Buttons/RegularButton/RegularButton";
import SideBar from "../../../component/SideBar/SideBar";
import MyProfileCard1 from "./MyProfileCard1/MyProfileCard1";
import MyProfileCard2 from "./MyProfileCard2/MyProfileCard2";
import { useNavigate } from "react-router-dom"; // useNavigate 추가

const MyProfileForm = ({
                           propUserName = "??",
                           propEmail = "honggildong@example.com",
                           propJapaneseLevel = "N2",
                           propBadge1Text = "칭호1",
                           propBadge2Text = "칭호2",
                           propBadge3Text = "칭호3",
                           propBadge1Name = "Badge1",  // Badge1 이미지 파일 이름
                           propBadge2Name = "Badge2",  // Badge2 이미지 파일 이름
                           propBadge3Name = "Badge3",  // Badge3 이미지 파일 이름
                           propBottomLevelText = "N3",  // 학습률 텍스트
                           propBottomAttendanceText = "34일째",  // 출석률 텍스트
                       }) => {
    const navigate = useNavigate(); // useNavigate 훅 추가

    const handleGameClick = () => {
        navigate("/game"); // 게임 버튼 클릭 시 '/game' 경로로 이동
    };

    return (
        <div className={styles.page}>
            <SideBar />

            <div className={styles.content}>
                {/* Top Card (MyProfileCard1) */}
                <MyProfileCard1
                    propUserName={propUserName}
                    propEmail={propEmail}
                    propJapaneseLevel={propJapaneseLevel}
                    propBadge1Text={propBadge1Text}
                    propBadge2Text={propBadge2Text}
                    propBadge3Text={propBadge3Text}
                    propBadge1Name={propBadge1Name}  // Badge1 이미지
                    propBadge2Name={propBadge2Name}  // Badge2 이미지
                    propBadge3Name={propBadge3Name}  // Badge3 이미지
                />

                <div className={styles.bottom}>
                    <div className={styles.bottomGameInfo}>
                        <RegularText
                            propText={"게임 한판 어떠신가요?"}
                            propFontSize={"35px"}
                            propFontWeight={"900"}
                        />

                        <RegularText
                            propText={"게임으로 재미있게 일본어를 공부하며,\n도전 과제를 완료하면 뱃지도 얻을 수 있습니다."}
                            propFontSize={"16px"}
                            propFontWeight={"700"}
                            propColor={"var(--color-black)"}
                            propLineHeight="1.7"
                        />

                        <RegularButton
                            propText="게임 하러 가기"
                            propFontSize={"25px"}
                            propWidth="293px"
                            propHeight="78px"
                            propColor="var(--color-main)"
                            propHoverColor="var(--color-main)"
                            propTextColor="var(--color-black)"
                            propHoverTextColor="var(--color-black)"
                            propBorderRadius="15px"
                            propBorder="4px solid var(--color-black)"
                            propIcon={
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/images/MyProfilePage/GameBlack.svg`}
                                    alt="Game Icon"
                                />
                            }
                            propClassName={styles.buttonGame}
                            propOnClick={handleGameClick} // 버튼 클릭 시 경로 이동
                        />
                    </div>

                    {/* Bottom Cards (MyProfileCard2) */}
                    <div className={styles.bottomCard2}>
                        <MyProfileCard2
                            propLearningRateText="학습률"
                            propBottomLevelText={propBottomLevelText}  // 학습률 텍스트
                        />

                        <MyProfileCard2
                            propLearningRateText="출석률"
                            propBottomLevelText={propBottomAttendanceText}  // 출석률 텍스트
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

MyProfileForm.propTypes = {
    propUserName: PropTypes.string,
    propEmail: PropTypes.string,
    propJapaneseLevel: PropTypes.string,
    propBadge1Text: PropTypes.string,
    propBadge2Text: PropTypes.string,
    propBadge3Text: PropTypes.string,
    propBadge1Name: PropTypes.string,
    propBadge2Name: PropTypes.string,
    propBadge3Name: PropTypes.string,
    propBottomLevelText: PropTypes.string,  // 학습률 텍스트
    propBottomAttendanceText: PropTypes.string,  // 출석률 텍스트
};

export default MyProfileForm;
