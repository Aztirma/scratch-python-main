// CreateQuizz.jsx
import React, { useContext, useState } from 'react';
import QuizzContext from '../../context/QuizzProvider';
import CreateQuizzOptions from './CreateQuizzOptions';
import CreateQuizzQuestions from './CreateQuizzQuestions';

const CreateQuizz = () => {
    const [showQuestions, setShowQuestions] = useState(false);
    const { addQuiz } = useContext(QuizzContext);
    const [quizName, setQuizName] = useState('');
    const [questions, setQuestions] = useState([]);

    const handleGenerateQuestions = (topic, difficulty, category, numQuestions) => {
        // Lógica para generar preguntas (por ejemplo, con un LLM)
        const generatedQuestions = [
            { question: `What is ${topic}?`, options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], correctAnswer: 'Option 1' },
            // Más preguntas generadas...
        ];
        setQuestions(generatedQuestions);
        setShowQuestions(true);
    };

    const handleCreateQuiz = () => {
        addQuiz({ name: quizName, questions });
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            {showQuestions ? (
                <CreateQuizzQuestions questions={questions} setQuestions={setQuestions} onCreateQuiz={handleCreateQuiz} />
            ) : (
                <CreateQuizzOptions setQuizName={setQuizName} handleGenerateQuestions={handleGenerateQuestions} />
            )}
        </div>
    );
}

export default CreateQuizz;
