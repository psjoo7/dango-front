import styles from "./LoginPage.module.css";
import { LoginPageForm } from "../../../component/Forms";

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <LoginPageForm />
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/LoginPage/LoginMain.svg`}
        className={styles.logo}
        alt="Login main"
      />
    </div>
  );
};

export default LoginPage;
