import styles from "./PasswordResetPage.module.css";
import PasswordResetPageForm from "../../../component/Forms/PasswordResetPageForm/PasswordResetPageForm";

const PasswordResetPage = () => {
    return (
        <div className={styles.PasswordResetPage}>
            <PasswordResetPageForm 
                propUserName={"이안호바보"}
            />
        </div>
    );
};

export default PasswordResetPage;
