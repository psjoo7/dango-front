import React from "react";
import GameRankingPageForm from "../../../component/Forms/GameForm/GameRankingPageForm/GameRankingPageForm"; // GameRankingPageForm 컴포넌트 임포트

const ParentComponent = () => {
  // 빨리 쓰기 랭킹 데이터
  const speedRankingList = [
    { userName: "John", userScore: "200", profileImage: "5_w" },
    { userName: "Jane", userScore: "180", profileImage: "2_m" },
    { userName: "Jake", userScore: "160", profileImage: "1_m" },
    { userName: "Mike", userScore: "140", profileImage: "1_w" },
    { userName: "Emily", userScore: "120", profileImage: "3_w" },
    { userName: "Steve", userScore: "100", profileImage: "8_m" },
    { userName: "Sarah", userScore: "90", profileImage: "6_m" },
    { userName: "Lily", userScore: "80", profileImage: "8_m" },
  ];

  // 끝말잇기 랭킹 데이터
  const wordChainRankingList = [
    { userName: "Alice", userScore: "210", profileImage: "5_w" },
    { userName: "Bob", userScore: "190", profileImage: "2_m" },
    { userName: "Charlie", userScore: "170", profileImage: "1_m" },
    { userName: "David", userScore: "150", profileImage: "1_w" },
    { userName: "Eva", userScore: "130", profileImage: "3_w" },
    { userName: "Frank", userScore: "110", profileImage: "8_m" },
    { userName: "Grace", userScore: "95", profileImage: "6_m" },
    { userName: "Hannah", userScore: "85", profileImage: "8_m" },
  ];

  // 빨리 쓰기 나의 랭킹 정보
  const myRankingInfoSpeed = {
    myImageCode: "1_w",
    myUserName: "줄리줄리줄리",
    myUserScore: "150",
    myUserRank: "9",
  };

  // 끝말잇기 나의 랭킹 정보
  const myRankingInfoWordChain = {
    myImageCode: "1_w",
    myUserName: "줄리",
    myUserScore: "170",
    myUserRank: "10",
  };

  return (
    <GameRankingPageForm
      propSpeedRankingList={speedRankingList} // 빨리 쓰기 랭킹 데이터 전달
      propWordChainRankingList={wordChainRankingList} // 끝말잇기 랭킹 데이터 전달
      propMyRankingInfoSpeed={myRankingInfoSpeed} // 빨리 쓰기 나의 랭킹 정보 전달
      propMyRankingInfoWordChain={myRankingInfoWordChain} // 끝말잇기 나의 랭킹 정보 전달
    />
  );
};

export default ParentComponent;
