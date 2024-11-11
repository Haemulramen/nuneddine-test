// src/components/LoginButton.js
import React from 'react';

const LoginButton = () => {
  const handleLogin = () => {
    const REST_API_KEY = '531d63d0737f13134bb2417073a24a0e'; // 카카오 REST API 키
    const REDIRECT_URI = 'http://localhost:3000/redirect'; // 리다이렉트 URI 설정
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;

    // 카카오 인증 페이지로 리다이렉트
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <button onClick={handleLogin}>
      카카오 로그인
    </button>
  );
};

export default LoginButton;
