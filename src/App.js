// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RedirectHandler from './components/RedirectHandler';
import NextStepPage from './pages/NextStepPage';
import ErrorPage from './pages/ErrorPage';
import LoginButton from './components/LoginButton';

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인 페이지에서 로그인 버튼 표시 */}
        <Route path="/" element={<LoginButton />} />
        
        {/* OAuth 리다이렉트 URI 처리 */}
        <Route path="/redirect" element={<RedirectHandler />} />
        
        {/* 인증 후 다음 단계 페이지 */}
        <Route path="/next-step" element={<NextStepPage />} />
        
        {/* 에러 페이지 */}
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
