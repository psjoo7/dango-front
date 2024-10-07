import PropTypes from "prop-types";
import styles from "./ChatModalList.module.css";
import ChatModalListElement from "../ChatModalListElement/ChatModalListElement";

const ChatModalList = ({
  className = "",
  propPostChatList = [], // 상위에서 전달된 채팅 리스트
}) => {
  return (
    <div className={styles.ChatModalList}>
      {propPostChatList.map((chat, index) => (
        <ChatModalListElement
          key={index}
          propPartnerName={chat.propPartnerName}
          propPartnerImageCode={chat.propPartnerImageCode}
          propNavigate={chat.propNavigate}
        />
      ))}
    </div>
  );
};

ChatModalList.propTypes = {
  className: PropTypes.string,
  propPostChatList: PropTypes.arrayOf(
    PropTypes.shape({
      propPartnerName: PropTypes.string.isRequired,
      propPartnerImageCode: PropTypes.string.isRequired,
      propNavigate: PropTypes.string.isRequired,
    })
  ),
};

export default ChatModalList;
