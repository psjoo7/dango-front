import styles from "./HomeCard1.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../component/Text/RegularText/RegularText";
import InCard1 from "./InCard1/InCard1";
import InCard2 from "./InCard2/InCard2";
import InCard3 from "./InCard3/InCard3";

const HomeCard1 = () => {
  return (
    <div className={styles.homeCard1}>
      <div className={styles.cardTitle}>
        <RegularText
          propText={"공부하기"}
          propFontSize={"25px"}
          propFontWeight={700}
        />
      </div>

      <div className={styles.inCard}>
        <InCard1 />
        <InCard2 />
        <InCard3 />
      </div>
    </div>
  );
};

HomeCard1.propTypes = {
  className: PropTypes.string,
};

export default HomeCard1;
