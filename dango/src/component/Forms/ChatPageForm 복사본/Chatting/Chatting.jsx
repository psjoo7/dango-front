import styles from "./Chatting.module.css";
import PropTypes from "prop-types";
import MyChat from "../MyChat/MyChat";
import PartnerChat from "../PartnerChat/PartnerChat";
import { useParams } from "react-router-dom";
import { useState } from "react";

const Chatting = () => {
  console.log("컴포넌트 로드됨 Chatting");
  const { roomId } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(
          // `http://localhost:8888/api/chat/rooms/${roomId}/messages`
          `https://scit45dango.site/api/chat/rooms/${roomId}/messages`
        );
        const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, [roomId]);
  return (
    <div className={styles.Chatting}>
      {messages.map((msg, index) =>
        msg.writer === userId ? (
          <MyChat key={index} propMyChat={msg.content} />
        ) : (
          <PartnerChat key={index} propPartnerChat={msg.content} />
        )
      )}
    </div>
  );
};

Chatting.propTypes = {
  className: PropTypes.string,
};

export default Chatting;
