import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RedirectHandler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [authorizationCode, setAuthorizationCode] = useState(null);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const code = queryParams.get('code');
    if (code) {
      console.log(`Authorization Code: ${code}`);
      setAuthorizationCode(code); // 인가 코드 저장
    } else {
      console.error('Authorization code not found');
      navigate('/error'); // 인가 코드가 없으면 에러 페이지로 이동
    }
  }, [location, navigate]);

  if (!authorizationCode) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg">인가 코드를 확인하는 중...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">인증 코드가 발급되었습니다</h2>
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <p className="text-lg">발급된 인가 코드:</p>
        <p className="mt-2 p-2 bg-white rounded border break-all">{authorizationCode}</p>
      </div>
    </div>
  );
};

export default RedirectHandler;
