import PropTypes from "prop-types";
import styles from "./SignUpPageForm.module.css";
import {RegularText} from "../../Text";
import {InputText} from "../../Input";
import {RadioButton, RegularButton} from "../../Buttons";

const SignUpPageForm = ({className = ""}) => {
    return (
        <div className={styles.SignUpPageForm}>
            <div className={styles.top}>
                <RegularText
                    text={"회원가입"}
                    propFontSize={"47px"}
                    propFontWeight={900}
                />

                <div className={styles.firstRow}>
                    <div className={styles.firstRowBlock}>
                        <InputText
                            propWidth={"375px"}
                            propHeight={"38px"}
                            propBorderRadius={"13px"}
                            propLabelText={"Email"}
                            propLabelFontSize={"var(--font-body2)"}
                            propInputFontSize={"var(--font-body3)"}
                            propPlaceholder={"이메일을 입력해 주세요."}
                        />

                        <RegularButton
                            buttonClassName={styles.buttons}
                            buttonText={"인증번호 보내기"}
                            buttonFontSize={"var(--font-body3)"}

                            buttonColor={"var(--color-black)"}
                            buttonTextColor={"var(--color-white)"}
                            buttonBorderRadius={"15px"}

                            buttonWidth={"108px"}
                            buttonHeight={"38px"}
                        />
                    </div>
                    <RegularText
                        text={"인증번호 보냈습니다."}
                        propFontSize={"var(--font-body3)"}
                        propFontWeight={700}
                    />

                </div>


                <div className={styles.secondRow}>

                    <div className={styles.secondRowBlock}>
                        <InputText
                            propWidth={"375px"}
                            propHeight={"38px"}
                            propBorderRadius={"13px"}
                            propLabelText={"인증번호 확인"}
                            propLabelFontSize={"var(--font-body2)"}
                            propInputFontSize={"var(--font-body3)"}
                            propPlaceholder={"인증번호를 입력해 주세요."}
                        />

                        <RegularButton
                            buttonClassName={styles.buttons}
                            buttonText={"확인"}
                            buttonFontSize={"var(--font-body3)"}

                            buttonColor={"var(--color-black)"}
                            buttonTextColor={"var(--color-white)"}
                            buttonBorderRadius={"15px"}

                            buttonWidth={"108px"}
                            buttonHeight={"38px"}
                        />

                    </div>

                    <RegularText
                        text={"인증번호가 확인 되었습니다."}
                        propFontSize={"var(--font-body3)"}
                        propFontWeight={700}
                    />


                </div>

                <div className={styles.thirdRow}>
                    <div className={styles.thirdRowBlock}>
                        <InputText
                            propWidth={"375px"}
                            propHeight={"38px"}
                            propBorderRadius={"13px"}
                            propLabelText={"닉네임"}
                            propLabelFontSize={"var(--font-body2)"}
                            propInputFontSize={"var(--font-body3)"}
                            propPlaceholder={"닉네임을 입력해 주세요."}
                        />

                        <RegularButton
                            buttonClassName={styles.buttons}
                            buttonText={"중복 확인"}
                            buttonFontSize={"var(--font-body3)"}

                            buttonColor={"var(--color-black)"}
                            buttonTextColor={"var(--color-white)"}
                            buttonBorderRadius={"15px"}

                            buttonWidth={"108px"}
                            buttonHeight={"38px"}
                        />
                    </div>

                    <RegularText
                        text={"사용 가능한 닉네임 입니다."}
                        propFontSize={"var(--font-body3)"}
                        propFontWeight={700}
                    />
                </div>

                <div className={styles.fourthRow}>
                    <InputText
                        propWidth={"515px"}
                        propHeight={"38px"}
                        propBorderRadius={"13px"}
                        propLabelText={"비밀번호"}
                        propLabelFontSize={"var(--font-body2)"}
                        propInputFontSize={"var(--font-body3)"}
                        propPlaceholder={"비밀번호를 입력해 주세요."}
                    />

                    <RegularText
                        text={"사용 가능한 비밀번호 입니다."}
                        propFontSize={"var(--font-body3)"}
                        propFontWeight={700}
                    />
                </div>

                <div className={styles.fifthRow}>
                    <InputText
                        propWidth={"515px"}
                        propHeight={"38px"}
                        propBorderRadius={"13px"}
                        propLabelText={"비밀번호 확인"}
                        propLabelFontSize={"var(--font-body2)"}
                        propInputFontSize={"var(--font-body3)"}
                        propPlaceholder={"비밀번호를 다시 입력해 주세요."}
                    />

                    <RegularText
                        text={"비밀번호와 일치합니다."}
                        propFontSize={"var(--font-body3)"}
                        propFontWeight={700}
                    />

                </div>

                <InputText
                    propWidth={"515px"}
                    propHeight={"38px"}
                    propBorderRadius={"13px"}
                    propLabelText={"전화번호"}
                    propLabelFontSize={"var(--font-body2)"}
                    propInputFontSize={"var(--font-body3)"}
                    propPlaceholder={"전화번호를 입력해 주세요."}
                />
            </div>





            <div className={styles.radios}>
                <div className={styles.radio}>
                    <RegularText
                        text={"성별"}
                        propFontSize={"var(--font-body1)"}
                        propFontWeight={500}
                    />
                    <RadioButton
                        propLabel={"남자"}
                    />
                    <RadioButton
                        propLabel={"여자"}
                    />
                </div>

                <div className={styles.radio}>
                    <RegularText
                        text={"국적"}
                        propFontSize={"var(--font-body1)"}
                        propFontWeight={500}
                    />
                    <RadioButton
                        propLabel={"한국인"}
                    />
                    <RadioButton
                        propLabel={"日本人"}
                    />
                </div>
            </div>

            <RegularButton
                buttonClassName={styles.buttons}
                buttonText={"회원가입"}
                buttonFontSize={"var(--font-body1)"}

                buttonColor={"var(--color-black)"}
                buttonTextColor={"var(--color-white)"}
                buttonBorderRadius={"15px"}

                buttonWidth={"280px"}
                buttonHeight={"55px"}
            />


        </div>
    );
};

SignUpPageForm.propTypes = {
    className: PropTypes.string,
};

export default SignUpPageForm;
