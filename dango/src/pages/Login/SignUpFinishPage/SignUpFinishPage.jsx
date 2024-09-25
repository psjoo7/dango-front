import styles from "./SignUpFinishPage.module.css";
import SignUpFinishPageForm from "../../../component/Forms/SignUpFinishPageForm/SignUpFinishPageForm";

const SignUpFinishPage = () => {
    return (
        <div
            className={styles.SignUpFinishPage}
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/SignUpFinishPage/SignUpFinishImage.svg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <SignUpFinishPageForm
                propUsername={"이안호 바보"}
            />
        </div>
    );
};

export default SignUpFinishPage;