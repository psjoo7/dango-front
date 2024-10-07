import styles from "./PartnerChat.module.css";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import ProfileImage from "../../../ProfileImage/ProfileImage";

const PartnerChat = ({ propPartnerImage = "3_w", propPartnerName = "ddd",
                         propPartnerChat="dddd" }) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.partnerChat}>
                <ProfileImage
                    propImageCode={propPartnerImage} // 상위 컴포넌트에서 받은 이미지 사용
                    propImageHeight={"60px"}
                    propImageWidth={"60px"}
                />

                <div className={styles.parent}>
                    <RegularText
                        propText={propPartnerName} // 상위 컴포넌트에서 받은 이름 사용
                        propFontSize={"20px"}
                        propFontWeight={700}
                    />

                    <div className={styles.chatBox}>
                        <div className={styles.textBox}>
                            <p className={styles.text}>
                                {propPartnerChat} {/* 상위 컴포넌트에서 받은 채팅 내용 사용 */}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerChat;
