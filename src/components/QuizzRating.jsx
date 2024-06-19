import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import clienteAxios from '../config/clientAxios';

const QuizzRating = ({ quizzId, onClose }) => {
    const [rating, setRating] = useState(0);

    const handleSubmit = async () => {
        try {
            const response = await clienteAxios.post(`/quizz/${quizzId}/rating`, { rating });
            console.log('Rating submitted successfully:', response.data);
            onClose();
        } catch (error) {
            console.error('Error submitting rating:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-8 shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">Evalua el Quizz Generado</h2>
                <div className="flex justify-center mb-4">
                    <ReactStars
                        count={5}
                        value={rating}
                        onChange={(newRating) => setRating(newRating)}
                        size={36}
                        activeColor="#ffd700"
                    />
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-purple-600 text-white rounded shadow hover:bg-purple-700"
                    >
                        Submit Rating
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizzRating;
