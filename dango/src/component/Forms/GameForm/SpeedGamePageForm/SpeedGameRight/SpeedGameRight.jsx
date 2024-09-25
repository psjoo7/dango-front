import PropTypes from "prop-types";
import styles from "./SpeedGameRight.module.css";
import CharacterMy from "../../CharacterMy/CharacterMy";
import {RegularText} from "../../../../Text";


const SpeedGameRight = ({ className = "" }) => {
    return (
        <div className={styles.SpeedGameRight}>
            <CharacterMy
                propShowRain={false}
            />

            <div className={styles.bottom}>

                <div className={styles.hpBar}>
                    <RegularText
                        propText={"HP"}
                        propFontSize={"35px"}
                        propClassName={styles.hpText}
                    />

                    <div className={styles.hp1}/>
                    <div className={styles.hp2}/>
                    <div className={styles.hp3}/>
                    <div className={styles.hp4}/>
                    <div className={styles.hp5}/>


                </div>
                
                <RegularText 
                    propText={"정답"}
                    propFontSize={"50px"}
                />

            </div>


        </div>
    );
};

SpeedGameRight.propTypes = {
    className: PropTypes.string,
};

export default SpeedGameRight;
