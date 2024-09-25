import styles from "./WordTestPageForm.module.css";
import WordCard1 from "./WordTestCard1/WordTestCard1";
import WordTestCard2 from "./WordTestCard2/WordTestCard2";

import Button from "../../../component/Buttons/RegularButton/RegularButton";
import DoubleText from "../../../component/Text/DoubleText/DoubleText";
import WordListTop from "../../../component/Word/WordListTop/WordListTop";
import Head from "../../Head/Head";
import NavigationMenu from "../../NavigationMenu/NavigationMenu";
import React from "react";

const WordTestPageForm = () => {
    return (
        <div className={styles.backGround}>
            <Head
                propLeftComponent={<NavigationMenu />}
                propMidComponent={
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/Head/LogoText.svg`}
                        alt="LogoText"
                    />
                }
            />


            <div className={styles.wrapper}>

                <WordListTop
                    propWidth={"1000px"}
                    propHeight={"110px"}
                />
                <WordCard1 />

                <div className={styles.cards}>
                    <WordTestCard2
                        propTitle={"요미가나"}
                        propContent={"にほん"}
                    />
                    <WordTestCard2
                        propTitle={"뜻"}
                        propContent={"일본"}
                    />
                </div>

                <div className={styles.bottom}>
                    <div className={styles.leftButton}>
                        <Button
                            propHeight={"50px"}
                            propWidth={"120px"}
                            propText={"단어 보러 가기"}
                            propBorder={"4px solid black"}
                        />
                    </div>

                    <div className={styles.midText}>
                        <DoubleText
                            propText1={"??"}
                            propText2={"/20"}
                            propText1FontSize={"30px"}
                            propText2FontSize={"30px"}
                            propText1FontWeight={"bold"}
                            propText2FontWeight={"bold"}
                        />
                    </div>

                    <div className={styles.rightButtons}>
                        <Button
                            propHeight={"50px"}
                            propWidth={"120px"}
                            propText={"알아!"}
                            propBorder={"4px solid black"}
                        />

                        <Button
                            propHeight={"50px"}
                            propWidth={"120px"}
                            propText={"몰라!"}
                            propBorder={"4px solid black"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WordTestPageForm;
