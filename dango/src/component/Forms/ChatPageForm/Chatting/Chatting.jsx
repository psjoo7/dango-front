import styles from "./Chatting.module.css";
import PropTypes from "prop-types";
import MyChat from "../MyChat/MyChat";
import PartnerChat from "../PartnerChat/PartnerChat";



const Chatting = () => {
    return (
        <div className={styles.Chatting}>
            <MyChat/>
            <PartnerChat/>


        </div>

    );
};

Chatting.propTypes = {
    className: PropTypes.string,
};

export default Chatting;
