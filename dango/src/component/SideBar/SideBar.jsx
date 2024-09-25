import styles from "./SideBar.module.css";
import PropTypes from "prop-types";
import DoubleText from "../../component/Text/DoubleText/DoubleText";
import NavigationMenu from "../../component/NavigationMenu/NavigationMenu";
import ProfileImage from "../ProfileImage/ProfileImage";

const SideBar = ({
                     propProfileImageCode = "9_w", // 기본 이미지 파일명
                     propUserName = "??", // 기본 유저 이름
                 }) => {
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
                    propText1={propUserName} // 유저 이름 동적으로 받음
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
                    propClassName={styles.menuItem}  // 추가 스타일링 가능
                />

                <NavigationMenu
                    propImgFileName={"Check.svg"}
                    propAltText={"check side bar"}
                    propNavigatePath={"/word"}
                    propClassName={styles.menuItem}  // 추가 스타일링 가능
                />

                <NavigationMenu
                    propImgFileName={"Test.svg"}
                    propAltText={"test side bar"}
                    propNavigatePath={"/word"}
                    propClassName={styles.menuItem}  // 추가 스타일링 가능
                />

                <NavigationMenu
                    propImgFileName={"Talk.svg"}
                    propAltText={"talk side bar"}
                    propNavigatePath={"/word"}
                    propClassName={styles.menuItem}  // 추가 스타일링 가능
                />

                <NavigationMenu
                    propImgFileName={"Game.svg"}
                    propAltText={"game side bar"}
                    propNavigatePath={"/game"}
                    propClassName={styles.menuItem}  // 추가 스타일링 가능
                />
            </div>
        </div>
    );
};

SideBar.propTypes = {
    propProfileImageCode: PropTypes.string, // 프로필 이미지 파일명
    propUserName: PropTypes.string, // 유저 이름
};

export default SideBar;
