import styles from "./ChatPage.module.css";
import PropTypes from "prop-types";
import SideBar from "../../component/SideBar/SideBar";
import ChatPageCardLeft from "./ChatPageCardLeft/ChatPageCardLeft";
import ChatPageCardTop from "./ChatPageCardTop/ChatPageCardTop";
import ChatBottom from "./ChatBottom/ChatBottom";


const ChatPage = () => {
    return (
        <div className={styles.page}>
            <SideBar/>

            <div className={styles.contents}>
                <div className={styles.left}>
                    <ChatPageCardLeft/>
                </div>


                <div className={styles.top}>
                    <ChatPageCardTop/>
                </div>


                <div className={styles.bottom}>
                    <ChatBottom/>
                </div>
            </div>


        </div>

    );
};

ChatPage.propTypes = {
    className: PropTypes.string,
};

export default ChatPage;
