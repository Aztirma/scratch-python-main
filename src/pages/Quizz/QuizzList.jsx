import React, { useContext, useEffect } from 'react';
import QuizzContext from '../../context/QuizzProvider';

const QuizzList = () => {
    const { quizzes, setQuizzes } = useContext(QuizzContext);

    useEffect(() => {
        const savedQuizzes = localStorage.getItem('quizzes');
        if (savedQuizzes) {
            setQuizzes(JSON.parse(savedQuizzes));
        }
    }, [setQuizzes]);

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Lista de Cuestionarios</h2>
            <ul className="w-full max-w-2xl bg-white rounded-lg shadow-md p-4">
                {quizzes.map((quiz, index) => (
                    <li key={index} className="mb-2 p-2 border-b">
                        {quiz.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizzList;
