import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuizzContext from '../../context/QuizzProvider';
import CreateQuizzOptions from './CreateQuizzOptions';

const CreateQuizz = () => {
    const navigate = useNavigate();
    const { addQuiz } = useContext(QuizzContext);
    const [showQuestions, setShowQuestions] = useState(false);
    const [questions, setQuestions] = useState([]);

    const handleGenerateQuestions = (topic, difficulty, category, numQuestions) => {
        // Lógica para generar preguntas (por ejemplo, con un LLM)
        const generatedQuestions = [
            { question: `What is ${topic}?`, options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], correctAnswer: 'Option 1' },
            // Más preguntas generadas...
        ];
        setQuestions(generatedQuestions);
        setShowQuestions(true);
        navigate('/quizz/create/suggestion');  // Redirigir a la página de sugerencia
    };

    const handleCreateQuiz = () => {
        addQuiz({ name: 'Nuevo Quizz', questions });
        navigate('/quizz/list');  // Redirigir a la lista de cuestionarios
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <CreateQuizzOptions handleGenerateQuestions={handleGenerateQuestions} />
        </div>
    );
}

export default CreateQuizz;
