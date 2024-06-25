import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizzRating from '../../components/QuizzRating';
import clienteAxios from '../../config/clientAxios';
import QuizzContext from '../../context/QuizzProvider';

const QuizzGame2 = ({ id }) => {
    const [quizz, setQuizz] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);
    const [showRating, setShowRating] = useState(false);
    const { createGameSession } = useContext(QuizzContext);
    const navigate = useNavigate();

    console.log('QuizzGame id:', id);

    useEffect(() => {
        const fetchQuizz = async () => {
            try {
                const response = await clienteAxios.get(`/quizz/${id}`);
                setQuizz(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching quiz:', error);
                setError('Quiz not found');
                setLoading(false);
            }
        };

        fetchQuizz();
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h2 className="text-2xl font-bold text-gray-700">Loading...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h2 className="text-2xl font-bold text-gray-700">{error}</h2>
            </div>
        );
    }

    const handleAnswerSelect = (questionIndex, answer) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [questionIndex]: answer
        });
    };

    const handleSubmit = async () => {
        setShowResults(true);

        const correctAnswers = quizz.questions.reduce((acc, question, index) => {
            return selectedAnswers[index] === question.correctAnswer ? acc + 1 : acc;
        }, 0);

        const incorrectAnswers = quizz.questions.length - correctAnswers;

        try {
            await createGameSession({
                quizzId: quizz._id,
                correctAnswers,
                incorrectAnswers
            });
            console.log('Game session created successfully');
            setShowRating(true);
        } catch (error) {
            console.error('Error creating game session:', error);
        }
    };

    const handleBack = () => {
        navigate(-1);  // Navegar a la página anterior
    };

    return (
        <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl relative">
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
                <div className="flex justify-between mt-8">
                    <button
                        onClick={handleBack}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg shadow hover:bg-gray-400"
                    >
                        Volver
                    </button>
                    {!showResults && (
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
                        >
                            Submit
                        </button>
                    )}
                </div>
                {showRating && (
                    <QuizzRating quizzId={quizz._id} onClose={() => setShowRating(false)} />
                )}
            </div>
        </div>
    );
};

export default QuizzGame2;
