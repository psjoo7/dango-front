import styles from "./LevelTestFinishPage.module.css";
import LevelTestFinishPageForm from "../../../component/Forms/LevelTestFinishPageForm/LevelTestFinishPageForm";

const LevelTestFinishPage = () => {
    return (
        <div
            className={styles.LevelTestFinishPage}
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/SignUpFinishPage/SignUpFinishImage.svg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <LevelTestFinishPageForm propUsername="이안호바보" propLevel="쌉고수" />
        </div>
    );
};

export default LevelTestFinishPage;