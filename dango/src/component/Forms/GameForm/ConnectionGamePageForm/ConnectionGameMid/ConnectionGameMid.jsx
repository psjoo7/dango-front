import styles from "./ConnectionMid.module.css";
import { RegularText } from "../../../../../component/Text/";
import PropTypes from "prop-types";

const ConnectionGameMid = ({
                               className = "",
                               propText = "3" }) => {
    return (
        <div className={styles.connectionGameMiddle}>
            <RegularText
                propClassName={styles.text}
                propText={propText}              // 동적으로 받아오는 propText
                propFontSize={"90px"}
            />

            <img
                src={`${process.env.PUBLIC_URL}/assets/images/Game/GameMainCharacter.svg`}
                alt="Game main character"
            />
        </div>
    );
};

ConnectionGameMid.propTypes = {
    className: PropTypes.string,
    propText: PropTypes.string,        // 동적으로 받을 텍스트 Prop
};

export default ConnectionGameMid;
