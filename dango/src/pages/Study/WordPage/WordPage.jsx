import styles from "./WordPage.module.css";
import WordPageForm from "../../../component/Forms/WordPageForm/WordPageForm";

const WordPage = () => {
    return (
        <div className={styles.wordscreen}>
            <WordPageForm/>
        </div>
    );
};

export default WordPage;
