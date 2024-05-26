import React, { useState } from 'react';
import CreateQuizzOptions from './CreateQuizzOptions';
import CreateQuizzQuestions from './CreateQuizzQuestions';
import QuizzGame from './QuizzGame';

const CreateQuizz = () => {
    const [showQuestions, setShowQuestions] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);
    const [topics, setTopics] = useState(["Variables en Python", "Operadores aritméticos", "Estructuras de control", "Funciones en Python", "Listas y tuplas", "Diccionarios y conjuntos"]);
    const [questions] = useState([
        { question: "What is a variable in Python?", options: ["A type of function", "A type of snake", "A reserved memory location"], correctOption: 2 },
        { question: "How do you declare a variable in Python?", options: ["declare variable_name", "variable_name = value"], correctOption: 1 }
    ]);

    const handleGenerateQuestions = () => {
        setShowQuestions(true);
    };

    const handleStartQuiz = () => {
        setShowQuestions(false);
        setShowQuiz(true);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            {showQuiz ? (
                <QuizzGame questions={questions} />
            ) : showQuestions ? (
                <CreateQuizzQuestions topics={topics} setTopics={setTopics} onStartQuiz={handleStartQuiz} />
            ) : (
                <CreateQuizzOptions handleGenerateQuestions={handleGenerateQuestions} setTopics={setTopics} />
            )}
        </div>
    );
}

export default CreateQuizz;
