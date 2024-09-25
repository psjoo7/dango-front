import styles from "./ConnectionGamePage.module.css"
import ConnectionGamePageForm from "../../../component/Forms/GameForm/ConnectionGamePageForm/ConnectionGamePageForm";





const ConnectionGamePage = () => {
    return (
        <ConnectionGamePageForm
            propCount="100"                    // 첫 번째 텍스트 (카운트)
            propFirstBoxText="사자"         // 첫 번째 박스 텍스트
            propProfileImageCode="2_w"        // 프로필 이미지 코드
            propShowGameLose={false}           // GameLose 이미지 표시 여부
            propShowProfile={true}           // 프로필 이미지 표시 여부
            propCharacterCodeMy="8_w"         // CharacterMy 캐릭터 이미지 코드
            propShowHeartMy={true}           // CharacterMy 하트 이미지 표시 여부
            propShowRainMy={false}             // CharacterMy 레인 이미지 표시 여부
            propMidText="안녕"         // 중간 텍스트
        />
    );
};

export default ConnectionGamePage;





