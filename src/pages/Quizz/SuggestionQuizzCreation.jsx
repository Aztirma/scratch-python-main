import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import GeneratedQuizzGame from '../../components/GeneratedQuizzGame';
import QuizzContext from '../../context/QuizzProvider';

const SuggestionQuizzCreation = () => {
    const location = useLocation();
    const { generatedQuiz } = location.state || {};
    const [quizz, setQuizz] = useState(null);
    const [quizzName, setQuizzName] = useState('Generated Quiz');
    const { addQuiz } = useContext(QuizzContext);

    useEffect(() => {
        if (generatedQuiz) {
            setQuizz(generatedQuiz);
        }
    }, [generatedQuiz]);

    const handleSaveQuiz = async () => {
        if (quizz) {
            try {
                const newQuiz = {
                    ...quizz,
                    name: quizzName,
                    plays: 0,
                    isDraft: false,
                    creator: 'admin',
                    rating: 0,
                    difficulty: 'Principiante',
                    numQuestions: quizz.questions.length
                };
                await addQuiz(newQuiz);
                alert('Quiz saved successfully!');
            } catch (error) {
                console.error('Error saving quiz:', error);
            }
        }
    };

    if (!quizz) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h2 className="text-2xl font-bold text-gray-700">No quiz available</h2>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="flex items-center justify-center mt-4">
                <input
                    type="text"
                    placeholder="Enter quiz name"
                    className="p-2 border rounded-lg focus:ring-purple-500"
                    value={quizzName}
                    onChange={(e) => setQuizzName(e.target.value)}
                />
                <button onClick={handleSaveQuiz} className="p-2 bg-purple-600 text-white rounded-lg ml-2 hover:bg-purple-700">Save Quiz</button>
            </div>
            <GeneratedQuizzGame quizz={quizz} />
        </div>
    );
};

export default SuggestionQuizzCreation;
