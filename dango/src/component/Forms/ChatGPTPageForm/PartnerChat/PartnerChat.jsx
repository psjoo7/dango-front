// PartnerChat.js
import styles from "./PartnerChat.module.css";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import ProfileImage from "../../../ProfileImage/ProfileImage";

const PartnerChat = ({
  propPartnerImage,
  propPartnerName = "챗GPT",
  propPartnerChat,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.partnerChat}>
        <ProfileImage
          propImageCode={propPartnerImage}
          propImageHeight={"70px"}
          propImageWidth={"70px"}
        />
        <div className={styles.parent}>
          <RegularText
            propText={propPartnerName}
            propFontSize={"28px"}
            propFontWeight={700}
          />
          <div className={styles.chatBox}>
            <p className={styles.text}>{propPartnerChat}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerChat;
