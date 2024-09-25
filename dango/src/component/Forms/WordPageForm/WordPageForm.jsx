import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./WordPageForm.module.css";
import WordListElement from "../../Word/WordListElement/WordListElement";
import Head from "../../Head/Head";
import WordListTop from "../../Word/WordListTop/WordListTop";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";
import RegularButton from "../../../component/Buttons/RegularButton/RegularButton";
import { useNavigate } from "react-router-dom"; // useNavigate 임포트


const WordPageForm = () => {
    // 개별 카드의 앞뒤 상태를 관리하는 배열
    const [flipState, setFlipState] = useState(
        Array(20).fill(false) // 20개의 카드가 모두 앞면을 보고 있도록 초기화
    );

    const navigate = useNavigate(); // useNavigate 훅 사용

    // 네비게이트 함수 추가 (버튼 클릭 시 /word_test 페이지로 이동)
    const navigateToWordTest = () => {
        navigate("/word_test"); // "/word_test" 경로로 이동
    };

    // 앞면 보기 버튼 클릭 시 호출되는 함수
    const handleFlipToFront = () => {
        setFlipState((prevState) =>
            prevState.map((isFlipped) => (isFlipped ? false : isFlipped))
        );
    };

    // 뒷면 보기 버튼 클릭 시 호출되는 함수
    const handleFlipToBack = () => {
        setFlipState((prevState) =>
            prevState.map((isFlipped) => (!isFlipped ? true : isFlipped))
        );
    };

    // 개별 카드가 클릭될 때 상태 변경
    const handleIndividualFlip = (index) => {
        setFlipState((prevState) => {
            const newState = [...prevState];
            newState[index] = !newState[index]; // 해당 카드의 상태를 반전
            return newState;
        });
    };

    return (
        <div className={styles.WordPageForm}>
            <Head
                propLeftComponent={<NavigationMenu />}
                propMidComponent={
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/Head/LogoText.svg`}
                        alt="LogoText"
                    />
                }
                propRightComponent1={
                    <RegularButton
                        propText={"앞면 보기"}
                        propFontSize={"20px"}
                        propFontWeight={700}
                        propWidth={"140px"}
                        propHeight={"63px"}
                        propColor={"var(--color-white)"}
                        propBorderRadius={"15px"}
                        propHoverColor={"var(--color-main)"}
                        propHoverTextColor={"var(--color-black)"}
                        propOnClick={handleFlipToFront} // 앞면 보기 버튼 클릭 시 호출
                    />
                }
                propRightComponent2={
                    <RegularButton
                        propText={"뒷면 보기"}
                        propFontSize={"20px"}
                        propFontWeight={700}
                        propWidth={"140px"}
                        propHeight={"63px"}
                        propColor={"var(--color-white)"}
                        propBorderRadius={"15px"}
                        propHoverColor={"var(--color-main)"}
                        propHoverTextColor={"var(--color-black)"}
                        propOnClick={handleFlipToBack} // 뒷면 보기 버튼 클릭 시 호출
                    />
                }

                propRightComponent3={
                    <RegularButton
                        propText={"일간 테스트"}
                        propFontSize={"20px"}
                        propFontWeight={700}
                        propWidth={"140px"}
                        propHeight={"63px"}
                        propColor={"var(--color-white)"}
                        propBorderRadius={"15px"}
                        propHoverColor={"var(--color-main)"}
                        propHoverTextColor={"var(--color-black)"}
                        propOnClick={navigateToWordTest} // 일간 테스트 버튼 클릭 시 "/word_test"로 이동
                    />
                }
            />

            <div className={styles.word}>
                <WordListTop propText2={"01"} />

                <div className={styles.wordList}>
                    {/* 각 WordListElement에 상태를 전달하여 개별 동작 */}
                    {Array.from({ length: 20 }, (_, index) => (
                        <WordListElement
                            key={index}
                            propFrontNumber={String(index + 1).padStart(2, "0")}
                            propBackNumber={String(index + 1).padStart(2, "0")}
                            isFlipped={flipState[index]} // 개별 상태 반영
                            onFlip={() => handleIndividualFlip(index)} // 개별 카드 클릭 처리
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

WordPageForm.propTypes = {
    className: PropTypes.string,
};

export default WordPageForm;
