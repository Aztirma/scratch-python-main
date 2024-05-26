import React, { useState } from 'react';

const CreateQuizzQuestions = ({ topics, setTopics, onStartQuiz }) => {
    const [newTopic, setNewTopic] = useState("");
    const [selectedTopic, setSelectedTopic] = useState(null);

    const handleAddTopic = () => {
        if (newTopic.trim() !== "") {
            setTopics([...topics, newTopic]);
            setNewTopic("");
        }
    };

    const handleTopicClick = (topic) => {
        setSelectedTopic(topic);
        // Aquí puedes agregar cualquier otra acción que desees realizar al hacer clic en un tema
    };

    return (
        <div className="w-full max-w-3xl p-6 bg-white rounded-lg shadow-md mt-10 text-center">
            <h2 className="text-2xl font-bold mb-4">Generando cuestionario en Conceptos básicos Python</h2>
            <p className="text-lg mb-6">Seleccione hasta 10 temas</p>
            <div className="flex flex-wrap justify-center mb-4">
                {topics.map((topic, index) => (
                    <button 
                        key={index} 
                        className={`bg-purple-200 text-purple-800 rounded-full px-4 py-2 m-2 ${selectedTopic === topic ? 'bg-purple-500 text-white' : ''}`} 
                        onClick={() => handleTopicClick(topic)}
                    >
                        {topic}
                    </button>
                ))}
            </div>
            <div className="flex items-center justify-center mb-6">
                <input
                    type="text"
                    className="w-2/3 p-2 border border-gray-300 rounded-lg"
                    placeholder="Agregar un nuevo tema"
                    value={newTopic}
                    onChange={(e) => setNewTopic(e.target.value)}
                />
                <button
                    className="ml-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-700"
                    onClick={handleAddTopic}
                >
                    Agregar
                </button>
            </div>
            <button className="px-6 py-2 bg-purple-principal hover:bg-purple-700 text-white rounded-lg" onClick={onStartQuiz}>+ Generar preguntas</button>
        </div>
    );
};

export default CreateQuizzQuestions;

