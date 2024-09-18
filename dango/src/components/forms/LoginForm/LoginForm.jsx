import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios"; // Axios 추가
import styles from "./LoginForm.module.css";
import { RegularText } from "../../Texts";
import TextInput from "../../Inputs/Input/TextInput";
import { CheckBoxButton, GoogleButton, RegularButton } from "../../Buttons";

const LoginForm = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // 로그인 API 호출 함수
  const handleLogin = async (event) => {
    event.preventDefault(); // 폼 기본 제출 동작 방지

    try {
      const response = await axios.post(
        "http://52.78.153.70//api/member/login",
        {
          userEmail: email,
          userPassword: password,
        },
        {
          withCredentials: true, // 쿠키나 세션 정보를 함께 전송
        }
      );

      console.log("로그인 성공:", response.data);
      // 로그인 성공 시 처리
    } catch (error) {
      console.error(
        "로그인 실패:",
        error.response ? error.response.data : error.message
      );
      setErrorMessage("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

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
      <form className={styles.inputFields} onSubmit={handleLogin}>
        <TextInput
          inputLabel="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // 이메일 입력값 업데이트
          propMinWidth="unset"
          propWidth="54px"
        />
        <div className={styles.passwordField}>
          <div className={styles.passwordInputWrapper}>
            <TextInput
              inputLabel="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // 비밀번호 입력값 업데이트
            />
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
                type="submit" // 버튼을 제출 버튼으로 설정
              />
              <GoogleButton />
            </div>
          </div>
          <div className={styles.registerLinkWrapper}>
            <RegularText text="비밀번호를 잊었다면?" />
          </div>
        </div>
      </form>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
    </div>
  );
};

LoginForm.propTypes = {
  className: PropTypes.string,
};

export default LoginForm;
