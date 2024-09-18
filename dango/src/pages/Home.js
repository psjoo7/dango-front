import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckBoxButton,
  GoogleButton,
  RadioButton,
  RegularButton,
} from "../components/Buttons";
import TextInput from "../components/Inputs/Input/TextInput";
import { DoubleText, RegularText } from "../components/Texts";
import LoginLogo from "../components/Icons/LoginLogo/LoginLogo";

const Home = () => {
  const navigate = useNavigate();

  const goToAboutPage = () => {
    navigate("/about");
  };

  const goToLoginPage = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToLoginPage}>Login</button>
      <LoginLogo />
      <DoubleText textprops={"박성준"} />
      <RegularText text={"환영합니다."} propFontSize={32} />
      <TextInput inputLabel={"이메일"} />
      <CheckBoxButton />
      <RadioButton prop={"이메일 저장"} />
      <GoogleButton />
      <RegularButton buttonText={"Test"} propWidth={100} />
    </div>
  );
};

export default Home;
