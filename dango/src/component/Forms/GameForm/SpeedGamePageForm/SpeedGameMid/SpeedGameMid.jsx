import PropTypes from "prop-types";
import {InputText} from "../../../../Input";
import styles from "./SpeedGameMid.module.css";
import {RegularText,DoubleText} from "../../../../../component/Text/";



const SpeedGameMid = ({ className = "" }) => {
    return (


        <div className={styles.background}>

            <div className={styles.title}>
                <RegularText
                    propText="빨리 쓰기 게임"
                    propColor="var(--color-black)"
                    propFontSize={"50px"}
                />

            </div>

            <div className={styles.texts}>

                <div className={styles.count}>
                    <RegularText
                        propText="남은 문제 :"
                        propColor="var(--color-gray3)"
                        propFontSize={"var(--font-title3)"}
                    />

                    <DoubleText
                        propText1="2"
                        propText2="/10"
                        propText1Color={"var(--color-gray3)"}
                        propText2Color={"var(--color-gray3)"}
                        propText1FontSize={"var(--font-title3)"}
                        propText2FontSize={"var(--font-title3)"}
                    />
                </div>


                <div className={styles.time}>
                    <RegularText
                        propText="남은시간 :"
                        propFontSize={"35px"}
                    />

                    <DoubleText
                        propText1="??"
                        propText2="초"
                        propText1FontSize={"35px"}
                        propText2FontSize={"35px"}
                    />
                </div>
            </div>


            <div style={{paddingBottom: "30px"}}>
                <RegularText
                    propText="3"
                    propColor="var(--color-black)"
                    propFontSize={"100px"}
                    propFontWeight={"900"}
                />

            </div>


            <div style={{paddingBottom: "50px"}}>

                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/Game/GameMainCharacter.svg`}
                    alt="Game Main Character"
                />

            </div>

            <div>
                <InputText
                    propWidth={"250px"}
                    propHeight={"60px"}
                    propBorderRadius={"25px"}
                    propPlaceholder={"정답 작성"}
                    propBorder={"5px solid var(--color-black)"}
                    className={styles.inputText}
                />
            </div>


        </div>
    )
};

SpeedGameMid.propTypes = {
    className: PropTypes.string,
};

export default SpeedGameMid;
