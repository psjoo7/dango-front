import styles from "./ChatPageCardLeft.module.css";
import PropTypes from "prop-types";
import DoubleText from "../../../component/Text/DoubleText/DoubleText";
import { ReactComponent as Profile} from "../../../Image/ProfileWoman/ProfileWoman3.svg";


const ChatPageCardLeft = () => {
    return (
        <div className={styles.card}>
            <div className={styles.profile}>
                <Profile style={{width: '150px', height: '150px'}}/>
                <DoubleText
                    text1={"???"}
                    text2={"님"}
                    text1FontSize={"32px"}
                    text2FontSize={"26px"}

                    text1FontWeight={"900"}
                    text2FontWeight={"700"}

                    textSpacing={"5px"}
                />
            </div>

        </div>
    );
};

ChatPageCardLeft.propTypes = {
    className: PropTypes.string,
};

export default ChatPageCardLeft;
