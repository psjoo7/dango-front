import { useState } from "react";
import axios from "axios"; // Axios 사용을 위한 import
import PropTypes from "prop-types";
import styles from "./SignUpPageForm.module.css";
import { RegularText } from "../../Text";
import { InputText } from "../../Input";
import { RadioButton, RegularButton } from "../../Buttons";
import { useNavigate } from "react-router-dom";

const SignUpPageForm = ({ className = "" }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    userPassword: "",
    confirmPassword: "",
    nickname: "",
    userNationality: "",
    userSex: null,
    verificationCode: "",
  });
  const [verificationCode, setVerificationCode] = useState("");
  const [userEmail, setUserEmail] = useState(formData.email);
  const [isVerified, setIsVerified] = useState(false);
  const [isSended, setIsSended] = useState(false);
  const [isNickAble, setIsNickAble] = useState(false);
  const [isPasswordAble, setIsPasswordAble] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData.userNationality, formData.userSex);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // 비밀번호 확인 로직
    if (formData.userPassword !== formData.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      // 서버로 회원가입 요청 전송
      const response = await axios.post(
        "http://localhost:8888/api/member/join", // 서버 환경의 경우
        {
          userEmail: formData.email,
          userPassword: formData.userPassword,
          nickname: formData.nickname,
          userNationality: formData.userNationality,
          userSex: formData.userSex === "male" ? true : false,
        }
      );

      if (response.status === 201) {
        alert("회원가입에 성공했습니다.");
        const response = await axios.post(
          "http://localhost:8888/api/member/login",
          {
            userEmail: formData.email,
            userPassword: formData.userPassword,
          }
        );

        console.log("로그인 성공:", response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/member/sign_up_finish");
      }
    } catch (error) {
      console.error("회원가입 오류:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  const sendVerificationCode = async () => {
    console.log("formvei", formData.verificationCode);
    try {
      const response = await axios.post(
        "http://localhost:8888/api/member/send-verification",
        {
          email: formData.email,
          code: formData.verificationCode,
        }
      );

      alert("인증번호가 전송되었습니다.");
      setIsSended(true);
      console.log("인증번호 전송 성공:", response.data);
      setUserEmail(formData.email);
    } catch (error) {
      console.error("인증번호 전송 실패:", error.response.data);
      alert("인증번호 전송에 실패했습니다.");
    }
  };

  const verifyEmail = () => {
    alert("인증번호가 확인되었습니다.");
    setIsVerified(true);
  };
  const verifyNick = () => {
    alert("닉네임 사용 가능합니다.");
    setIsNickAble(true);
  };

  return (
    <div className={styles.SignUpPageForm}>
      <div className={styles.top}>
        <RegularText
          propText={"회원가입"}
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
              propValue={formData.email}
              propOnChange={handleInputChange}
              name={"email"}
            />

            <RegularButton
              propClassName={styles.buttons}
              propText={"인증번호 보내기"}
              propFontSize={"var(--font-body3)"}
              propColor={"var(--color-black)"}
              propTextColor={"var(--color-white)"}
              propBorderRadius={"15px"}
              propWidth={"108px"}
              propHeight={"38px"}
              propOnClick={sendVerificationCode}
            />
          </div>
          {isSended && (
            <RegularText
              propText={"인증번호 보냈습니다."}
              propFontSize={"var(--font-body3)"}
              propTextColor={"var(--color-black)"}
              propFontWeight={700}
            />
          )}
        </div>

        <div className={styles.secondRow}>
          <div className={styles.secondRowBlock}>
            <InputText
              propWidth={"375px"}
              propHeight={"38px"}
              propBorderRadius={"13px"}
              propLabelText={"인증번호 확인"}
              propValue={formData.verificationCode}
              propOnChange={handleInputChange}
              propLabelFontSize={"var(--font-body2)"}
              propInputFontSize={"var(--font-body3)"}
              propPlaceholder={"인증번호를 입력해 주세요."}
              name={"verificationCode"}
            />

            <RegularButton
              propClassName={styles.buttons}
              propText={"확인"}
              propFontSize={"var(--font-body3)"}
              propColor={"var(--color-black)"}
              propTextColor={"var(--color-white)"}
              propBorderRadius={"15px"}
              propWidth={"108px"}
              propHeight={"38px"}
              propOnClick={verifyEmail}
            />
          </div>
          {isVerified && (
            <RegularText
              propText={"인증번호가 확인 되었습니다."}
              propFontSize={"var(--font-body3)"}
              propTextColor={"var(--color-black)"}
              propFontWeight={700}
            />
          )}
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
              name={"nickname"}
              propValue={formData.nickname}
              propOnChange={handleInputChange}
            />

            <RegularButton
              propClassName={styles.buttons}
              propText={"중복 확인"}
              propFontSize={"var(--font-body3)"}
              propColor={"var(--color-black)"}
              propTextColor={"var(--color-white)"}
              propBorderRadius={"15px"}
              propWidth={"108px"}
              propHeight={"38px"}
              propOnClick={verifyNick}
            />
          </div>

          {isNickAble && (
            <RegularText
              propText={"사용 가능한 닉네임 입니다."}
              propFontSize={"var(--font-body3)"}
              propTextColor={"var(--color-black)"}
              propFontWeight={700}
            />
          )}
        </div>

        <div className={styles.fourthRow}>
          <InputText
            propType="password"
            propWidth={"515px"}
            propHeight={"38px"}
            propBorderRadius={"13px"}
            propLabelText={"비밀번호"}
            propLabelFontSize={"var(--font-body2)"}
            propInputFontSize={"var(--font-body3)"}
            propPlaceholder={"비밀번호를 입력해 주세요."}
            propValue={formData.userPassword}
            propOnChange={handleInputChange}
            name={"userPassword"}
          />

          {isPasswordAble && (
            <RegularText
              text={"사용 가능한 비밀번호 입니다."}
              propFontSize={"var(--font-body3)"}
              propFontWeight={700}
            />
          )}
        </div>

        <div className={styles.fifthRow}>
          <InputText
            propType="password"
            propWidth={"515px"}
            propHeight={"38px"}
            propBorderRadius={"13px"}
            propLabelText={"비밀번호 확인"}
            propLabelFontSize={"var(--font-body2)"}
            propInputFontSize={"var(--font-body3)"}
            propPlaceholder={"비밀번호를 다시 입력해 주세요."}
            propValue={formData.confirmPassword}
            propOnChange={handleInputChange}
            name={"confirmPassword"}
          />

          <RegularText
            text={"비밀번호와 일치합니다."}
            propFontSize={"var(--font-body3)"}
            propFontWeight={700}
          />
        </div>
      </div>

      <div className={styles.radios}>
        <div className={styles.radio}>
          <RegularText
            propText={"성별"}
            propFontSize={"var(--font-body1)"}
            propFontWeight={700}
          />
          <RadioButton
            propLabel={"남자"}
            propName="userSex"
            propValue="male"
            propOnChange={handleRadioChange}
          />
          <RadioButton
            propLabel={"여자"}
            propName="userSex"
            propValue="female"
            propOnChange={handleRadioChange}
          />
        </div>

        <div className={styles.radio}>
          <RegularText
            propText={"국적"}
            propFontSize={"var(--font-body1)"}
            propFontWeight={700}
          />
          <RadioButton
            propLabel={"한국인"}
            propName="userNationality"
            propValue="Korea"
            propOnChange={handleRadioChange}
          />
          <RadioButton
            propLabel={"日本人"}
            propName="userNationality"
            propValue="Japan"
            propOnChange={handleRadioChange}
          />
        </div>
      </div>

      <RegularButton
        propClassName={styles.buttons}
        propText={"회원 가입"}
        propFontSize={"var(--font-body1)"}
        propColor={"var(--color-black)"}
        propTextColor={"var(--color-white)"}
        propBorderRadius={"15px"}
        propWidth={"280px"}
        propHeight={"55px"}
        propOnClick={handleSubmit}
      />
    </div>
  );
};

SignUpPageForm.propTypes = {
  className: PropTypes.string,
};

export default SignUpPageForm;
