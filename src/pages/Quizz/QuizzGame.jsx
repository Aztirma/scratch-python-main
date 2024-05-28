import React from 'react';
import { useParams } from 'react-router-dom';
import useQuizz from '../../hooks/useQuizz';

const QuizzGame = () => {
    const { id } = useParams();
    const { quizzes } = useQuizz();
    const quizz = quizzes.find(q => q.id === parseInt(id));

    if (!quizz) {
        return <div>Quiz not found</div>;
    }

    return (
        <div>
            <h1>{quizz.name}</h1>
            {quizz.questions.map((question, index) => (
                <div key={index}>
                    <h2>{question.question}</h2>
                    <ul>
                        {question.options.map((option, i) => (
                            <li key={i}>{option}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default QuizzGame;
