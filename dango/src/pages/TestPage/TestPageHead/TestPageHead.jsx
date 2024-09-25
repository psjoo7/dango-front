import Button from "../../../component/Buttons/RegularButton/RegularButton";
import RegularText from "../../../component/Text/RegularText/RegularText";
import DoubleText from "../../../component/Text/DoubleText/DoubleText";
import PropTypes from "prop-types";
import styles from "./TestPageHead.module.css";
import { ReactComponent as HomeIcon } from "../../../Image/WordPage/HomeIcon.svg";
import { ReactComponent as LogoText } from "../../../Image/WordPage/LogoText.svg";

const TestPageHead = ({ className = "" }) => {
    return (
        <div className={styles.TestPageHead}>
            <div className={styles.left}>
                <RegularText
                    text={"레벨테스트"}
                    propFontWeight={"700"}
                    propFontSize={"32px"}
                    propColor={"var(--color-white)"}
                />
            </div>

            <div className={styles.mid}>
                <LogoText/>
            </div>

            <div className={styles.right}>
                <div className={styles.info}>
                    <DoubleText
                        text1={"4"}
                        text2={"번째 / 20번째"}

                        text1FontSize={"20px"}
                        text2FontSize={"20px"}

                        text1FontWeight={700}
                        text2FontWeight={700}
                    />
                </div>
            </div>
        </div>
    );
};

TestPageHead.propTypes = {
    className: PropTypes.string,
};

export default TestPageHead;
