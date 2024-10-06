import React from 'react';
import styles from './LoadingComponent.module.css';
import CharacterImage from "../CharacterImage/CharacterImage";
import { RegularText } from "../Text";

const LoadingComponent = () => {
    return (
        <div className={styles.LoadingComponent}>
            <div className={styles.content}>
                <div className={styles.center}>
                    <div className={styles.spinner}>
                        <div className={styles.slice}></div>
                        <div className={styles.slice}></div>
                        <div className={styles.slice}></div>
                        <div className={styles.slice}></div>
                        <div className={styles.slice}></div>
                        <div className={styles.slice}></div>
                        <div className={styles.slice}></div>
                        <div className={styles.slice}></div>
                    </div>

                    <div className={styles.CharacterImage}>
                        <CharacterImage
                            propImageCode={"2_w"}
                            propImageWidth={"164px"}
                            propImageHeight={"384px"}
                        />
                    </div>
                </div>

                <div className={styles.texts}>
                    <RegularText
                        propText={"Loading"}
                        propFontSize={"var(--font-large-title)"}
                    />
                    <RegularText
                        propText={"."}
                        propFontSize={"var(--font-large-title)"}
                        propClassName={styles.dot1}
                    />
                    <RegularText
                        propText={"."}
                        propFontSize={"var(--font-large-title)"}
                        propClassName={styles.dot2}
                    />
                    <RegularText
                        propText={"."}
                        propFontSize={"var(--font-large-title)"}
                        propClassName={styles.dot3}
                    />
                </div>
            </div>
        </div>
    );
};

export default LoadingComponent;
