import styles from "./SideBar.module.css";
import axios from "axios"; // axios 임포트
import PropTypes from "prop-types";
import DoubleText from "../../component/Text/DoubleText/DoubleText";
import NavigationMenu from "../../component/NavigationMenu/NavigationMenu";
import ProfileImage from "../ProfileImage/ProfileImage";
import { useNavigate } from "react-router-dom"; // 리다이렉트를 위해 사용
import debounce from "lodash.debounce";
import { useCallback } from "react";

const SideBar = ({
  propProfileImageCode = "9_w", // 기본 이미지 파일명
  propUserName = "??", // 기본 유저 이름
}) => {
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("user"));

  const debouncedNavigate = useCallback(
    debounce((path) => {
      navigate(path);
    }, 300), // 300ms 지연 후 실행
    []
  );
  // 로그아웃 함수
  const removeUserInfo = () => {
    axios
      // .post("https://scit45dango.site/logout") // 서버 환경의 경우
      .post("http://localhost:8888/logout") // 로컬 환경의 경우
      .then((response) => {
        // 로컬 스토리지에서 사용자 정보 삭제
        localStorage.removeItem("user");
        // 로그인 페이지 또는 원하는 페이지로 리디렉션
        debouncedNavigate("/member/login");
      })
      .catch((error) => {
        console.error("로그아웃 실패:", error);
      });
  };

  return (
    <div className={styles.sideBar}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/SideBar/Logo.svg`}
        className={styles.logo}
        alt="logo side bar"
      />

      <div className={styles.profile}>
        <ProfileImage
          propImageCode={propProfileImageCode} // 이미지 파일명 동적으로 받음
          propAltText={"profile"}
          propNavigatePath={"my_profile"}
        />
        <DoubleText
          propText1={userInfo.name} // 유저 이름 동적으로 받음
          propText2={"님"}
          propText1FontSize={"var(--font-body1)"}
          propText2FontSize={"var(--font-body1)"}
          propText1Color={"var(--color-white)"}
          propText2Color={"var(--color-white)"}
          propTextSpacing={"2px"}
        />
      </div>

      <div className={styles.menu}>
        <NavigationMenu
          propImgFileName={"Home.svg"}
          propAltText={"home side bar"}
          propNavigatePath={"/"}
          propClassName={styles.menuItem} // 추가 스타일링 가능
        />

        <NavigationMenu
          propImgFileName={"Check.svg"}
          propAltText={"check side bar"}
          propNavigatePath={"/review"}
          propClassName={styles.menuItem} // 추가 스타일링 가능
        />

        <NavigationMenu
          propImgFileName={"Test.svg"}
          propAltText={"test side bar"}
          propNavigatePath={"/word"}
          propClassName={styles.menuItem} // 추가 스타일링 가능
        />

        <NavigationMenu
          propImgFileName={"Chat.svg"}
          propAltText={"talk side bar"}
          propNavigatePath={"/word"}
          propClassName={styles.menuItem} // 추가 스타일링 가능
        />

        <NavigationMenu
          propImgFileName={"Game.svg"}
          propAltText={"game side bar"}
          propNavigatePath={"/game"}
          propClassName={styles.menuItem} // 추가 스타일링 가능
        />
      </div>

      {/* 로그아웃 버튼 클릭 시 handleLogout 함수 실행 */}
      <NavigationMenu
        propImgFileName={"UnLock.svg"}
        propAltText={"unlock side bar"}
        propClassName={styles.unlock} // 추가 스타일링 가능
        propOnClick={removeUserInfo}
      />
    </div>
  );
};

SideBar.propTypes = {
  propProfileImageCode: PropTypes.string, // 프로필 이미지 파일명
  propUserName: PropTypes.string, // 유저 이름
};

export default SideBar;
