import React from 'react';
import logo from '../assets/logo.png'; // Asegúrate de que la ruta sea correcta

const Support = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center bg-purple-100">
            <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg" style={{ minHeight: '90vh' }}>
                <div className="flex items-center mb-4">
                    <img src={logo} alt="Logo" className="h-12 mr-4" />
                    <h1 className="text-2xl font-bold text-purple-700">Asistente virtual</h1>
                </div>
                <iframe 
                    src="https://creator.voiceflow.com/prototype/664fbc81e8061fd0e82cd75e"
                    className="w-full h-[80vh] rounded-lg border-4 border-purple-500"
                    title="Support Chatbot"
                />
            </div>
        </div>
    );
}

export default Support;
