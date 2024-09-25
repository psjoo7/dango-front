import styles from "./ChatBottom.module.css";
import {ReactComponent as CoinIcon} from "../../../Image/MessageePage/CoinIcon.svg";
import {ReactComponent as SendIcon} from "../../../Image/MessageePage/SendIcon.svg";
import DoubleText from "../../../component/Text/DoubleText/DoubleText";
import RegularText from "../../../component/Text/RegularText/RegularText";
import Button from "../../../component/Buttons/RegularButton/RegularButton";

const ChatBottom = () => {
    return (
        <div className={styles.ChatBottom}>
            <div className={styles.wrap}>

                <div className={styles.point}>
                    <CoinIcon/>

                    <div className={styles.pointText}>
                        <RegularText
                            text={"남은 마일리지"}
                            propFontSize={"13px"}
                            propFontWeight={500}
                        />

                        <DoubleText
                            text1={"400"}
                            text2={"Point"}

                            text1FontSize={"20px"}
                            text2FontSize={"20px"}

                            text1FontWeight={"700"}
                            text2FontWeight={"700"}
                        />
                    </div>
                </div>

                <div className={styles.chatBox}>
                    <div className={styles.scrollContent}> {/* 스크롤 컨텐츠용 내부 박스 */}
                        <p className={styles.text}>
                            안녕하세요! 한국 노래를 통해 한국에 관심을 가지게 되셨다.
                        </p>
                    </div>
                </div>

                <Button
                    buttonIcon={<SendIcon/>}
                    buttonWidth={"224px"}
                    buttonHeight={"77.2px"}
                    buttonText={"메세지 보내기"}
                    buttonFontSize={"25px"}
                    buttonFontWeight={"700"}
                    buttonColor={"var(--color-main)"} // 배경색
                    buttonHover={false} // hover 비활성화
                    buttonBorderRadius={"15px"}
                    buttonBorder={"4px solid black"}
                />


            </div>

        </div>

    );
};

export default ChatBottom;
