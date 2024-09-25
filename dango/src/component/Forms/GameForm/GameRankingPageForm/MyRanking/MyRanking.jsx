import styles from "./MyRanking.module.css";
import PropTypes from "prop-types";
import DoubleText from "../../../../../component/Text/DoubleText/DoubleText";
import ProfileImage from "../../../../ProfileImage/ProfileImage";

const MyRanking = ({
                       propClassName = "",
                       propImageCode = "9_m", // 기본 이미지 파일명
                       propUserName = "??", // 유저 이름
                       propUserScore = "??", // 유저 점수
                       propUserRank = "??", // 유저 순위
                   }) => {
    return (
        <div className={styles.myRanking}>
            <div className={styles.myProfile}>
                <ProfileImage
                    propImageCode={propImageCode} // 이미지 파일명 prop
                    propImageWidth={"39px"}
                    propImageHeight={"39px"}
                />

                <DoubleText
                    propText1={propUserName} // 유저 이름 prop
                    propText2={"님"}
                    propText1FontSize={"var(--font-body2)"}
                    propText2FontSize={"var(--font-body1)"}
                    propTextSpacing={"2px"}
                />
            </div>

            <DoubleText
                propText1={propUserScore} // 유저 점수 prop
                propText2={"점"}
                propText1FontSize={"var(--font-body2)"}
                propText2FontSize={"var(--font-body1)"}
                propTextSpacing={"2px"}
            />

            <DoubleText
                propText1={propUserRank} // 유저 순위 prop
                propText2={"등"}
                propText1FontSize={"var(--font-title3"}
                propText2FontSize={"var(--font-title3)"}
                propTextSpacing={"2px"}
            />
        </div>
    );
};

MyRanking.propTypes = {
    propClassName: PropTypes.string, // 클래스명 prop으로 받음
    propImageCode: PropTypes.string, // 이미지 파일명을 prop으로 받음
    propUserName: PropTypes.string, // 유저 이름을 prop으로 받음
    propUserScore: PropTypes.string, // 유저 점수를 prop으로 받음
    propUserRank: PropTypes.string, // 유저 순위를 prop으로 받음
};

export default MyRanking;
