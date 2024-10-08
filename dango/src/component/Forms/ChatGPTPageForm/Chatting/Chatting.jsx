import styles from "./Chatting.module.css";
import MyChat from "../MyChat/MyChat";
import PartnerChat from "../PartnerChat/PartnerChat";

const Chatting = ({ conversation }) => {
  return (
    <div className={styles.Chatting}>
      {conversation.map((msg, index) =>
        msg.role === "user" ? (
          <MyChat key={index} propMyChat={msg.content} propMyImage={"4_w"} />
        ) : (
          <PartnerChat
            key={index}
            propPartnerChat={msg.content}
            propPartnerImage={"3_m"}
          />
        )
      )}
    </div>
  );
};

export default Chatting;
