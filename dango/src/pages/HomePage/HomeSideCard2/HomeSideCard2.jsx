import styles from "./HomeSideCard2.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../component/Text/RegularText/RegularText";
import BlockText from "../../../component/Text/BlockText/BlockText";

const HomeSideCard2 = () => {
  return (
    <div className={styles.homeSideCard1}>
      <BlockText
        propFontSize={"13px"}
        propContent={"오늘의 행운을 \n확인해 보세요."}
        propFontWeight={700}
      />
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/HomePage/Omikugi.svg`}
        className={styles.characterSVG}
      />

      <div className={styles.bottom}>
        <RegularText
          propText={"오미쿠지"}
          propFontSize={"20px"}
          propFontWeight={700}
        />
      </div>
    </div>
  );
};

HomeSideCard2.propTypes = {
  propClassName: PropTypes.string,
};

export default HomeSideCard2;
