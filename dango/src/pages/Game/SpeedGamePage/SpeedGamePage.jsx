import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import axios from "axios";
import SpeedGamePageForm from "../../../component/Forms/GameForm/SpeedGamePageForm/SpeedGamePageForm";
import styles from "./SpeedGamePage.module.css";

const SpeedGamePage = () => {
  const { roomId } = useParams(); // roomId를 가져옵니다.
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [opponentHP, setOpponentHP] = useState(5);
  const [userHP, setUserHP] = useState(5);
  const [timer, setTimer] = useState(12);

  useEffect(() => {
    // const socket = new SockJS("http://localhost:8888/ws");
    const socket = new SockJS("https://scit45dango.site/ws");
    const client = Stomp.over(socket);

    client.connect({}, () => {
      client.subscribe(`/topic/game/${roomId}`, (message) => {
        const wordData = JSON.parse(message.body);
        setQuestion(wordData.content);
        console.log(question);
        setCorrectAnswer(wordData.pronunciation);
        setTimer(12); // 12초 타이머 시작
      });

      // 12초 후 정답을 제출하지 않으면 HP 감소
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            // 정답을 제출하지 않으면 HP 감소
            handleMissedAnswer();
            return 12; // 다음 문제를 위해 타이머 리셋
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        client.disconnect();
        clearInterval(interval);
      };
    });
  }, [roomId]);

  const handleAnswerSubmit = async (answer) => {
    if (answer === correctAnswer) {
      // 상대방 HP 감소 요청
      try {
        await axios.post(
          // `http://localhost:8888/api/game/decreaseOpponentHP/${roomId}`
          `https://scit45dango.site/api/game/decreaseOpponentHP/${roomId}`
        );
        setOpponentHP((prevHP) => prevHP - 1);
        if (opponentHP - 1 <= 0) {
          alert("게임 승리! 마일리지 획득!");
          navigate("/game/result");
        }
      } catch (error) {
        console.error("HP 감소 오류:", error);
      }
    } else {
      console.log("오답입니다!");
    }
  };

  const handleMissedAnswer = async () => {
    try {
      await axios.post(
        // `http://localhost:8888/api/game/decreaseOpponentHP/${roomId}`
        `https://scit45dango.site/api/game/decreaseOpponentHP/${roomId}`
      );
      setUserHP((prevHP) => prevHP - 1);
      setOpponentHP((prevHP) => prevHP - 1);

      if (userHP - 1 <= 0 || opponentHP - 1 <= 0) {
        alert("게임 종료");
        navigate("/game/result");
      }
    } catch (error) {
      console.error("Missed Answer 오류:", error);
    }
  };

  return (
    <div className={styles.SpeedGamePage}>
      <SpeedGamePageForm
        propQuestionMid={question}
        propTimeLeftMid={timer}
        propRemainingQuestionsMid={8}
        propAnswerMid={handleAnswerSubmit}
        propH1ColorLeft="var(--color-main)"
        propH2ColorLeft="var(--color-main)"
        propH3ColorLeft="var(--color-main)"
        propH4ColorLeft="var(--color-main)"
        propH5ColorLeft="var(--color-main)"
        propH1ColorRight="var(--color-main)"
        propH2ColorRight="var(--color-main)"
        propH3ColorRight="var(--color-main)"
        propH4ColorRight="var(--color-main)"
        propH5ColorRight="var(--color-main)"
        propShowLoseLeft={userHP <= 0}
        propShowLoseRight={opponentHP <= 0}
      />
    </div>
  );
};

export default SpeedGamePage;
