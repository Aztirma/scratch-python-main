import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useQuizz from '../../hooks/useQuizz';

const QuizzGame = () => {
    const { id } = useParams();
    const { quizzes } = useQuizz();
    const quizz = quizzes.find(q => q.id === parseInt(id));
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    if (!quizz) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h2 className="text-2xl font-bold text-gray-700">Quiz not found</h2>
            </div>
        );
    }

    const handleAnswerSelect = (questionIndex, answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: answer
        });
    };

    const handleSubmit = () => {
        setShowResults(true);
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-purple-600 mb-4">{quizz.name}</h1>
                <div className="space-y-6">
                    {quizz.questions.map((question, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">{question.question}</h2>
                            <ul className="space-y-2">
                                {question.options.map((option, i) => (
                                    <li
                                        key={i}
                                        onClick={() => handleAnswerSelect(index, option)}
                                        className={`p-2 border border-gray-300 rounded-lg cursor-pointer ${
                                            selectedAnswers[index] === option
                                                ? 'bg-purple-200'
                                                : 'bg-white hover:bg-purple-100'
                                        }`}
                                    >
                                        {option}
                                    </li>
                                ))}
                            </ul>
                            {showResults && (
                                <div className={`mt-2 ${selectedAnswers[index] === question.correctAnswer ? 'text-green-500' : 'text-red-500'}`}>
                                    {selectedAnswers[index] === question.correctAnswer ? 'Correct!' : `Wrong! Correct answer: ${question.correctAnswer}`}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {!showResults && (
                    <button
                        onClick={handleSubmit}
                        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
                    >
                        Submit
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizzGame;
