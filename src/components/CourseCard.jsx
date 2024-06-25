import React, { useState } from 'react';
import ModalRating from './ModalRating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(course.rating);

    const handleStarClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleRatingChange = (newRating) => {
        setRating(newRating);
        course.rating = newRating;  // Actualiza el rating en el objeto curso
    };

    return (
        <div className="flex justify-between p-6 border border-gray-300 rounded-lg bg-white mb-4">
            <div className="max-w-3/4">
                <h2 className="text-lg text-purple-principal font-bold">{course.courseName}</h2>
                <div className="flex items-center gap-4 my-2 text-sm">
                    <span>{course.numberUnits} UNIDADES</span>
                    <span>{course.duration} MIN</span>
                    <div className="flex cursor-pointer" onClick={handleStarClick}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star}>
                                {star <= rating ? (
                                    <StarIcon className="text-orange-500" />
                                ) : (
                                    <StarBorderIcon className="text-orange-500" />
                                )}
                            </span>
                        ))}
                    </div>
                </div>
                <p className="mt-2 text-gray-600">
                    {course.courseDescription}
                </p>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
                <span className="text-purple-600 font-bold">{course.status}</span>
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mt-2 mb-2">
                    <span className="text-purple-600 font-bold">{course.progress}%</span>
                </div>
                <Link to={`/course/${course._id}`} key={course._id}>
                    <button className="bg-purple-principal text-white rounded px-4 py-2 hover:bg-purple-700">Ver otra vez</button>
                </Link>
            </div>
            <ModalRating
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                initialRating={rating}
                onRatingChange={handleRatingChange}
            />
        </div>
    );
};

export default CourseCard;
