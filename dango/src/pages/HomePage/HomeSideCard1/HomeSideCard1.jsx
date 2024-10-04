import styles from "./HomeSideCard1.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../component/Text/RegularText/RegularText";
import DoubleText from "../../../component/Text/DoubleText/DoubleText";
import { useState, useEffect } from "react";
const HomeSideCard1 = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [mileage, setMileage] = useState(user.userMileage);
  return (
    <div className={styles.homeSideCard1}>
      <RegularText
        propText={"보유 마일리지"}
        propFontSize={"15px"}
        propColor={"var(--color-black)"}
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/HomePage/Coins.svg`}
        className={styles.characterSVG}
      />

      <div className={styles.bottom}>
        <DoubleText
          propText1={mileage}
          propText2={"Point"}
          propText1FontSize={"20px"}
          propText2FontSize={"20px"}
          propText1FontWeight={700}
          propText2FontWeight={700}
          propTextSpacing={"3px"}
        />
      </div>
    </div>
  );
};

HomeSideCard1.propTypes = {
  propClassName: PropTypes.string,
};

export default HomeSideCard1;
