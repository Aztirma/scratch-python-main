import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateQuizzOptions = ({ handleGenerateQuestions }) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const navigate = useNavigate();

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleCreateQuiz = () => {
        if (selectedOption === 'fromScratch') {
            navigate('/quizz/create/manual');
        } else if (selectedOption === 'suggestion') {
            navigate('/quizz/create/suggestion');
        } else {
            console.log('Opción seleccionada:', selectedOption);
        }
    };

    const handleGenerateQuestionsClick = () => {
        if (selectedOption === 'suggestion') {
            navigate('/quizz/create/suggestion');
        }
    };

    return (
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">¿Cómo te gustaría crear?</h2>
            <div className="mb-8">
                <div
                    className={`p-4 border ${selectedOption === 'fromScratch' ? 'border-purple-700' : 'border-gray-200'} rounded-lg mb-2 cursor-pointer bg-white hover:bg-purple-100`}
                    onClick={() => handleOptionChange('fromScratch')}
                >
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="fromScratch"
                            name="create-option"
                            checked={selectedOption === 'fromScratch'}
                            onChange={() => handleOptionChange('fromScratch')}
                            className="form-radio text-purple-600"
                        />
                        <label htmlFor="fromScratch" className="ml-2 text-purple-700 font-semibold">
                            Crear desde cero
                        </label>
                        <span className="block text-gray-500 ml-auto">Utilice más de 15 tipos de preguntas interactivas</span>
                    </div>
                </div>

                <div
                    className={`p-4 border ${selectedOption === 'suggestion' ? 'border-purple-700' : 'border-gray-200'} rounded-lg mb-2 cursor-pointer bg-white hover:bg-purple-100`}
                    onClick={() => handleOptionChange('suggestion')}
                >
                    <div className="flex items-center">
                        <input
                            type="radio"
                            id="suggestion"
                            name="create-option"
                            checked={selectedOption === 'suggestion'}
                            onChange={() => handleOptionChange('suggestion')}
                            className="form-radio text-purple-600"
                        />
                        <label htmlFor="suggestion" className="ml-2 text-purple-700 font-semibold">
                            Generar a partir de texto
                        </label>
                        <span className="block text-gray-500 ml-auto">Solicita a la IA o pega tu propio texto</span>
                    </div>
                    {selectedOption === 'suggestion' && (
                        <div className="mt-4">
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500"
                                placeholder="Añade un tema, una sugerencia o pega tu extracto aquí"
                                maxLength="10000"
                                defaultValue="Quisiera un quiz acerca de conceptos básicos de Python"
                            ></textarea>
                            <div className="flex mt-4">
                                <div className="flex-1 mr-2">
                                    <label className="block mb-1 text-purple-700 font-semibold">Dificultad</label>
                                    <select
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500"
                                        defaultValue="Principiante"
                                    >
                                        <option>Principiante</option>
                                        <option>Intermedio</option>
                                        <option>Avanzado</option>
                                    </select>
                                </div>
                                <div className="flex-1 mr-2">
                                    <label className="block mb-1 text-purple-700 font-semibold">Categoría</label>
                                    <select
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500"
                                        defaultValue="Programación"
                                    >
                                        <option>Programación</option>
                                        <option>Programación Visual</option>
                                        <option>Algoritmos</option>
                                        <option>Estructuras de Datos</option>
                                    </select>
                                </div>
                                <div className="flex-1">
                                    <label className="block mb-1 text-purple-700 font-semibold">Cantidad de Preguntas</label>
                                    <select
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500"
                                        defaultValue="Automático"
                                    >
                                        <option>Automático</option>
                                        <option>5</option>
                                        <option>10</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex justify-end mt-4">
                                <button onClick={handleGenerateQuestionsClick} className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">+ Generar preguntas</button>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex justify-end mt-4">
                    <button onClick={handleCreateQuiz} className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">Siguiente</button>
                </div>
            </div>
        </div>
    );
};

export default CreateQuizzOptions;
