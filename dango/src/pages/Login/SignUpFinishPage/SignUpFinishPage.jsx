import styles from "./SignUpFinishPage.module.css";
import SignUpFinishPageForm from "../../../component/Forms/SignUpFinishPageForm/SignUpFinishPageForm";

const SignUpFinishPage = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  return (
    <div
      className={styles.SignUpFinishPage}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/SignUpFinishPage/SignUpFinishImage.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <SignUpFinishPageForm propUsername={userInfo.nickname} />
    </div>
  );
};

export default SignUpFinishPage;
