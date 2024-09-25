import styles from "./RankingList.module.css";
import PropTypes from "prop-types";
import { RegularText, DoubleText } from "../../../../../component/Text/";
import ProfileImage from "../../../../ProfileImage/ProfileImage";

const RankingList = ({
                         propRank = "4",
                         propProfileImageCode = "1_w",
                         propProfileImageHeight = "40px",
                         propProfileImageWidth = "40px",
                         propUserName = "User", // propName을 propUserName으로 변경
                         propScore = "??",
                         propClassName = ""
                     }) => {
    return (
        <div className={`${styles.rankingList} ${propClassName}`}>
            <DoubleText
                propText1={propRank}
                propText1FontSize={"23px"}
                propText1FontWeight={700}

                propText2={"등"}
                propText2FontSize={"23px"}
                propText2FontWeight={700}
            />

            <div className={styles.list}>
                <div className={styles.profile}>
                    <ProfileImage
                        propImageCode={propProfileImageCode}
                        propImageHeight={propProfileImageHeight}
                        propImageWidth={propProfileImageWidth}
                    />

                    <RegularText
                        propText={propUserName} // propUserName으로 변경
                        propFontSize={"18px"}
                        propFontWeight={"bold"}
                    />
                </div>

                <DoubleText
                    propText1={propScore}
                    propText1FontSize={"20px"}
                    propText1FontWeight={700}

                    propText2={"점"}
                    propText2FontSize={"20px"}
                    propText2FontWeight={700}
                />
            </div>
        </div>
    );
};

RankingList.propTypes = {
    propRank: PropTypes.string,
    propProfileImageCode: PropTypes.string,
    propProfileImageHeight: PropTypes.string,
    propProfileImageWidth: PropTypes.string,
    propUserName: PropTypes.string, // propUserName으로 변경
    propScore: PropTypes.string,
    propClassName: PropTypes.string,
};

export default RankingList;
