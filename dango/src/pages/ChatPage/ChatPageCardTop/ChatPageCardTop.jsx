import styles from "./ChatPageCardTop.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../component/Text/RegularText/RegularText";
import DoubleText from "../../../component/Text/DoubleText/DoubleText";
import Button from "../../../component/Buttons/RegularButton/RegularButton"

import { ReactComponent as Profile1} from "../../../Image/ProfileWoman/ProfileWoman9.svg";
import { ReactComponent as Profile2} from "../../../Image/ProfileWoman/ProfileWoman3.svg";

const ChatPageCardTop = () => {
    return (
        <div className={styles.card}>

            <div className={styles.contents}>

                <div className={styles.topImages}>
                    <Profile1 style={{width: '60px', height: '60px'}}/>
                    <Profile2 style={{width: '60px', height: '60px'}}/>
                </div>

                <div className={styles.topText}>
                    <DoubleText
                        text1={"???"}
                        text2={"님과 대화중"}
                        text1FontSize={"32px"}
                        text2FontSize={"26px"}

                        text1FontWeight={"900"}
                        text2FontWeight={"700"}

                        textSpacing={"5px"}
                    />
                </div>



                <div className={styles.topButton}>
                    <Button
                        buttonText={"대화 그만하기"}
                        buttonFontSize={"20px"}
                        buttonWidth={"144px"}
                        buttonHeight={"56px"}
                    />
                </div>





            </div>

        </div>
    );
};

ChatPageCardTop.propTypes = {
    className: PropTypes.string,
};

export default ChatPageCardTop;
