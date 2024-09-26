import React from "react";
import { Navigate } from "react-router-dom";

// 로그인 여부를 확인하는 함수
const isAuthenticated = () => {
  return !!localStorage.getItem("user"); // 로그인 상태 확인 (localStorage에 사용자 정보 또는 토큰이 있으면 true)
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // 로그인 상태가 아니면 로그인 페이지로 리다이렉트
    return <Navigate to="/member/login" />;
  }
  return children; // 로그인 상태라면 원래의 페이지로 이동
};

export default ProtectedRoute;
