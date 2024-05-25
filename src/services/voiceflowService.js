// src/services/voiceflowService.js
import axios from 'axios';

// Reemplaza con el ID de tu proyecto en Voiceflow
const PROJECT_ID = '664fe0f81b3448567f73d8fd';

// Configura tu API Key
const API_KEY = '664fe7acaf56e4f3be050681';

// Función para enviar una solicitud a Voiceflow con un USER_ID dinámico
export const sendMessageToVoiceflow = async (userId, message = '') => {
    const API_URL = `https://general-runtime.voiceflow.com/state/${PROJECT_ID}/user/${userId}/interact`;

    try {
        const response = await axios.post(
            API_URL,
            {
                request: {
                    type: 'text',
                    payload: message,
                },
            },
            {
                headers: {
                    Authorization: API_KEY,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error sending message to Voiceflow:', error);
        throw error;
    }
};
