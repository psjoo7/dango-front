import styles from "./HomeCard1Rate.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import DoubleText from "../../../../component/Text/DoubleText/DoubleText";

const HomeCard1Rate = () => {
  return (
    <div className={styles.homeCard1Rate}>
      <DoubleText
        propText1={"100"}
        propText2={"%"}
        propText1FontSize={"18px"}
        propText2FontSize={"18px"}
        propText1FontWeight={"700"}
        propText2FontWeight={"700"}
      />

      <RegularText
        propText={"진행률"}
        propFontWeight={"700"}
        propFontSize={"18px"}
      />
    </div>
  );
};

HomeCard1Rate.propTypes = {
  className: PropTypes.string,
};

export default HomeCard1Rate;
