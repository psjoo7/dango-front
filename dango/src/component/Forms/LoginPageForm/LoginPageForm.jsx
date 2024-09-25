import React, { useState } from "react";
import axios from "axios"; // axios 임포트
import styles from "./LoginPageForm.module.css";
import InputText from "../../../component/Input/InputText/InputText";
import { CheckBoxButton, RegularButton } from "../../../component/Buttons";
import { LinkText, RegularText } from "../../Text";
import { Navigate, useNavigate } from "react-router-dom";

const LoginPageForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(""); // 이메일 상태 관리
  const [password, setPassword] = useState(""); // 비밀번호 상태 관리
  const [resetPasswordText, setResetPasswordText] = useState(""); // 버튼 텍스트 상태
  const [showResetButton, setShowResetButton] = useState(false); // 버튼 노출 여부 상태

  // form submit 핸들러
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      userEmail: email,
      userPassword: password, // 비밀번호도 함께 전송
    };
    const goToHomePage = () => {
      navigate("/home");
    };

    try {
      const response = await axios.post("/api/login", formData);
      console.log("로그인 성공:", response.data);
      goToHomePage();
    } catch (error) {
      console.error(
        "로그인 실패:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // 이메일 입력 여부에 따라 비밀번호 재설정 버튼의 텍스트 변경
  const handleShowResetButton = () => {
    setShowResetButton(true); // 클릭 시 버튼 노출
    if (email.trim() === "") {
      // 이메일이 비어있으면
      setResetPasswordText("이메일을 입력하신 뒤 다시 버튼을 눌러주세요");
    } else {
      // 이메일이 입력되어 있으면
      setResetPasswordText("비밀번호 재설정 메일을 보냈습니다.");
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.logo}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/LoginPage/LogoIcon.svg`}
          alt="Login Icon"
        />
      </div>

      <div className={styles.texts}>
        <RegularText
          propText="환영합니다." // text가 아닌 propText로 변경
          propFontSize="40px"
          propFontWeight="700"
          propColor="var(--color-black)"
        />
        <RegularText
          propText="로그인 정보를 입력해 주세요." // text가 아닌 propText로 변경
          propFontSize="19px"
          propFontWeight="700"
          propColor="var(--color-gray3)"
        />
      </div>

      <div className={styles.inputs}>
        <InputText
          propLabelText={"이메일"}
          propLabelFontWeight="500"
          propLabelFontSize={"var(--font-body1)"}
          propInputFontSize={"var(--font-body1)"}
          propInputFontWeight={"500"}
          propWidth={"395px"}
          propHeight={"50px"}
          propBorderRadius={"15px"}
          propPlaceholder={"이메일을 입력하세요."}
          propValue={email} // 이메일 상태를 propValue로 전달
          propOnChange={(e) => setEmail(e.target.value)} // 상태 업데이트
        />

        <InputText
          propLabelText={"비밀번호"}
          propLabelFontWeight="500"
          propLabelFontSize={"var(--font-body1)"}
          propInputFontSize={"var(--font-body1)"}
          propInputFontWeight={"500"}
          propWidth={"395px"}
          propHeight={"50px"}
          propBorderRadius={"15px"}
          propPlaceholder={"비밀번호를 입력하세요."}
          propValue={password} // 비밀번호 상태를 propValue로 전달
          propOnChange={(e) => setPassword(e.target.value)} // 비밀번호 상태 업데이트
          propType={"password"}
        />
      </div>

      <div className={styles.checkBoxAndSignUp}>
        <CheckBoxButton />
        <LinkText
          propText={"회원가입"}
          propFontSize="var(--font-body1)"
          propUrl="/signup" // 내부 페이지 경로
          propIsExternal={false}
        />
      </div>

      <div className={styles.buttons}>
        <RegularButton
          propType="submit"
          propText="로그인"
          propColor={"var(--color-black)"}
          propTextColor={"var(--color-white)"}
          propWidth={"395px"}
          propHeight={"50px"}
          propBorderRadius={"15px"}
          propFontSize={"var(--font-body1)"}
          propFontWeight={"700"}
        />
      </div>

      <div className={styles.passwordForget}>
        {/* 클릭 가능한 텍스트 */}
        <span
          style={{
            cursor: "pointer",
            color: "var(--color-black)",
            fontWeight: "700",
          }}
          onClick={handleShowResetButton} // 클릭 시 이벤트 핸들러 호출
        >
          비밀번호를 잊었다면?
        </span>
      </div>

      {/* 비밀번호 재설정 버튼 */}
      {showResetButton && (
        <div className={styles.fadeIn}>
          {" "}
          {/* 애니메이션 클래스 적용 */}
          <RegularButton
            propWidth={"395px"}
            propHeight={"50px"}
            propBorderRadius={"15px"}
            propText={
              resetPasswordText || "이메일을 입력하신 뒤 다시 버튼을 눌러주세요"
            }
            propColor={"var(--color-gray3)"}
            propTextColor={"var(--color-white)"}
            propFontSize={"17px"}
            propFontWeight={"700"}
            propBorder={"0px"}
            onClick={handleShowResetButton} // 클릭 시 텍스트 다시 업데이트
          />
        </div>
      )}
    </form>
  );
};

export default LoginPageForm;
