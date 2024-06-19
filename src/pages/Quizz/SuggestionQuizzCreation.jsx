import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import GeneratedQuizzGame from '../../components/GeneratedQuizzGame';

const SuggestionQuizzCreation = () => {
    const location = useLocation();
    const { generatedQuiz } = location.state || {};
    const [quizz, setQuizz] = useState(null);

    useEffect(() => {
        if (generatedQuiz) {
            setQuizz(generatedQuiz);
        }
    }, [generatedQuiz]);

    if (!quizz) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h2 className="text-2xl font-bold text-gray-700">No quiz available</h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <GeneratedQuizzGame quizz={quizz} />
        </div>
    );
};

export default SuggestionQuizzCreation;