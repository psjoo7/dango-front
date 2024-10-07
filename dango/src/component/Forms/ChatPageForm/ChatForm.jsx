// ChatForm.js
import styles from "./ChatForm.module.css";
import PropTypes from "prop-types";
import SideBar from "../../../component/SideBar/SideBar";
import ChatPageCardLeft from "./ChatPageCardLeft/ChatPageCardLeft";
import ChatPageCardTop from "./ChatPageCardTop/ChatPageCardTop";
import ChatBottom from "./ChatBottom/ChatBottom";
import Chatting from "./Chatting/Chatting";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ChatForm = () => {
  const { roomId } = useParams();
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const [chatRoomInfo, setChatRoomInfo] = useState(null);
  const [messages, setMessages] = useState([]); // 메시지 목록 상태 추가

  useEffect(() => {
    const fetchChatRoomDetails = async () => {
      try {
        // const response = await axios.get(
        //   `http://localhost:8888/api/chat/rooms/${roomId}`
        // );
        const response = await axios.get(
          `https://scit45dango.site/api/chat/rooms/${roomId}`
        );
        setChatRoomInfo(response.data);
        setMessages(response.data.messages); // 메시지 목록 초기화
        console.log("채팅방 정보:", response.data);
      } catch (error) {
        console.error("채팅방 정보를 가져오는 중 오류 발생:", error);
      }
    };

    fetchChatRoomDetails();
  }, [roomId]);

  const handleSendMessage = (newMessage) => {
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  if (!chatRoomInfo) {
    return <div>Loading...</div>;
  }

  // 현재 사용자의 userId와 비교하여 나와 상대방 설정
  const myUser = chatRoomInfo.users.find(
    (user) => user.roomUserId === userInfo.userId
  );
  const partnerUser = chatRoomInfo.users.find(
    (user) => user.roomUserId !== userInfo.userId
  );

  return (
    <div className={styles.page}>
      <SideBar />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <ChatPageCardLeft
            propPartnerImage={"2_m"}
            propPartnerName={partnerUser.nickname}
          />
        </div>
        <div className={styles.contents}>
          <div className={styles.top}>
            <ChatPageCardTop
              propMyImage={"4_w"}
              propPartnerImage={"4_m"}
              propPartnerName={partnerUser.nickname}
            />
          </div>
          <Chatting
            className={"Chatting"}
            messages={messages}
            myUserId={myUser.roomUserId} // 현재 사용자 ID 전달
          />
          <div className={styles.bottom}>
            <ChatBottom
              roomId={roomId}
              recipeTo={partnerUser.roomUserId} // 상대방의 ID 전달
              onSendMessage={handleSendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

ChatForm.propTypes = {
  className: PropTypes.string,
};

export default ChatForm;
