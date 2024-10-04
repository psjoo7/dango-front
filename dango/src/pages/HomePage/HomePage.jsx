import styles from "./HomePage.module.css";
import PropTypes from "prop-types";
import SideBar from "../../component/SideBar/SideBar";
import HomeCard1 from "./HomeCard1/HomeCard1";
import HomeCard2 from "./HomeCard2/HomeCard2";
import HomeCard3 from "./HomeCard3/HomeCard3";
import HomeCard4 from "./HomeCard4/HomeCard4";
import HomeSideCard1 from "./HomeSideCard1/HomeSideCard1";
import HomeSideCard2 from "./HomeSideCard2/HomeSideCard2";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <SideBar />

      <div className={styles.contents}>
        <div className={styles.top}>
          <HomeCard1 />
          <HomeCard2 />
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomMainCard}>
            <HomeCard3 />
            <HomeCard4 />
          </div>

          <div className={styles.sideCard}>
            <HomeSideCard1 />
            <HomeSideCard2 />
          </div>
        </div>
      </div>
    </div>
  );
};

HomePage.propTypes = {
  propClassName: PropTypes.string,
};

export default HomePage;
