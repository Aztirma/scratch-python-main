import React from 'react';
import { Link } from 'react-router-dom';
import useQuizz from '../../hooks/useQuizz';

const QuizzList = () => {
    const { quizzes } = useQuizz();

    return (
        <div>
            {quizzes.map((quizz) => (
                <div key={quizz._id}>
                    <h2>{quizz.name}</h2>
                    <Link to={`/quizz/game/${quizz._id}`}>Play</Link>
                </div>
            ))}
        </div>
    );
};

export default QuizzList;
