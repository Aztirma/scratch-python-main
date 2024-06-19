import React, { useContext } from 'react';
import QuizzContext from '../../context/QuizzProvider';
import QuizzGame from './QuizzGame'; // Importa tu componente QuizzGame

const SuggestionQuizz = () => {
    const { questions } = useContext(QuizzContext);

    if (questions.length === 0) {
        return (
            <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mt-10">
                <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">No hay preguntas generadas aún.</h2>
                <p className="text-gray-500">Por favor, regresa y genera un quiz primero.</p>
            </div>
        );
    }

    return (
        <QuizzGame quizz={{ questions, name: 'Quizz generado por LLM' }} />
    );
};

export default SuggestionQuizz;
