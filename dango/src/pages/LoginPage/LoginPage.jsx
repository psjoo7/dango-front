import LoginLogo from "../../components/Icons/LoginLogo/LoginLogo";
import { LoginForm } from "../../components/forms";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.loginscreen}>
      <div className={styles.content}>
        <div className={styles.branding}>
          <LoginLogo />
        </div>
        <LoginForm />
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/LoginPage/LoginMain.svg`}
          className={styles.backgroundIcon}
          alt="Login Icon"
        />
      </div>
    </div>
  );
};

export default LoginPage;
