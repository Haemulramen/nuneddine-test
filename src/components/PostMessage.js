import React, { useState } from 'react';

function PostMessage() {
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    try {
      // const response = await fetch(`http://43.201.46.230:8080/api/v1/cors/${message}`, {
        const response = await fetch(`http://localhost:8080/api/v1/cors/${message}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.text();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button onClick={handleSubmit}>Send Message</button>
    </div>
  );
}

export default PostMessage;

