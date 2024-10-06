import styles from "./LevelTestFinishPage.module.css";
import LevelTestFinishPageForm from "../../../component/Forms/LevelTestFinishPageForm/LevelTestFinishPageForm";

const LevelTestFinishPage = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const level = sessionStorage.getItem("setLevel");
  return (
    <div
      className={styles.LevelTestFinishPage}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/SignUpFinishPage/SignUpFinishImage.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <LevelTestFinishPageForm
        propUsername={userInfo.nickname}
        propLevel={level}
      />
    </div>
  );
};

export default LevelTestFinishPage;
