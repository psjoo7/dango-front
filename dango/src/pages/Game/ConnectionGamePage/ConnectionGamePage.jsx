import ConnectionGamePageForm from "../../../component/Forms/GameForm/ConnectionGamePageForm/ConnectionGamePageForm";
import {useState} from "react";





const ConnectionGamePage = () => {

    const [myAnswer, setMyAnswer] = useState(""); // 나의 입력 값을 저장하는 상태

    // 나의 입력 값을 처리하는 함수
    const handleMyAnswerSubmit = (answer) => {
        console.log("상위 컴포넌트에서 받은 나의 입력 값:", answer);
        setMyAnswer(answer); // 나의 입력 값을 상태로 저장
    };

    return (
        <div>
            {/* ConnectionGamePageForm 컴포넌트에 필요한 props 전달 */}
            <ConnectionGamePageForm
                propCount="2"
                propFirstBoxText="안녕"
                propProfileImageCode="2_w"
                propShowGameLose={false}
                propShowProfile={true}
                propCharacterCodeMy="5_m"
                propShowHeartMy={false}
                propShowRainMy={true}
                propMidText="중간 텍스트"
                propCharacterCodePartner={"5_w"}

                /* 나의 입력 값 처리 함수 전달 */
                handleAnswerSubmit={handleMyAnswerSubmit} // 나의 입력 값을 처리하는 함수 전달
            />

        </div>
    );
};

export default ConnectionGamePage;





