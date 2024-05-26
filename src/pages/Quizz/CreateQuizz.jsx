import React, { useState } from 'react';
import CreateQuizzOptions from './CreateQuizzOptions';
import CreateQuizzQuestions from './CreateQuizzQuestions'; // Asegúrate de que el nombre aquí coincida

const CreateQuizz = () => {
    const [showQuestions, setShowQuestions] = useState(false);
    const [topics, setTopics] = useState(["Variables en Python", "Operadores aritméticos", "Estructuras de control", "Funciones en Python", "Listas y tuplas", "Diccionarios y conjuntos"]);

    const handleGenerateQuestions = () => {
        setShowQuestions(true);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            {!showQuestions ? (
                <CreateQuizzOptions handleGenerateQuestions={handleGenerateQuestions} setTopics={setTopics} />
            ) : (
                <CreateQuizzQuestions topics={topics} setTopics={setTopics} />
            )}
        </div>
    );
}

export default CreateQuizz;
