import styles from "./HomeRanking.module.css";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import PropTypes from "prop-types";
import DoubleText from "../../../../component/Text/DoubleText/DoubleText";
import ProfileImage from "../../../../component/ProfileImage/ProfileImage";

const HomeRanking = ({ propClassName = "" }) => {
  return (
    <div className={[styles.rankingTop, propClassName].join(" ")}>
      {/* first */}
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <ProfileImage
            propImageCode="3_w"
            propImageWidth="77px"
            propImageHeight="77px"
          />
        </div>

        <div className={styles.text}>
          <div className={styles.textWrapper}>
            <RegularText
              propText="2등"
              propFontSize={"24px"}
              propFontWeight={700}
            />
            <RegularText
              propText="???"
              propFontSize={"15px"}
              propFontWeight={700}
            />
          </div>
          <DoubleText
            propText1={"??"}
            propText2={"점"}
            propText1FontSize={"26px"}
            propText2FontSize={"26px"}
            propText1FontWeight={700}
            propText2FontWeight={700}
          />
        </div>
      </div>

      {/* second */}
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <ProfileImage
            propImageCode="1_w"
            propImageWidth="106px"
            propImageHeight="106px"
          />
        </div>

        <div className={styles.text}>
          <div className={styles.textWrapper}>
            <RegularText
              propText="1등"
              propFontSize={"24px"}
              propFontWeight={700}
            />
            <RegularText
              propText="???"
              propFontSize={"15px"}
              propFontWeight={700}
            />
          </div>
          <DoubleText
            propText1={"??"}
            propText2={"점"}
            propText1FontSize={"26px"}
            propText2FontSize={"26px"}
            propText1FontWeight={700}
            propText2FontWeight={700}
          />
        </div>
      </div>

      {/* third */}
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <ProfileImage
            propImageCode="2_w"
            propImageWidth="77px"
            propImageHeight="77px"
          />
        </div>

        <div className={styles.text}>
          <div className={styles.textWrapper}>
            <RegularText
              propText="3등"
              propFontSize={"24px"}
              propFontWeight={700}
            />
            <RegularText
              propText="???"
              propFontSize={"15px"}
              propFontWeight={700}
            />
          </div>
          <DoubleText
            propText1={"??"}
            propText2={"점"}
            propText1FontSize={"26px"}
            propText2FontSize={"26px"}
            propText1FontWeight={700}
            propText2FontWeight={700}
          />
        </div>
      </div>
    </div>
  );
};

HomeRanking.propTypes = {
  propClassName: PropTypes.string,
};

export default HomeRanking;
