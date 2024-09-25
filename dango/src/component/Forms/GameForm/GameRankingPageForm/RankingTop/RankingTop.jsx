import styles from "./RankingTop.module.css";
import { RegularText, DoubleText } from "../../../../../component/Text/";
import PropTypes from "prop-types";
import ProfileImage from "../../../../ProfileImage/ProfileImage";
import ProfileCrownImage from "../../../../ProfileCrownImage/ProfileCrownImage";

const RankingTop = ({
                        propFirstUserName = "???",
                        propFirstImageCode = "4_w",
                        propFirstImageWidth = "80px",
                        propFirstImageHeight = "95px",
                        propFirstScore = "??",

                        propSecondUserName = "???",
                        propSecondImageCode = "2_w",
                        propSecondImageWidth = "57px",
                        propSecondImageHeight = "57px",
                        propSecondScore = "??",

                        propThirdUserName = "???",
                        propThirdImageCode = "8_w",
                        propThirdImageWidth = "57px",
                        propThirdImageHeight = "57px",
                        propThirdScore = "??",

                        propClassName = "",
                    }) => {
    return (
        <div className={`${styles.rankingTop} ${propClassName}`}>
            {/* Second - Left */}
            <div className={`${styles.wrapper} ${styles.second}`}>
                <div className={styles.image}>
                    <ProfileImage
                        propImageCode={propSecondImageCode}
                        propImageWidth={propSecondImageWidth}
                        propImageHeight={propSecondImageHeight}
                    />
                </div>

                <div className={styles.text}>
                    <div className={styles.textWrapper}>
                        <RegularText
                            propText="2등"
                            propFontSize={"18px"}
                            propFontWeight={700}
                        />
                        <RegularText
                            propText={propSecondUserName}
                            propFontSize={"11.5px"}
                            propFontWeight={700}
                        />
                    </div>
                    <DoubleText
                        propText1={propSecondScore}
                        propText2={"점"}
                        propText1FontSize={"20px"}
                        propText2FontSize={"20px"}
                        propText1FontWeight={700}
                        propText2FontWeight={700}
                    />
                </div>
            </div>

            {/* First - Center */}
            <div className={`${styles.wrapper} ${styles.first}`}>
                <div className={styles.image}>
                    <ProfileCrownImage
                        propImageCode={propFirstImageCode}
                        propImageWidth={propFirstImageWidth}
                        propImageHeight={propFirstImageHeight}
                    />
                </div>

                <div className={styles.text}>
                    <div className={styles.textWrapper}>
                        <RegularText
                            propText="1등"
                            propFontSize={"18px"}
                            propFontWeight={700}
                        />
                        <RegularText
                            propText={propFirstUserName}
                            propFontSize={"11.5px"}
                            propFontWeight={700}
                        />
                    </div>
                    <DoubleText
                        propText1={propFirstScore}
                        propText2={"점"}
                        propText1FontSize={"20px"}
                        propText2FontSize={"20px"}
                        propText1FontWeight={700}
                        propText2FontWeight={700}
                    />
                </div>
            </div>

            {/* Third - Right */}
            <div className={`${styles.wrapper} ${styles.third}`}>
                <div className={styles.image}>
                    <ProfileImage
                        propImageCode={propThirdImageCode}
                        propImageWidth={propThirdImageWidth}
                        propImageHeight={propThirdImageHeight}
                    />
                </div>

                <div className={styles.text}>
                    <div className={styles.textWrapper}>
                        <RegularText
                            propText="3등"
                            propFontSize={"18px"}
                            propFontWeight={700}
                        />
                        <RegularText
                            propText={propThirdUserName}
                            propFontSize={"11.5px"}
                            propFontWeight={700}
                        />
                    </div>
                    <DoubleText
                        propText1={propThirdScore}
                        propText2={"점"}
                        propText1FontSize={"20px"}
                        propText2FontSize={"20px"}
                        propText1FontWeight={700}
                        propText2FontWeight={700}
                    />
                </div>
            </div>
        </div>
    );
};

RankingTop.propTypes = {
    propFirstUserName: PropTypes.string,
    propFirstImageCode: PropTypes.string,
    propFirstImageWidth: PropTypes.string,
    propFirstImageHeight: PropTypes.string,
    propFirstScore: PropTypes.string,

    propSecondUserName: PropTypes.string,
    propSecondImageCode: PropTypes.string,
    propSecondImageWidth: PropTypes.string,
    propSecondImageHeight: PropTypes.string,
    propSecondScore: PropTypes.string,

    propThirdUserName: PropTypes.string,
    propThirdImageCode: PropTypes.string,
    propThirdImageWidth: PropTypes.string,
    propThirdImageHeight: PropTypes.string,
    propThirdScore: PropTypes.string,

    propClassName: PropTypes.string,
};

export default RankingTop;
