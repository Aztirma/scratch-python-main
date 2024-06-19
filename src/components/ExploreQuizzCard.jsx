import React from 'react';

const ExploreQuizzCard = ({ quizz, onClick }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow cursor-pointer" onClick={onClick}>
            <div className="h-40 bg-pink-200 mb-2"></div>
            <h3 className="text-lg font-bold">{quizz.name}</h3>
            <p>{quizz.questions.length} Questions · {quizz.plays} plays · Rating: {quizz.rating}</p>
        </div>
    );
};

export default ExploreQuizzCard;
