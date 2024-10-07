import styles from "./ChatForm.module.css";
import PropTypes from "prop-types";
import SideBar from "../../../component/SideBar/SideBar";
import ChatPageCardLeft from "./ChatPageCardLeft/ChatPageCardLeft";
import ChatPageCardTop from "./ChatPageCardTop/ChatPageCardTop";
import ChatBottom from "./ChatBottom/ChatBottom";
import Chatting from "./Chatting/Chatting";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ChatForm = () => {
  const location = useLocation();
  const { roomId } = location.state || {}; // roomId 추출
  console.log("uaaaaaa");
  useEffect(() => {
    console.log("uaaaaaa");
    console.log(location);
    if (roomId) {
      console.log("현재 roomId:", roomId);
    } else {
      console.log("roomId가 제공되지 않았습니다.");
    }
  }, []);

  return (
    <div className={styles.page}>
      <SideBar />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <ChatPageCardLeft propPartnerImage={"2_m"} propPartnerName={"2_m"} />
        </div>
        <div className={styles.contents}>
          <div className={styles.top}>
            <ChatPageCardTop
              propMyImage={"4_w"}
              propPartnerImage={"4_m"}
              propPartnerName={"안녕"}
            />
          </div>
          <Chatting className={"Chatting"} />
          <div className={styles.bottom}>
            <ChatBottom roomId={roomId} />
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
