import axios from "axios";
import ConnectionGamePageForm from "../../../component/Forms/GameForm/ConnectionGamePageForm/ConnectionGamePageForm";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ConnectionGamePage = () => {
  const [gptResponse, setGptResponse] = useState(""); // GPT의 응답을 저장하는 상태
  const userInfo = JSON.parse(localStorage.getItem("user")); // 사용자 정보 로컬스토리지에서 가져오기
  const navigate = useNavigate();
  const isRelayCalled = useRef(false); // 중복 호출 방지를 위한 useRef
  const [gameScore, setGameScore] = useState(0); // 게임 점수

  // 사용자가 단어를 입력하고 전달하는 함수
  const relayWord = async (answer) => {
    if (isRelayCalled.current) return; // 이미 호출되었으면 중단
    isRelayCalled.current = true;

    try {
      const response = await axios.post(
        // "https://scit45dango.site/api/game/wordRelay/relay",
        "https://scit45dango.site/api/game/wordRelay/relay",
        { word: answer }
      );
      const responseData = response.data.trim();
      setGptResponse(responseData); // GPT 응답을 상태로 저장
      console.log("relay : ", responseData);

      // 게임 종료 조건 처리
      if (responseData.includes("YOU LOSE")) {
        alert("YOU LOSE! 게임이 종료됩니다.");
        await updateMileageAndRanking(gameScore); // 점수 전송 후 게임 종료
        navigate("/home"); // 홈으로 이동
      } else if (responseData.includes("YOU WIN")) {
        const finalScore = gameScore + 500; // 승리 시 500점 추가
        alert("YOU WIN! 게임이 종료됩니다.");
        await updateMileageAndRanking(finalScore); // 점수 전송 후 게임 종료
        navigate("/home"); // 홈으로 이동
      } else {
        setGameScore((prevScore) => prevScore + 1); // 게임 지속 시 점수 증가
      }
    } catch (error) {
      console.log("Relay Word Error: ", error);
      alert("오류가 발생했습니다. 게임을 종료합니다.");
      navigate("/home");
    } finally {
      isRelayCalled.current = false; // 함수 종료 후 다시 호출 가능 상태로 변경
    }
  };

  // 게임 시작 함수 (첫 단어 받아오기)
  const getStarted = async () => {
    try {
      const response = await axios.post(
        // "https://scit45dango.site/api/game/wordRelay/start",
        "https://scit45dango.site/api/game/wordRelay/start",
        { userId: userInfo.userId }
      );
      console.log("get started Data: ", response.data);
      setGptResponse(response.data.trim()); // GPT의 첫 단어를 상태에 저장
      setGameScore(0); // 점수 초기화
    } catch (error) {
      console.log("connection game error", error);
    }
  };

  // 게임 결과를 서버에 전송하는 함수
  const updateMileageAndRanking = async (score) => {
    try {
      const response = await axios.post(
        // "https://scit45dango.site/api/game/wordRelay/result",
        "https://scit45dango.site/api/game/wordRelay/result",
        {
          userId: userInfo.userId,
          gameScore: score,
        }
      );
      console.log("Game result updated:", response.data);
    } catch (error) {
      console.log("Error updating game result:", error);
    }
  };

  // 게임을 시작할 때 한 번만 getStarted 함수 호출
  useEffect(() => {
    getStarted();
  }, []);

  return (
    <div>
      <ConnectionGamePageForm
        propCount="2"
        propFirstBoxText={gptResponse}
        propProfileImageCode="2_w"
        propShowGameLose={false}
        propShowProfile={true}
        propCharacterCodeMy="5_m"
        propShowHeartMy={false}
        propShowRainMy={true}
        propMidText={gptResponse} // GPT 응답을 중간 텍스트로 전달
        propCharacterCodePartner="3_w"
        handleAnswerSubmit={relayWord} // ConnectionGamePageForm에서 relayWord 호출
      />
    </div>
  );
};

export default ConnectionGamePage;
