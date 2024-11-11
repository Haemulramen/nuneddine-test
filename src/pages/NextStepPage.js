// src/pages/NextStepPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const NextStepPage = () => {
  const location = useLocation();
  const authorizationCode = location.state?.authorizationCode;

  return (
    <div>
      <h1>인증 성공!</h1>
      <p>Authorization Code: {authorizationCode}</p>
      {/* authorizationCode를 사용하여 추가 로직을 여기에 구현 */}
    </div>
  );
};

export default NextStepPage;
