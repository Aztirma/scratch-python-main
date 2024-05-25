// src/components/Voiceflow.jsx
import React, { useState, useEffect } from 'react';
import { sendMessageToVoiceflow } from '../../services/voiceflowService';

const Voiceflow = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const userId = 'user123'; // Aquí puedes generar o obtener dinámicamente el ID del usuario

  // Enviar mensaje inicial cuando el componente se monta
  useEffect(() => {
    const initiateConversation = async () => {
      try {
        const responseData = await sendMessageToVoiceflow(userId);
        setResponse(JSON.stringify(responseData, null, 2));
      } catch (error) {
        console.error('Error initiating conversation:', error);
        setResponse('Error initiating conversation');
      }
    };

    initiateConversation();
  }, [userId]);

  const handleSendMessage = async () => {
    try {
      const responseData = await sendMessageToVoiceflow(userId, message);
      setResponse(JSON.stringify(responseData, null, 2));
    } catch (error) {
      console.error('Error:', error);
      setResponse('Error sending message');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Voiceflow Integration</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <button
        onClick={handleSendMessage}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Send Message
      </button>
      <pre className="mt-4 p-4 bg-gray-100 border border-gray-300 rounded">
        {response}
      </pre>
    </div>
  );
};

export default Voiceflow;
