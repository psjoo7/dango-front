import styles from "./MyProfileCard2.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import DonutChart from "../../../../component/DoughnutChart/DonutChart";
import { DoubleText } from "../../../Text";

const MyProfileCard2 = ({
                            propProgress,  // 상위에서 전달받을 propProgress
                            propLearningRateText = "학습률",  // 학습률 텍스트 프롭
                            propLevelText = "N4"  // 레벨 텍스트 프롭
                        }) => {

    // propProgress를 받아서 propNonProgress 계산
    const propNonProgress = 100 - propProgress;

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
                <DonutChart
                    propNonProgress={propNonProgress}
                    propProgress={propProgress}
                />

                <DoubleText
                    propText1={propProgress}  // 진행률
                    propText2={"%"}  // % 표시

                    propText1FontSize={"50px"}
                    propText2FontSize={"50px"}

                    propFontWeight={"700"}
                    propColor="var(--color-black)"
                    propClassName={styles.percent}
                />

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

// propTypes 설정
MyProfileCard2.propTypes = {
    propProgress: PropTypes.number.isRequired,  // 진행률 필수 값
    propLearningRateText: PropTypes.string,  // 학습률 텍스트 프롭
    propLevelText: PropTypes.string,         // 레벨 텍스트 프롭
};

export default MyProfileCard2;
