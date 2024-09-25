import styles from "./SignUpPage.module.css";
import Head from "../../../component/Head/Head";
import SignUpPageForm from "../../../component/Forms/SignUpPageForm/SignUpPageForm";


const SignUpPage = () => {
    return (
        <div className={styles.SignUpPage}>
            <Head
                propMidComponent={
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/SignUpPage/Logo.svg`}
                        alt="Logo"
                    />
                }
            />

            <SignUpPageForm/>
        </div>
    );
};

export default SignUpPage;
