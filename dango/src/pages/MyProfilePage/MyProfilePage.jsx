import styles from "./MyProfilePage.module.css";
import PropTypes from "prop-types";
import MyProfileForm from "../../component/Forms/MyProfilePage/MyProfileForm";



const MyProfilePage = () => {
    return (
        <div>
            <MyProfileForm
                // Top Card (MyProfileCard1)에 전달할 프롭
                propUserName="??"
                propEmail="honggildong@example.com"
                propJapaneseLevel="N1"
                propBadge1Text="도전자"
                propBadge2Text="선구자"
                propBadge3Text="완주자"
                propBadge1Name="Badge1"
                propBadge2Name="Badge2"
                propBadge3Name="Badge3"

                // Bottom Card (MyProfileCard2)에 전달할 프롭
                propBottomLevelText="N3" // 학습률 카드
                propBottomAttendanceText="40일째" // 출석률 카드
            />

        </div>

    );
};

MyProfilePage.propTypes = {
    className: PropTypes.string,
};

export default MyProfilePage;
