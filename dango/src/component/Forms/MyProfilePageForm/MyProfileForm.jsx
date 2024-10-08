import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./MyProfileForm.module.css";
import RegularText from "../../../component/Text/RegularText/RegularText";
import RegularButton from "../../../component/Buttons/RegularButton/RegularButton";
import SideBar from "../../../component/SideBar/SideBar";
import MyProfileCard1 from "./MyProfileCard1/MyProfileCard1";
import MyProfileCard2 from "./MyProfileCard2/MyProfileCard2";
import CharacterModalForm from "../CharacterModalForm/CharacterModalForm"; // 모달 컴포넌트 임포트

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
                           propBottomAttendanceText = "34",  // 출석률 텍스트
                           propBottomLevelRate = 60,  // 학습률 값 상위에서 전달
                           propBottomAttendanceRate = 45,  // 출석률 값 상위에서 전달
                           propInitialImageCode = "1_w",  // 상위에서 받은 이미지 코드
                       }) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
    const [characterList, setCharacterList] = useState([]); // 캐릭터 리스트 상태 관리
    const [currentImageCode, setCurrentImageCode] = useState(propInitialImageCode); // 현재 프로필 이미지 코드 상태 관리
    const [userNationality, setUserNationality] = useState("Japan");

    // 초기 이미지 코드가 변경될 때마다 상태 업데이트
    useEffect(() => {
        setCurrentImageCode(propInitialImageCode);
        setUserNationality("Korea");
    }, [propInitialImageCode]);

    // 숫자만 추출하는 함수
    const extractNumber = (text) => {
        const match = text.match(/\d+/); // 정규 표현식을 사용하여 숫자만 추출
        return match ? match[0] : ''; // 매칭된 값이 있으면 첫 번째 결과를 반환
    };

    // 모달 열기 함수
    const openModal = () => {
        const characters = [
            ["1_w", "캐릭터 1"],
            ["2_w", "캐릭터 2"],  // 한국어 캐릭터 이름
            ["3_w", "캐릭터 3"],
            ["4_w", "캐릭터 4"],
            ["5_w", "캐릭터 5"],
            ["6_w", "캐릭터 6"],
            ["7_w", "캐릭터 7"],
            ["8_w", "캐릭터 8"],
            ["9_w", "캐릭터 9"],
            ["10_w", "캐릭터 10"],
            ["11_w", "캐릭터 11"],
            ["12_w", "캐릭터 12"],
            ["13_w", "캐릭터 13"],
            ["14_w", "캐릭터 14"],
            ["15_w", "캐릭터 15"]
        ];

        // 일본어로 표시할 경우 캐릭터 이름을 변경
        if (userNationality === "Japan") {
            characters[0][1] = "キャラクター 1";
            characters[1][1] = "キャラクター 2";
            characters[2][1] = "キャラクター 3";
            characters[3][1] = "キャラクター 4";
            characters[4][1] = "キャラクター 5";
            characters[5][1] = "キャラクター 6";
            characters[6][1] = "キャラクター 7";
            characters[7][1] = "キャラクター 8";
            characters[8][1] = "キャラクター 9";
            characters[9][1] = "キャラクター 10";
            characters[10][1] = "キャラクター 11";
            characters[11][1] = "キャラクター 12";
            characters[12][1] = "キャラクター 13";
            characters[13][1] = "キャラクター 14";
            characters[14][1] = "キャラクター 15";
        }

        setCharacterList(characters); // 캐릭터 리스트를 상태에 저장
        setIsModalOpen(true); // 모달 열기
    };

    // 모달 닫기 함수
    const closeModal = () => {
        setIsModalOpen(false);
    };

    // 모달에서 선택한 이미지 코드를 받아서 상태 업데이트
    const handleImageSelect = (selectedImageCode) => {
        setCurrentImageCode(selectedImageCode); // 새로운 이미지 코드로 상태 업데이트
        closeModal(); // 모달 닫기
    };

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
                    propOnImageClick={openModal}  // 이미지 클릭 시 모달 열기
                    propImageCode={currentImageCode}  // 현재 이미지 코드 전달
                />

                <div className={styles.bottom}>
                    <div className={styles.bottomGameInfo}>
                        <RegularText
                            propText={
                                userNationality === "Korea" ? "게임 한판 어떠신가요?" : "ゲームをしましょうか？"  // 한국어 또는 일본어로 동적 변경
                            }
                            propFontSize={userNationality === "Korea" ? "35px":"33px"}
                            propFontWeight={"900"}
                        />

                        <RegularText
                            propText={
                                userNationality === "Korea"
                                    ? "게임으로 재미있게 일본어를 공부하며,\n도전 과제를 완료하면 뱃지도 얻을 수 있습니다."
                                    : "ゲームで楽しく日本語を学び、\nチャレンジをクリアしてバッジを獲得しましょう。"  // 한국어 또는 일본어로 동적 변경
                            }
                            propFontSize={"16px"}
                            propFontWeight={"700"}
                            propColor={"var(--color-black)"}
                            propLineHeight="1.7"
                        />

                        <RegularButton
                            propText={userNationality === "Korea" ? "게임 하러 가기" : "ゲームスタート"}  // 한국어 또는 일본어로 동적 변경
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
                            propLearningRateText={userNationality === "Korea" ? "학습률" : "学習率"}  // 한국어 또는 일본어로 동적 변경
                            propLevelText={propBottomLevelText}  // 학습률 텍스트
                            propProgress={propBottomLevelRate}  // 상위에서 받은 학습률 값
                        />

                        <MyProfileCard2
                            propLearningRateText={userNationality === "Korea" ? "출석률" : "出席率"}  // 한국어 또는 일본어로 동적 변경
                            propLevelText={userNationality === "Korea" ? `${propBottomAttendanceText}일째` : `${propBottomAttendanceText}日目`}  // 한국어 또는 일본어로 동적 변경
                            propProgress={propBottomAttendanceRate}  // 상위에서 받은 출석률 값
                        />
                    </div>
                </div>
            </div>

            {/* 모달이 열려 있으면 CharacterModalForm을 렌더링 */}
            {isModalOpen && (
                <CharacterModalForm
                    propOnClose={closeModal}
                    propCharacterList={characterList} // 2열짜리 캐릭터 리스트 전달
                    propCenterImageCode={currentImageCode}  // 현재 이미지 코드를 모달의 초기 이미지로 전달
                    propOnImageSelect={handleImageSelect}  // 모달에서 선택한 이미지를 받는 핸들러
                />
            )}
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
    propBottomLevelRate: PropTypes.number.isRequired,  // 학습률 값
    propBottomAttendanceRate: PropTypes.number.isRequired,  // 출석률 값
    propInitialImageCode: PropTypes.string.isRequired,  // 상위에서 받은 초기 이미지 코드
};

export default MyProfileForm;
