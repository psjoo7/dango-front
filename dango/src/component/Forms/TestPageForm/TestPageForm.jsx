import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./TestPageForm.module.css";
import TestPageTop from "./TestPageTop/TestPageTop";
import TestListElement from "./TestListElement/TestListElement";

const TestPageForm = ({
  propChoice1,
  propChoice2,
  propChoice3,
  propChoice4,
  propQuizCount,
  propQuiz,
  propChoiceSelect,
  selectedChoice, // 상위에서 전달된 선택된 값
}) => {
  // const [selectedChoice, setSelectedChoice] = useState(null);

  const handleChoiceClick = (choiceNumber) => {
    // setSelectedChoice(choiceNumber);
    propChoiceSelect(choiceNumber);
  };

  return (
    <div className={styles.TestPage}>
      <div className={styles.contents}>
        <TestPageTop propQuizCount={propQuizCount} propQuiz={propQuiz} />

        <div className={styles.list}>
          <TestListElement
            propChoiceNumber={""}
            propChoice={propChoice1}
            propIsSelected={selectedChoice === 1}
            propOnClick={() => handleChoiceClick(1)}
          />
          <TestListElement
            propChoiceNumber={""}
            propChoice={propChoice2}
            propIsSelected={selectedChoice === 2}
            propOnClick={() => handleChoiceClick(2)}
          />
          <TestListElement
            propChoiceNumber={""}
            propChoice={propChoice3}
            propIsSelected={selectedChoice === 3}
            propOnClick={() => handleChoiceClick(3)}
          />
          <TestListElement
            propChoiceNumber={""}
            propChoice={propChoice4}
            propIsSelected={selectedChoice === 4}
            propOnClick={() => handleChoiceClick(4)}
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
  propChoiceSelect: PropTypes.func.isRequired,
  selectedChoice: PropTypes.number, // 상위에서 관리하는 선택된 상태
};

export default TestPageForm;
