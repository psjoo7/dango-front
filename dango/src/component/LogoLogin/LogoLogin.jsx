import PropTypes from "prop-types";
import styles from "./LogoLogin.module.css";
import { ReactComponent as LogoImage } from "../../Image/LoginScreen/LogoImage.svg";
import { ReactComponent as LogoText } from "../../Image/LoginScreen/LogoText.svg";


const LogoLogin = ({ className = "" }) => {
    return (
        <div className={[styles.logocomponent, className].join(" ")}>
            <LogoImage
                className={styles.logoimageIcon}

            />
            <div className={styles.logotextWrapper}>
                <LogoText
                    className={styles.logotextIcon}
                />
            </div>
        </div>
    );
};

LogoLogin.propTypes = {
    className: PropTypes.string,
};

export default LogoLogin;
