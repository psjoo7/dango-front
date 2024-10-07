import styles from "./MyChat.module.css";
import RegularText from "../../../../component/Text/RegularText/RegularText";
import ProfileImage from "../../../ProfileImage/ProfileImage";

const MyChat = ({
  propMyImage,
  propMyChat = "dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.myChat}>
        <div className={styles.parent}>
          <RegularText
            propText={"나"}
            propFontSize={"20px"}
            propFontWeight={700}
          />

          <div className={styles.chatBox}>
            <div className={styles.textBox}>
              <p className={styles.text}>
                {propMyChat}{" "}
                {/* 상위 컴포넌트에서 받은 채팅 메시지 prop 사용 */}
              </p>
            </div>
          </div>
        </div>

        <ProfileImage
          propImageWidth={"60px"}
          propImageHeight={"60px"}
          propImageCode={propMyImage} // 상위 컴포넌트에서 받은 이미지 prop 사용
        />
      </div>
    </div>
  );
};

export default MyChat;
