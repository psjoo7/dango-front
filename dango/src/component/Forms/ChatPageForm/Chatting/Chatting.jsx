// Chatting.js
import PropTypes from "prop-types";
import MyChat from "../MyChat/MyChat";
import PartnerChat from "../PartnerChat/PartnerChat";
import styles from "./Chatting.module.css";

const Chatting = ({ messages, myUserId }) => {
  console.log("messages ", messages);

  return (
    <div className={styles.Chatting}>
      {messages.map((message, index) =>
        message.writer === myUserId ? (
          <MyChat
            key={message.id || `myMessage-${index}`} // id가 null일 경우 index를 이용한 고유 key 설정
            propMyImage={"4_w"}
            propMyChat={message.content}
          />
        ) : (
          <PartnerChat
            key={message.id || `partnerMessage-${index}`} // id가 null일 경우 index를 이용한 고유 key 설정
            propPartnerImage={"4_m"}
            propPartnerName={"상대방"}
            propPartnerChat={message.content}
          />
        )
      )}
    </div>
  );
};

Chatting.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), // id는 숫자 또는 문자열이 될 수 있음
      content: PropTypes.string.isRequired, // 메시지 내용은 반드시 문자열
      writer: PropTypes.number.isRequired, // writer는 반드시 숫자
    })
  ).isRequired,
  myUserId: PropTypes.number.isRequired, // 현재 사용자 ID는 반드시 숫자
};

export default Chatting;
