import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SockJS from "sockjs-client";
import { Stomp } from "@stomp/stompjs";
import axios from "axios";
import SpeedGamePageForm from "../../../component/Forms/GameForm/SpeedGamePageForm/SpeedGamePageForm";
import styles from "./SpeedGamePage.module.css";

const SpeedGamePage = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [opponentHP, setOpponentHP] = useState(5);
  const [userHP, setUserHP] = useState(5);
  const [timer, setTimer] = useState(12);
  const [isTimerRunning, setIsTimerRunning] = useState(true);

  const socketRef = useRef(null);
  const stompClientRef = useRef(null);
  const localUser = JSON.parse(localStorage.getItem("user"))?.userId;

  // WebSocket 연결을 초기화하는 함수
  const initializeWebSocket = () => {
    socketRef.current = new SockJS("https://scit45dango.site/ws");
    stompClientRef.current = Stomp.over(socketRef.current);

    stompClientRef.current.connect({}, () => {
      console.log("Connected to WebSocket");
      stompClientRef.current.subscribe(`/topic/game/${roomId}`, (message) => {
        const wordData = JSON.parse(message.body);

        if (wordData.correct === true && wordData.user !== localUser) {
          setUserHP((prevHP) => prevHP - 1);
          console.log("상대가 먼저 정답을 맞췄습니다.");

          if (userHP - 1 <= 0) {
            alert("패배했습니다.");
            navigate("/game/result");
          }
        } else {
          setQuestion(wordData.content);
          setCorrectAnswer(wordData.pronunciation);
          setTimer(12);
          setIsTimerRunning(true);
        }
      });
    });
  };

  useEffect(() => {
    initializeWebSocket(); // 최초에 한 번만 WebSocket 연결

    const interval = setInterval(() => {
      if (isTimerRunning) {
        setTimer((prev) => {
          if (prev <= 1) {
            handleMissedAnswer();
            setIsTimerRunning(false); // 잠시 타이머 멈춤
            stompClientRef.current.send(`/app/game/${roomId}/word`, {});
            return 12;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      stompClientRef.current.disconnect(); // 컴포넌트 언마운트 시 WebSocket 연결 종료
    };
  }, [roomId]);

  const handleAnswerSubmit = async (answer) => {
    if (answer === correctAnswer) {
      try {
        await axios.post(
          `https://scit45dango.site/api/game/decreaseOpponentHP/${roomId}`
        );
        setOpponentHP((prevHP) => prevHP - 1);

        if (opponentHP - 1 <= 0) {
          alert("게임 승리! 마일리지 획득!");
          navigate("/game/result");
        } else {
          setIsTimerRunning(false); // 잠시 타이머 멈춤
          stompClientRef.current.send(`/app/game/${roomId}/word`, {}); // 새 문제 요청
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
        propH1ColorLeft={
          userHP >= 5 ? "var(--color-main)" : "var(--color-white)"
        }
        propH2ColorLeft={
          userHP >= 4 ? "var(--color-main)" : "var(--color-white)"
        }
        propH3ColorLeft={
          userHP >= 3 ? "var(--color-main)" : "var(--color-white)"
        }
        propH4ColorLeft={
          userHP >= 2 ? "var(--color-main)" : "var(--color-white)"
        }
        propH5ColorLeft={
          userHP >= 1 ? "var(--color-main)" : "var(--color-white)"
        }
        propH1ColorRight={
          opponentHP >= 5 ? "var(--color-main)" : "var(--color-white)"
        }
        propH2ColorRight={
          opponentHP >= 4 ? "var(--color-main)" : "var(--color-white)"
        }
        propH3ColorRight={
          opponentHP >= 3 ? "var(--color-main)" : "var(--color-white)"
        }
        propH4ColorRight={
          opponentHP >= 2 ? "var(--color-main)" : "var(--color-white)"
        }
        propH5ColorRight={
          opponentHP >= 1 ? "var(--color-main)" : "var(--color-white)"
        }
        propShowLoseLeft={userHP <= 0}
        propShowLoseRight={opponentHP <= 0}
      />
    </div>
  );
};

export default SpeedGamePage;
