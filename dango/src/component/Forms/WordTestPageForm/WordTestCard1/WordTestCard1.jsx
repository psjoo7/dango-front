import styles from "./WordTestCard1.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import DoubleText from "../../../../component/Text/DoubleText/DoubleText";

const WordTestCard1 = () => {
    return (
        <div className={styles.cardBack}>

            <div className={styles.text}>
                <RegularText
                    propText={"한자"}
                    propFontSize={"25px"}
                    propFontWeight={"700"}
                />

            </div>


            <div className={styles.cardFront}>
                <RegularText
                    propText={"日本"}
                    propFontSize={"55px"}
                    propFontWeight={"bold"}
                />
            </div>

        </div>
    );
};

WordTestCard1.propTypes = {
    className: PropTypes.string,
};

export default WordTestCard1;
