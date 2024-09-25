import styles from "./TestPageTop.module.css";
import {ReactComponent as Profile} from "../../../Image/ProfileWoman/ProfileWoman3.svg";
import RegularText from "../../../component/Text/RegularText/RegularText";
import BlockText from "../../../component/Text/BlockText/BlockText";
import React from "react";

const TestPageTop = () => {
    return (
        <div className={styles.TestPageTop}>

                    <RegularText
                        text={"문제 1"}
                        propFontSize={"38px"}
                        propFontWeight={700}
                        propColor={"var(--color-gray2)"}
                    />

                    <div className={styles.question}>
                        <BlockText
                            propContent={"1일 방송업계에 따르면 김지훈은 최근 ‘다 이루어질지니’ 촬영을 마쳤다." +
                                "1일 방송업계에 따르면 김지훈은 최근 ‘다 이루어질지니’ 촬영을 마쳤다." +
                                "1일 방송업계에 따르면 김지훈은 최근 ‘다 이루어질지니’ 촬영을 마쳤다." +
                                "1일 방송업계에 따르면 김지훈은 최근 ‘다 이루어질지니’ 촬영을 마쳤다." +
                                "1일 방송업계에 따르면 김지훈은 최근 ‘다 이루어질지니’ 촬영을 마쳤다."}
                            propFontSize={"22px"}
                            propFontWeight={700}
                            propLineHeight={1.8}
                        />
                </div>
            </div>
    );
};

export default TestPageTop;
