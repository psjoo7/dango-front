import styles from "./HomeMyRanking.module.css";
import PropTypes from "prop-types";
import DoubleText from "../../../../component/Text/DoubleText/DoubleText";
import ProfileImage from "../../../../component/ProfileImage/ProfileImage";

const HomeMyRanking = ({ propClassName = "" }) => {
  return (
    <div className={[styles.myRanking, propClassName].join(" ")}>
      <div className={styles.myProfile}>
        <ProfileImage propImageWidth="43px" propImageHeight="43px" />

        <DoubleText
          propText1={"??"}
          propText2={"님"}
          propText1FontSize={"22px"}
          propText2FontSize={"22px"}
        />
      </div>

      <DoubleText
        propText1={"??"}
        propText2={"점"}
        propText1FontSize={"22px"}
        propText2FontSize={"22px"}
        propText1Color={"black"}
        propText2Color={"black"}
      />

      <DoubleText
        propText1={"??"}
        propText2={"등"}
        propText1FontSize={"34px"}
        propText2FontSize={"34px"}
        propText1Color={"black"}
        propText2Color={"black"}
      />
    </div>
  );
};

HomeMyRanking.propTypes = {
  propClassName: PropTypes.string,
};

export default HomeMyRanking;
