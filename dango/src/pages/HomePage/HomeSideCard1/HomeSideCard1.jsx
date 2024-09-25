import styles from "./HomeSideCard1.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../component/Text/RegularText/RegularText";
import DoubleText from "../../../component/Text/DoubleText/DoubleText";

const HomeSideCard1 = () => {
  return (
    <div className={styles.homeSideCard1}>
      <RegularText
        propText={"오늘 획득한 마일리지"}
        propFontSize={"11px"}
        propColor={"var(--color-black)"}
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/HomePage/Coins.svg`}
        className={styles.characterSVG}
      />

      <div className={styles.bottom}>
        <DoubleText
          propText1={"100"}
          propText2={"Point"}
          propText1FontSize={"20px"}
          propText2FontSize={"20px"}
          propText1FontWeight={700}
          propText2FontWeight={700}
          propTextSpacing={"3px"}
        />

        <DoubleText
          propText1={"보유 마일리지"}
          propText2={"1,500"}
          propText1FontSize={"10px"}
          propText2FontSize={"10px"}
          propText1FontWeight={500}
          propText2FontWeight={500}
          propText1Color={"var(--color-gray3)"}
          propText2Color={"var(--color-gray3)"}
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
