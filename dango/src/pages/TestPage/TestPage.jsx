 import styles from "./TestPage.module.css";
import PropTypes from "prop-types";
import DoubleText from "../../component/Text/DoubleText/DoubleText";
import  {ReactComponent as GameBlack} from "../../Image/MyProfilePage/GameBlack.svg";
import TestPageHead from "./TestPageHead/TestPageHead";
import TestPageTop from "./TestPageTop/TestPageTop";
import TestPageBottom from "./TestPageBottom/TestPageBottom";
import TestPageList from "./TestList/TestPageList";


const TestPage = () => {
    return (
        <div className={styles.TestPage}>
           <TestPageHead/>

            <div className={styles.contents}>
                <TestPageTop/>

                <div className={styles.list}>
                    <TestPageList/>
                    <TestPageList/>
                    <TestPageList/>
                    <TestPageList/>
                </div>

            </div>

            <div className={styles.bottom}>
                <TestPageBottom/>
            </div>


        </div>

    );
};

TestPage.propTypes = {
    className: PropTypes.string,
};

export default TestPage;
