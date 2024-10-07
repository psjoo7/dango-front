import styles from "./ChatForm.module.css";
import PropTypes from "prop-types";
import SideBar from "../../../component/SideBar/SideBar";
import ChatPageCardLeft from "./ChatPageCardLeft/ChatPageCardLeft";
import ChatPageCardTop from "./ChatPageCardTop/ChatPageCardTop";
import ChatBottom from "./ChatBottom/ChatBottom";
import Chatting from "./Chatting/Chatting";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ChatForm = () => {
  const { roomId } = useParams();
  useEffect(() => {
    console.log("ChatForm");
    console.log(roomId);
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
