// MyChat.js
import styles from "./MyChat.module.css";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import ProfileImage from "../../../ProfileImage/ProfileImage";

const MyChat = ({ propMyImage, propMyChat }) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.myChat}>
        <div className={styles.parent}>
          <RegularText
            propText={"나"}
            propFontSize={"28px"}
            propFontWeight={700}
          />
          <div className={styles.chatBox}>
            <p className={styles.text}>{propMyChat}</p>
          </div>
        </div>
        <ProfileImage
          propImageWidth={"70px"}
          propImageHeight={"70px"}
          propImageCode={propMyImage}
        />
      </div>
    </div>
  );
};

export default MyChat;
