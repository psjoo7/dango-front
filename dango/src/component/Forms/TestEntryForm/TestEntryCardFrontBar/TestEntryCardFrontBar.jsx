import React from "react";
import styles from "./TestEntryCardFrontBar.module.css";
import PropTypes from "prop-types";
import { DoubleText } from "../../../Text";

const TestEntryCardFrontBar = ({ propGaugePercentage = 60 }) => {
    return (
        <div className={styles.TestEntryCardFrontBar}>
            <div className={styles.wrapper}>
                <div className={styles.bar1}></div>
                <DoubleText
                    propText1={"25"}
                    propText2={"%"}
                    propText1FontSize={"16px"}
                    propText2FontSize={"16px"}
                    propTextSpacing={"0px"}
                />
            </div>

            <div className={styles.wrapper}>
                <div className={styles.bar2}></div>
                <DoubleText
                    propText1={"50"}
                    propText2={"%"}
                    propText1FontSize={"16px"}
                    propText2FontSize={"16px"}
                    propTextSpacing={"0px"}
                />
            </div>

            <div className={styles.wrapper}>
                <div className={styles.bar3}></div>
                <DoubleText
                    propText1={"75"}
                    propText2={"%"}
                    propText1FontSize={"16px"}
                    propText2FontSize={"16px"}
                    propTextSpacing={"0px"}
                />
            </div>

            <div className={styles.wrapper}>
                <div className={styles.bar4}></div>
                <DoubleText
                    propText1={"100"}
                    propText2={"%"}
                    propText1FontSize={"16px"}
                    propText2FontSize={"16px"}
                    propTextSpacing={"0px"}
                />
            </div>

            <div
                className={styles.gauge}
                style={{
                    width: `${propGaugePercentage}%`,
                    borderRadius:
                        propGaugePercentage === 100
                            ? "30px"
                            : "30px 0 0 30px", // 100%일 때만 둥글게 처리
                }}
            ></div>
        </div>
    );
};

TestEntryCardFrontBar.propTypes = {
    propGaugePercentage: PropTypes.number.isRequired,
};

export default TestEntryCardFrontBar;
