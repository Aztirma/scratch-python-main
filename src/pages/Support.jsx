// src/pages/Suggestions.jsx
import React from 'react';
import FeedbackForm from '../components/FeedbackForm';


const Support = () => {
    return (
        <div className="flex">
            <div className="p-6 bg-gray-100 min-h-screen flex-grow">
                <h1 className="text-3xl font-bold text-purple-600 mb-4">Sugerencias</h1>
                <FeedbackForm />
            </div>
        </div>
    );
};

export default Support;
