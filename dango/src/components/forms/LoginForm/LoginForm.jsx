import PropTypes from "prop-types";
import styles from "./LoginForm.module.css";
import { RegularText } from "../../Texts";
import TextInput from "../../Inputs/Input/TextInput";
import { CheckBoxButton, GoogleButton, RegularButton } from "../../Buttons";

const LoginForm = ({ className = "" }) => {
  return (
    <div className={[styles.formWrapper, className].join(" ")}>
      <div className={styles.loginForm}>
        <RegularText
          propWidth="195px"
          propAlignSelf="unset"
          text="환영합니다."
          propHeight="29px"
          propFontSize="40px"
          propFontWeight="bold"
          propMargin="unset"
          propFlex="1"
          propColor="#000"
          propMinWidth="unset"
          textComponentFlex="unset"
        />
        <RegularText
          propWidth="unset"
          propAlignSelf="stretch"
          text="로그인 정보를 입력해 주세요."
          propHeight="14px"
          propFontSize="19px"
          propFontWeight="500"
          propMargin="unset"
          propFlex="1"
          propColor="#6b7685"
          propMinWidth="unset"
          textComponentFlex="unset"
        />
      </div>
      <form className={styles.inputFields}>
        <TextInput inputLabel="이메일" propMinWidth="unset" propWidth="54px" />
        <div className={styles.passwordField}>
          <div className={styles.passwordInputWrapper}>
            <TextInput inputLabel="비밀번호" />
            <div className={styles.options}>
              <CheckBoxButton />
              <div className={styles.forgotPasswordLinkWrapper}>
                <RegularText
                  propWidth="unset"
                  propAlignSelf="unset"
                  text="회원가입"
                  propHeight="13px"
                  propFontSize="18px"
                  propFontWeight="600"
                  propMargin="unset"
                  propFlex="unset"
                  propColor="#000"
                  propMinWidth="67px"
                  textComponentFlex="unset"
                />
              </div>
            </div>
            <div className={styles.actions}>
              <RegularButton
                propWidth="unset"
                propAlignSelf="stretch"
                propPadding="18px 20px"
                buttonText="로그인"
                propMinWidth="unset"
                propWidth1="54px"
                propFontSize="18px"
                propFlex="unset"
                buttonComponentHeight="unset"
              />
              <GoogleButton />
            </div>
          </div>
          <div className={styles.registerLinkWrapper}>
            <RegularText text="비밀번호를 잊었다면?" />
          </div>
        </div>
      </form>
      <div className={styles.buttoncomponent}>
        <div className={styles.buttontext}>
          이메일을 입력하신 뒤 다시 버튼을 눌러주세요
        </div>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;
