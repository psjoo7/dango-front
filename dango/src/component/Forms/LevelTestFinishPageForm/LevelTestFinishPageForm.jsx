import { DoubleText, RegularText } from "../../../component/Text";
import RegularButton from "../../../component/Buttons/RegularButton/RegularButton";
import styles from "./LevelTestFinishPageForm.module.css";
import { useNavigate } from "react-router-dom";

const LevelTestFinishPageForm = ({ propUsername, propLevel }) => {
  const navigate = useNavigate();
  const moveToHome = () => {
    sessionStorage.removeItem("setLevel");
    navigate("/home");
  };
  return (
    <div className={styles.levelTestFinishPageForm}>
      <div className={styles.texts}>
        <div className={styles.firstText}>
          <DoubleText
            propText1={propUsername}
            propText2={"님 레벨은 “"}
            propText1FontSize={"90px"}
            propText2FontSize={"90px"}
          />

          <DoubleText
            propText1={propLevel}
            propText2={"”입니다."}
            propText1FontSize={"90px"}
            propText2FontSize={"90px"}
          />
        </div>

        <RegularText
          propText="레벨 테스트 수고 많으셨습니다."
          propFontSize="50px"
          propFontWeight="700"
          propColor="var(--color-gray3)"
          propTextComponentFlex="1"
        />
      </div>

      <RegularButton
        propWidth={"370px"}
        propHeight={"120px"}
        propColor={"var(--color-black)"}
        propBorderRadius={"30px"}
        propText={"공부하러 가기"}
        propOnClick={moveToHome}
        propFontSize={"35px"}
        propFontWeight={"700"}
        propTextColor={"var(--color-white)"}
        propClassName={styles.button}
      />
    </div>
  );
};

export default LevelTestFinishPageForm;
