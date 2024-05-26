import FileCopyIcon from '@mui/icons-material/FileCopy';
import React, { useState } from 'react';
import { BsFillFileEarmarkPdfFill, BsGoogle } from 'react-icons/bs';

const CreateQuiz = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [showGenerateQuestions, setShowGenerateQuestions] = useState(false);
    const [topics, setTopics] = useState([]);
    const [newTopic, setNewTopic] = useState("");

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setShowGenerateQuestions(false); // Reset the state if option changes
    };

    const handleAddTopic = () => {
        if (newTopic.trim() && topics.length < 10) {
            setTopics([...topics, newTopic.trim()]);
            setNewTopic("");
        }
    };

    const handleGenerateQuestions = () => {
        setShowGenerateQuestions(true);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            {!showGenerateQuestions ? (
                <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mt-10">
                    <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Elige cómo te gustaría crear</h2>

                    <div className="mb-8">
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
                                    Añade un tema, una sugerencia o pega tu extracto aquí
                                </label>
                                <span className="block text-gray-500 ml-auto">Máximo 10,000 caracteres</span>
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
                                        <button onClick={handleGenerateQuestions} className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">+ Generar preguntas</button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div 
                            className={`p-4 border ${selectedOption === 'document' ? 'border-purple-700' : 'border-gray-200'} rounded-lg mb-2 cursor-pointer bg-white hover:bg-purple-100`}
                            onClick={() => handleOptionChange('document')}
                        >
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="document"
                                    name="create-option"
                                    checked={selectedOption === 'document'}
                                    onChange={() => handleOptionChange('document')}
                                    className="form-radio text-purple-600"
                                />
                                <label htmlFor="document" className="ml-2 text-purple-700 font-semibold">
                                    Utilice un documento existente
                                </label>
                            </div>
                            {selectedOption === 'document' && (
                                <div className="mt-4 flex justify-between items-center space-x-2">
                                    <button className="p-2 flex-1 bg-purple-200 hover:bg-purple-300 text-purple-700 rounded-lg flex items-center justify-center">
                                        <BsFillFileEarmarkPdfFill className="mr-2" />
                                        Subir desde el dispositivo
                                    </button>
                                    <button className="p-2 flex-1 bg-purple-200 hover:bg-purple-300 text-purple-700 rounded-lg flex items-center justify-center">
                                        <BsGoogle className="mr-2" />
                                        Importar desde Google Drive
                                    </button>
                                </div>
                            )}
                        </div>

                        <div 
                            className={`p-4 border ${selectedOption === 'link' ? 'border-purple-700' : 'border-gray-200'} rounded-lg cursor-pointer bg-white hover:bg-purple-100`}
                            onClick={() => handleOptionChange('link')}
                        >
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="link"
                                    name="create-option"
                                    checked={selectedOption === 'link'}
                                    onChange={() => handleOptionChange('link')}
                                    className="form-radio text-purple-600"
                                />
                                <label htmlFor="link" className="ml-2 text-purple-700 font-semibold">
                                    Añade cualquier enlace de la web
                                </label>
                            </div>
                            {selectedOption === 'link' && (
                                <div className="mt-4 flex items-center">
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500"
                                        placeholder="https://www.youtube.com/watch?v=..."
                                    />
                                    <FileCopyIcon className="ml-2 text-purple-600" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mt-10">
                    <h2 className="text-2xl font-bold mb-4 text-center text-purple-700">Generando cuestionario</h2>
                    <p className="text-center text-gray-700 mb-4">¿Qué temas cubriría tu cuestionario?</p>
                    <div className="flex flex-wrap mb-4">
                        {topics.map((topic, index) => (
                            <span key={index} className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full m-1">
                                {topic}
                            </span>
                        ))}
                    </div>
                    <div className="flex mb-4">
                        <input
                            type="text"
                            className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:ring-purple-500"
                            placeholder="Agregar un nuevo tema"
                            value={newTopic}
                            onChange={(e) => setNewTopic(e.target.value)}
                            maxLength="256"
                        />
                        <button onClick={handleAddTopic} className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-r-lg">
                            Agregar
                        </button>
                    </div>
                    <div className="flex justify-end">
                        <button className="p-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg">+ Generar preguntas</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateQuiz;




