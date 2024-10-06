import styles from "./HomeSideCard2.module.css";
import PropTypes from "prop-types";
import RegularText from "../../../component/Text/RegularText/RegularText";
import BlockText from "../../../component/Text/BlockText/BlockText";

const HomeSideCard2 = ({ propOnCardClick }) => {
    return (
        <div className={styles.homeSideCard1} onClick={propOnCardClick}> {/* 카드 클릭 시 상위 함수 실행 */}
            <BlockText
                propFontSize={"13px"}
                propContent={"오늘의 행운을 \n확인해 보세요."}
                propFontWeight={700}
            />
            <img
                src={`${process.env.PUBLIC_URL}/assets/images/Home/Omikugi.svg`}
                className={styles.Omikuji}
                alt="OmikujiBox"
            />

            <div className={styles.bottom}>
                <RegularText
                    propText={"오미쿠지"}
                    propFontSize={"20px"}
                    propFontWeight={700}
                />
            </div>
        </div>
    );
};

HomeSideCard2.propTypes = {
    propOnCardClick: PropTypes.func.isRequired, // 카드 클릭 시 실행할 함수가 필수적으로 필요함
};

export default HomeSideCard2;
