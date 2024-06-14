import React, { useContext } from 'react';
import QuizzContext from '../../context/QuizzProvider';

const ManualQuizzCreation = () => {
    const { 
        questions, 
        handleQuestionChange, 
        handleOptionChangeAtIndex, 
        handleCorrectAnswerChange, 
        handleAddQuestion, 
        handleAddOption, 
        handleRemoveOption, 
        handleCreateQuiz 
    } = useContext(QuizzContext);

    return (
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Crear Quiz Manualmente</h2>
            <div className="mt-4">
                {questions.map((q, qIndex) => (
                    <div key={qIndex} className="mb-6">
                        <label className="block mb-2 text-purple-700 font-semibold">Pregunta {qIndex + 1}</label>
                        <input
                            type="text"
                            className="w-full p-2 mb-2 border border-gray-300 rounded-lg focus:ring-purple-500"
                            placeholder="Escribe la pregunta"
                            value={q.question}
                            onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
                        />
                        <label className="block mb-2 text-purple-700 font-semibold">Opciones</label>
                        {q.options.map((option, oIndex) => (
                            <div key={oIndex} className="flex items-center mb-2">
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500 mr-2"
                                    placeholder={`Opción ${oIndex + 1}`}
                                    value={option}
                                    onChange={(e) => handleOptionChangeAtIndex(qIndex, oIndex, e.target.value)}
                                />
                                {q.options.length > 2 && (
                                    <button
                                        type="button"
                                        className="text-red-500"
                                        onClick={() => handleRemoveOption(qIndex, oIndex)}
                                    >
                                        Eliminar
                                    </button>
                                )}
                            </div>
                        ))}
                        <button
                            type="button"
                            className="text-purple-500 mb-4"
                            onClick={() => handleAddOption(qIndex)}
                        >
                            + Añadir opción
                        </button>
                        <label className="block mb-2 text-purple-700 font-semibold">Respuesta Correcta</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500"
                            placeholder="Escribe la respuesta correcta"
                            value={q.correctAnswer}
                            onChange={(e) => handleCorrectAnswerChange(qIndex, e.target.value)}
                        />
                    </div>
                ))}
                <button
                    type="button"
                    className="text-purple-500"
                    onClick={handleAddQuestion}
                >
                    + Añadir pregunta
                </button>
                <div className="flex justify-end mt-4">
                    <button onClick={handleCreateQuiz} className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">Crear Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default ManualQuizzCreation;
