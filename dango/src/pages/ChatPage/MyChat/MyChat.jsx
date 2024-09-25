import styles from "./MyChat.module.css";
import {ReactComponent as Profile} from "../../../Image/ProfileWoman/ProfileWoman9.svg";
import RegularText from "../../../component/Text/RegularText/RegularText";

const MyChat = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.myChat}>
                <div className={styles.parent}>

                    <RegularText
                        text={"나"}
                        propFontSize={"20px"}
                        propFontWeight={700}

                    />

                    <div className={styles.chatBox}>

                        <div className={styles.textBox}>

                            <p className={styles.text}>
                                안녕하세요! 한국 노래를 통해 한국에 관심을 가지게 되셨다니
                                정말 멋지네요. 한국어를 배우고자 하는 열정이 느껴져서
                                기쁩니다. 한국어는 문법과 발음이 다른 언어들과 조금 다를 수
                                있지만, 꾸준히 공부하면 분명히 큰 성과를 얻을 수 있을 거예요.
                                있지만, 꾸준히 공부하면 분명히 큰 성과를 얻을 수 있을 거예요.
                                있지만, 꾸준히 공부하면 분명히 큰 성과를 얻을 수 있을 거예요.
                                있지만, 꾸준히 공부하면 분명히 큰 성과를 얻을 수 있을 거예요.
                                있지만, 꾸준히 공부하면 분명히 큰 성과를 얻을 수 있을 거예요.
                                있지만, 꾸준히 공부하면 분명히 큰 성과를 얻을 수 있을 거예요.
                                있지만, 꾸준히 공부하면 분명히 큰 성과를 얻을 수 있을 거예요.
                            </p>

                        </div>

                    </div>

                </div>

                <Profile style={{width: '60px', height: '60px'}}/>

            </div>
        </div>

    );
};

export default MyChat;
