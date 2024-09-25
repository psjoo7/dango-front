import SideBar from "../../../../component/SideBar/SideBar";
import SpeedGameLeft from "./SpeedGameLeft/SpeedGameLeft";
import SpeedGameRight from "./SpeedGameRight/SpeedGameRight";
import Middle from "./SpeedGameMid/SpeedGameMid"
import styles from "./SpeedGamePageForm.module.css";




const SpeedGamePageForm = () => {
    return (
        <div className={styles.backGround}>
            <SideBar/>

            <div className={styles.contents}>
                <SpeedGameLeft/>
                <Middle className={styles.middle}/>
                <SpeedGameRight/>
            </div>





        </div>
    );
};

export default SpeedGamePageForm;





