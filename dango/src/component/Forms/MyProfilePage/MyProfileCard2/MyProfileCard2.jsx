import styles from "./MyProfileCard2.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../../component/Text/RegularText/RegularText";

const MyProfileCard2 = ({
                            propLearningRateText = "학습률",  // 학습률 텍스트 프롭
                            propLevelText = "N4"  // 레벨 텍스트 프롭
                        }) => {
    return (
        <div className={styles.card}>
            <div className={styles.left}>
                <RegularText
                    propText={propLearningRateText}  // 학습률 텍스트
                    propFontSize={"32px"}
                    propFontWeight={"700"}
                    propColor="var(--color-black)"
                />
            </div>

            <div className={styles.mid}>
                <div className={styles.rate}></div>
                <RegularText
                    propText={propLevelText}  // 레벨 텍스트
                    propFontSize={"32px"}
                    propFontWeight={"700"}
                    propColor="var(--color-black)"
                />
            </div>

            <div className={styles.right}></div>
        </div>
    );
};

MyProfileCard2.propTypes = {
    propLearningRateText: PropTypes.string,  // 학습률 텍스트 프롭
    propLevelText: PropTypes.string,         // 레벨 텍스트 프롭
};

export default MyProfileCard2;
