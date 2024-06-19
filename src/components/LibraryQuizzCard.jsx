import React from 'react';

const LibraryQuizzCard = ({ quizz, onClick }) => {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center">
            <div className="flex items-center">
                <div className="w-16 h-16 mr-4 bg-gray-300 rounded-full">
                    <img src="https://via.placeholder.com/64" alt="Logo" className="rounded-full" />
                </div>
                <div>
                    <h3 className="text-xl font-semibold">{quizz.name}</h3>
                    <p className="text-gray-600">{quizz.questions.length} Preguntas · {quizz.plays} plays · Rating: {quizz.rating}</p>
                    <p className="text-gray-400">Creado por {quizz.creator}</p>
                </div>
            </div>
            <div className="flex space-x-2">
                 {/*<button className="bg-gray-200 text-gray-800 rounded-lg py-2 px-4">Share</button>*/}
                <button className="bg-purple-500 text-white rounded-lg py-2 px-4" onClick={onClick}>
                    Play
                </button>
            </div>
        </div>
    );
};

export default LibraryQuizzCard;
