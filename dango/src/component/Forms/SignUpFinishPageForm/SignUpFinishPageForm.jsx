import { DoubleText, RegularText } from "../../../component/Text";
import RegularButton from "../../../component/Buttons/RegularButton/RegularButton";
import styles from "./SignUpFinishPageForm.module.css";

const SignUpFinishPageForm = ({ propUsername }) => {
    return (
        <div className={styles.signUpFinishPageForm}>
            <div className={styles.texts}>
                <DoubleText
                    propText1={propUsername}
                    propText2={"님 가입을 환영합니다."}
                    propText1FontSize={"90px"}
                    propText2FontSize={"90px"}
                />

                <RegularText
                    propText="공부하기에 앞서 실력을 확인해 볼까요?"
                    propFontSize="50px"
                    propFontWeight="700"
                    propColor="var(--color-gray3)"
                />
            </div>

                <RegularButton
                    propWidth={"370px"}
                    propHeight={"120px"}
                    propColor={"var(--color-black)"}
                    propBorderRadius={"30px"}
                    propText={"실력 테스트 하기"}
                    propFontSize={"35px"}
                    propFontWeight={"700"}
                    propTextColor={"var(--color-white)"}
                    propClassName={styles.button}
                />
        </div>
    );
};

export default SignUpFinishPageForm;
