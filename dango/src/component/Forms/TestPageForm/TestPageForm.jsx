import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TestPageForm.module.css";
import TestPageTop from "./TestPageTop/TestPageTop";
import TestPageBottom from "./TestPageBottom/TestPageBottom";
import TestListElement from "./TestListElement/TestListElement";

const TestPageForm = ({ propChoice1, propChoice2, propChoice3, propChoice4, propQuizCount, propQuiz, propChoiceSelect }) => {
    const [selectedChoice, setSelectedChoice] = useState(null);  // 선택된 항목 번호를 저장하는 상태

    // 클릭 시 선택된 번호를 저장하는 함수
    const handleChoiceClick = (choiceNumber) => {
        setSelectedChoice(choiceNumber);  // 선택된 번호를 설정
        console.log(`선택된 값: ${choiceNumber}`);  // 콘솔에 선택된 값 출력
        propChoiceSelect(choiceNumber);  // 선택된 값을 상위 컴포넌트로 전달
    };

    return (
        <div className={styles.TestPage}>
            <div className={styles.contents}>
                <TestPageTop propQuizCount={propQuizCount} propQuiz={propQuiz} />

                <div className={styles.list}>
                    <TestListElement
                        propChoiceNumber={"1."}
                        propChoice={propChoice1}
                        propIsSelected={selectedChoice === 1}   // 선택된 항목만 true
                        propOnClick={() => handleChoiceClick(1)}  // 클릭 시 선택된 번호 전달
                    />
                    <TestListElement
                        propChoiceNumber={"2."}
                        propChoice={propChoice2}
                        propIsSelected={selectedChoice === 2}   // 선택된 항목만 true
                        propOnClick={() => handleChoiceClick(2)}  // 클릭 시 선택된 번호 전달
                    />
                    <TestListElement
                        propChoiceNumber={"3."}
                        propChoice={propChoice3}
                        propIsSelected={selectedChoice === 3}   // 선택된 항목만 true
                        propOnClick={() => handleChoiceClick(3)}  // 클릭 시 선택된 번호 전달
                    />
                    <TestListElement
                        propChoiceNumber={"4."}
                        propChoice={propChoice4}
                        propIsSelected={selectedChoice === 4}   // 선택된 항목만 true
                        propOnClick={() => handleChoiceClick(4)}  // 클릭 시 선택된 번호 전달
                    />
                </div>
            </div>
        </div>
    );
};

TestPageForm.propTypes = {
    propChoice1: PropTypes.string.isRequired,
    propChoice2: PropTypes.string.isRequired,
    propChoice3: PropTypes.string.isRequired,
    propChoice4: PropTypes.string.isRequired,
    propQuizCount: PropTypes.string.isRequired,
    propQuiz: PropTypes.string.isRequired,
    propChoiceSelect: PropTypes.func.isRequired,  // 상위에서 전달받는 함수 Prop
};

export default TestPageForm;
