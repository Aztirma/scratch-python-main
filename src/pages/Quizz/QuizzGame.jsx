import React, { useState } from 'react';

const QuizzGame = ({ questions }) => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionChange = (questionIndex, optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    const handleSubmit = () => {
        let newScore = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].correctOption) {
                newScore += 1;
            }
        });
        setScore(newScore);
        setShowResult(true);
    };

    return (
        <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mt-10">
            {showResult ? (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Resultado del Quiz</h2>
                    <p className="text-lg">Tu puntuación: {score} de {questions.length}</p>
                </div>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold mb-4 text-center">Responde las siguientes preguntas</h2>
                    {questions.map((question, questionIndex) => (
                        <div key={questionIndex} className="mb-6">
                            <h3 className="text-lg font-semibold">{question.question}</h3>
                            <div className="mb-4">
                                {question.options.map((option, optionIndex) => (
                                    <div key={optionIndex} className="mb-2">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                className="form-radio text-purple-600"
                                                name={`quiz-option-${questionIndex}`}
                                                checked={answers[questionIndex] === optionIndex}
                                                onChange={() => handleOptionChange(questionIndex, optionIndex)}
                                            />
                                            <span className="ml-2">{option}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className="flex justify-center">
                        <button
                            className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg"
                            onClick={handleSubmit}
                        >
                            Enviar respuestas
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizzGame;
