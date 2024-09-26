import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./styles/global.css";
import LoginPage from "./pages/Login/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import MyProfilePage from "./pages/MyProfilePage/MyProfilePage";
import ProtectedRoute from "./route/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* 로그인되지 않은 사용자가 로그인 페이지로 가는 경로 */}
        <Route path="/member/login" element={<LoginPage />} />

        {/* 보호된 경로: 로그인한 사용자만 접근 가능 */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/member/profile"
          element={
            <ProtectedRoute>
              <MyProfilePage />
            </ProtectedRoute>
          }
        />
        {/* 모든 경로는 로그인하지 않은 상태면 로그인 페이지로 리다이렉트 */}
        <Route path="*" element={<Navigate to="/member/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
