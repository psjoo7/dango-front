import styles from "./TestEntryForm.module.css";
import PropTypes from "prop-types";
import TestEntryCard from "./TestEntryCard/TestEntryCard";
import SideBar from "../../SideBar/SideBar";

const TestEntryForm = ({
                           propFrontImageCode = "2_m", // 상위에서 하나만 전달받아 모든 카드에 사용
                           propFirstGaugePercentage = 20, // 첫 번째 카드의 게이지 퍼센트
                           propFirstBackImageCode = "1_w", // 첫 번째 카드의 백 이미지 코드
                           propFirstLink = "/review", // 첫 번째 카드의 링크

                           propSecondGaugePercentage = 50, // 두 번째 카드의 게이지 퍼센트
                           propSecondBackImageCode = "3_w", // 두 번째 카드의 백 이미지 코드
                           propSecondLink = "/review", // 두 번째 카드의 링크

                           propThirdGaugePercentage = 80, // 세 번째 카드의 게이지 퍼센트
                           propThirdBackImageCode = "4_w", // 세 번째 카드의 백 이미지 코드
                           propThirdLink = "/review", // 세 번째 카드의 링크
                       }) => {
    return (
        <div className={styles.TestEntryForm}>
            <SideBar />

            <div className={styles.cards}>
                {/* 첫 번째 카드 */}
                <TestEntryCard
                    propTitle="일간테스트" // 타이틀은 고정
                    propLink={propFirstLink}
                    propGaugePercentage={propFirstGaugePercentage}
                    propBackImageCode={propFirstBackImageCode}
                    propFrontImageCode={propFrontImageCode} // 상위에서 하나만 받아서 사용
                />

                {/* 두 번째 카드 */}
                <TestEntryCard
                    propTitle="주간테스트" // 타이틀은 고정
                    propLink={propSecondLink}
                    propGaugePercentage={propSecondGaugePercentage}
                    propBackImageCode={propSecondBackImageCode}
                    propFrontImageCode={propFrontImageCode} // 상위에서 하나만 받아서 사용
                />

                {/* 세 번째 카드 */}
                <TestEntryCard
                    propTitle="승급테스트" // 타이틀은 고정
                    propLink={propThirdLink}
                    propGaugePercentage={propThirdGaugePercentage}
                    propBackImageCode={propThirdBackImageCode}
                    propFrontImageCode={propFrontImageCode} // 상위에서 하나만 받아서 사용
                />
            </div>
        </div>
    );
};

TestEntryForm.propTypes = {
    propFrontImageCode: PropTypes.string.isRequired, // 모든 카드에서 사용할 프론트 이미지 코드
    propFirstGaugePercentage: PropTypes.number.isRequired, // 첫 번째 카드 게이지 퍼센트
    propFirstBackImageCode: PropTypes.string.isRequired, // 첫 번째 카드 백 이미지 코드
    propFirstLink: PropTypes.string.isRequired, // 첫 번째 카드 링크

    propSecondGaugePercentage: PropTypes.number.isRequired, // 두 번째 카드 게이지 퍼센트
    propSecondBackImageCode: PropTypes.string.isRequired, // 두 번째 카드 백 이미지 코드
    propSecondLink: PropTypes.string.isRequired, // 두 번째 카드 링크

    propThirdGaugePercentage: PropTypes.number.isRequired, // 세 번째 카드 게이지 퍼센트
    propThirdBackImageCode: PropTypes.string.isRequired, // 세 번째 카드 백 이미지 코드
    propThirdLink: PropTypes.string.isRequired, // 세 번째 카드 링크
};

export default TestEntryForm;
