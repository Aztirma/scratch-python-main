import React from 'react';
import { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const ModalRating = ({ isOpen, onClose, initialRating, onRatingChange }) => {
    const [selectedRating, setSelectedRating] = useState(initialRating);
  
    useEffect(() => {
      setSelectedRating(initialRating);
    }, [initialRating]);
  
    if (!isOpen) return null;
  
    const handleOutsideClick = (e) => {
      if (e.target.id === 'modal-container') {
        onClose();
      }
    };
  
    const handleStarClick = (rating) => {
      setSelectedRating(rating);
      onRatingChange(rating);
    };
  
    return (
      <div
        id="modal-container"
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        onClick={handleOutsideClick}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3" onClick={(e) => e.stopPropagation()}>
          <h2 className="text-center text-lg font-bold text-purple-principal">¡Tu opinión es importante!</h2>
          <h3 className="text-center text-xl font-bold mb-4 text-purple-400">CALIFICA TU CURSO</h3>
          <ol className="list-decimal list-inside space-y-4">
            <li className="text-gray-700">¿Cuántas estrellas le pondrías al curso que acabas de ver?</li>
            <div className="flex justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className="cursor-pointer"
                  onClick={() => handleStarClick(star)}
                >
                  {star <= selectedRating ? (
                    <StarIcon className="text-orange-500" />
                  ) : (
                    <StarBorderIcon className="text-orange-500" />
                  )}
                </span>
              ))}
            </div>
            <li className="text-gray-700">¡Gracias! Ahora envía tus respuestas</li>
          </ol>
          <div className="flex justify-center mt-4">
            <button className="bg-purple-principal hover:bg-purple-700 text-white py-2 px-4 rounded" onClick={onClose}>ENVIAR</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ModalRating;
