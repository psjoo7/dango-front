import PropTypes from "prop-types";
import styles from "./GoogleButton.module.css";

const GoogleButton = ({ className = "" }) => {
  return (
    <button className={[styles.buttongooglecomponent, className].join(" ")}>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/LoginPage/GoogleLogo.svg`}
        alt="Search Icon"
      />

      <div className={styles.googletextWrapper}>
        <div className={styles.googletext}>
          <span>
            <span className={styles.signInWith}>{`Sign in with `}</span>
            <span className={styles.google}>Google</span>
          </span>
        </div>
      </div>
    </button>
  );
};

GoogleButton.propTypes = {
  className: PropTypes.string,
};

export default GoogleButton;
