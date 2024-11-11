// src/utils/api.js
export const requestToken = async (authorizationCode) => {
    try {
      const response = await fetch('/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: authorizationCode }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Token request failed:', error);
    }
  };
  