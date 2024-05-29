import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuizIcon from '@mui/icons-material/Quiz';
import SchoolIcon from '@mui/icons-material/School';

const ModalCreateQuiz = ({ show, onClose }) => {
    const navigate = useNavigate();

    if (!show) {
        return null;
    }

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const redirectToCreateQuiz = () => {
        navigate('/quizz/create');
    };

    return (
        <div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center"
            onClick={handleOutsideClick}
        >
            <div className="bg-white rounded-lg shadow-lg p-6 w-1/3">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Que te gustaría crear?</h2>
                    <div className="flex flex-col space-y-4">
                        <button 
                            className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100"
                            onClick={redirectToCreateQuiz}
                        >
                            <div className="flex items-center">
                                <QuizIcon fontSize="large" className="text-purple-principal mr-5" />
                                <div>
                                    <h3 className="font-bold">Quiz</h3>
                                    <p>Cree desde cero o utilice Quizizz AI para generar rápidamente cuestionarios a partir de cualquier documento, enlace o mensaje!</p>
                                </div>
                            </div>
                        </button>
                        <button className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
                            <div className="flex items-center">
                                <SchoolIcon fontSize="large" className="text-purple-principal" />
                                <div>
                                    <h3 className="font-bold">Lecciones</h3>
                                    <p>Agregue diapositivas divertidas e interactivas a las evaluaciones que a los estudiantes les encantan.</p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalCreateQuiz;
