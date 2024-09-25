import styles from "./HomeCard4.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../component/Text/RegularText/RegularText";
import HomeRanking from "./HomeRanking/HomeRanking";
import HomeMyRanking from "./HomeMyRanking/HomeMyRanking";

const HomeCard4 = () => {
    return (
        <div className={styles.homeCard4}>
            <HomeRanking />
            <HomeMyRanking />

            <div className={styles.cardTitle}>
                <RegularText
                    propText={"학습률 랭킹"}
                    propFontSize={"25px"}
                    propFontWeight={700}
                />
            </div>
        </div>
    );
};

HomeCard4.propTypes = {
    propClassName: PropTypes.string,
};

export default HomeCard4;
