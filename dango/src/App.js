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
import SignUpPage from "./pages/Login/SignUpPage/SignUpPage";
import SignUpFinishPage from "./pages/Login/SignUpFinishPage/SignUpFinishPage";
import LevelTestPage from "./pages/LevelTestPage/LevelTestPage";
import WordPage from "./pages/Study/WordPage/WordPage";
import WordTestPage from "./pages/Study/WordTestPage/WordTestPage";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import GrammarPage from "./pages/GrammarPage/GrammarPage";
import GrammarTestPage from "./pages/GrammarTestPage/GrammarTestPage";
import LevelTestFinishPage from "./pages/Login/LevelTestFinishPage/LevelTestFinishPage";

function App() {
  const isAuthenticated = !!localStorage.getItem("user");

  return (
    <Router>
      <Routes>
        {/* 로그인 페이지로 가려는 시도 */}
        <Route
          path="/member/login"
          element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />}
        />
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
        <Route
          path="/study/word"
          element={
            <ProtectedRoute>
              <WordPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/study/word_test"
          element={
            <ProtectedRoute>
              <WordTestPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/study/grammer"
          element={
            <ProtectedRoute>
              <GrammarPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/study/grammar_test"
          element={
            <ProtectedRoute>
              <GrammarTestPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/review"
          element={
            <ProtectedRoute>
              <ReviewPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz/level_test"
          element={
            <ProtectedRoute>
              <LevelTestPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz/level_test_finish"
          element={
            <ProtectedRoute>
              <LevelTestFinishPage />
            </ProtectedRoute>
          }
        />
        <Route path="/quiz/level_test" element={<LevelTestPage />} />
        <Route path="/member/sign_up_finish" element={<SignUpFinishPage />} />
        <Route path="/member/signup" element={<SignUpPage />} />
        {/* 모든 경로는 로그인하지 않은 상태면 로그인 페이지로 리다이렉트 */}
        <Route path="*" element={<Navigate to="/member/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
