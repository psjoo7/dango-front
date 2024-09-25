import styles from "./HomeCard2.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../component/Text/RegularText/RegularText";
import HomeCard2List from "./HomeCard2List/HomeCard2List";

const HomeCard2 = () => {
    return (
        <div className={styles.homeCard2}>
            <div className={styles.cardTitle}>
                <RegularText
                    propText={"당고톡"}
                    propFontSize={"25px"}
                    propFontWeight={700}
                />
            </div>

            <div className={styles.List}>
                <HomeCard2List
                    propDashedLineWidth={"210px"}
                />

                <HomeCard2List
                    propCircleColor={"var(--color-dangoPink)"}
                    propText={"문법"}
                    propPercentageText1={"80"}
                    propDashedLineWidth={"210px"}
                />

                <HomeCard2List
                    propCircleColor={"var(--color-dangoGreen)"}
                    propText={"청해"}
                    propPercentageText1={"70"}
                    propDashedLineWidth={"210px"}
                />

                <HomeCard2List
                    propCircleColor={"var(--color-gray1)"}
                    propText={"미진행"}
                    propPercentageText1={"17"}
                    propDashedLineWidth={"195px"}
                />
            </div>
        </div>
    );
};

HomeCard2.propTypes = {
    propClassName: PropTypes.string,
};

export default HomeCard2;
