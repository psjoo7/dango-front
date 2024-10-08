import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ChatGPTForm.module.css";
import SideBar from "../../SideBar/SideBar";
import ChatPageCardLeft from "./ChatPageCardLeft/ChatPageCardLeft";
import ChatPageCardTop from "./ChatPageCardTop/ChatPageCardTop";
import ChatBottom from "./ChatBottom/ChatBottom";
import Chatting from "./Chatting/Chatting";

const ChatGPTForm = () => {
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const userId = userInfo.userId; // userId 가져오기
  const [conversation, setConversation] = useState([]);
  const [mileage, setMileage] = useState(userInfo.userMileage);
  const [currentStudyContent, setCurrentStudyContent] = useState(""); // 학습 내용 상태 추가
  const [usedContent, setUsedContent] = useState([]); // 이미 사용한 단어 목록

  const addMessage = (role, content) => {
    setConversation((prevConversation) => [
      ...prevConversation,
      { role, content },
    ]);
  };

  const handleSend = async (message) => {
    addMessage("user", message);
    try {
      const response = await axios.post(
        // "https://scit45dango.site/api/gptChat/studyChat",
        "https://scit45dango.site/api/gptChat/studyChat",
        {
          userSentence: message,
          userId,
          studyContent: currentStudyContent, // 학습 내용 함께 보내기
        }
      );
      addMessage("assistant", response.data);
      if (
        response.data.includes("정답입니다") ||
        response.data.includes("正解です")
      ) {
        setMileage((prev) => prev + 2); // 마일리지 업데이트
        setUsedContent((prevUsed) => [...prevUsed, currentStudyContent]); // 현재 학습 내용을 사용한 목록에 추가
        handleNext(); // 새로운 문제 생성
      }
    } catch (error) {
      console.error("Error while sending message:", error);
    }
  };

  const handleNext = async () => {
    try {
      const response = await axios.post(
        // "https://scit45dango.site/api/gptChat/gptStudyChat",
        "https://scit45dango.site/api/gptChat/gptStudyChat",
        {
          userId,
        }
      );
      const newContent = response.data.studyPrompt;
      // 이미 사용한 단어와 비교하여 새로운 단어만 사용
      if (!usedContent.includes(newContent)) {
        setCurrentStudyContent(newContent); // 새로운 학습 내용 상태에 저장
        addMessage("assistant", newContent);
      } else {
        handleNext(); // 이미 사용된 단어라면 다시 새로운 단어 요청
      }
    } catch (error) {
      console.error("Error while fetching next study content:", error);
    }
  };

  // 처음 로딩 시 GPT의 첫 메시지를 호출
  useEffect(() => {
    const fetchInitialMessage = async () => {
      try {
        const response = await axios.post(
          // "https://scit45dango.site/api/gptChat/gptStudyChat",
          "https://scit45dango.site/api/gptChat/gptStudyChat",
          {
            userId,
          }
        );
        const initialContent = response.data.studyPrompt;
        setCurrentStudyContent(initialContent); // 첫 학습 내용 상태에 저장
        addMessage("assistant", initialContent);
      } catch (error) {
        console.error("Error while fetching initial GPT message:", error);
      }
    };

    fetchInitialMessage();
  }, [userId]);

  return (
    <div className={styles.page}>
      <SideBar />
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <ChatPageCardLeft
            propPartnerImage={"3_m"}
            propPartnerName={"챗GPT"}
          />
        </div>
        <div className={styles.contents}>
          <div className={styles.top}>
            <ChatPageCardTop
              propMyImage={"4_w"}
              propPartnerImage={"3_m"}
              propPartnerName={"GPT"}
            />
          </div>
          <Chatting conversation={conversation} />
          <div className={styles.bottom}>
            <ChatBottom
              onSend={handleSend}
              onNext={handleNext}
              propPoint={mileage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTForm;
