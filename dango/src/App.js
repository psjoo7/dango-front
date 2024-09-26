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

function App() {
  const isAuthenticated = !!localStorage.getItem("user");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/member/login" />} />
        <Route
          path="/member/login"
          element={isAuthenticated ? <Navigate to="/home" /> : <LoginPage />}
        />
        <Route path="/home" element={<HomePage />} />
        <Route path="/member/profile" element={<MyProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
