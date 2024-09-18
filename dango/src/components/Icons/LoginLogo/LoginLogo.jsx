import PropTypes from "prop-types";
import styles from "./LoginLogo.module.css";

const LoginLogo = ({ className = "" }) => {
  return (
    <div className={[styles.logocomponent, className].join(" ")}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/LoginPage/LogoImage.svg`}
        alt="Logo Icon"
      />
      <div className={styles.logotextWrapper}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/LoginPage/LogoText.svg`}
          alt="Logo Text Icon"
        />
      </div>
    </div>
  );
};

LoginLogo.propTypes = {
  className: PropTypes.string,
};

export default LoginLogo;
