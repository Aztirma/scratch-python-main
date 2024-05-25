import React from 'react';
import FileCopyIcon from '@mui/icons-material/FileCopy';
const CreateQuiz = () => {
    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mt-10">
                <h2 className="text-2xl font-bold mb-4 text-center">Elige como te gustaría crear</h2>
                <div className="mb-8">
                    <textarea
                        className="w-full p-2 border border-gray-200 rounded-lg"
                        placeholder="Añade un tema, una sugerencia o pega tu extracto aquí"
                        maxLength="10000"
                        defaultValue="Quisiera un quiz acerca conceptos básicos de Python"
                    ></textarea>
                </div>
                <div className="flex mb-8">
                    <div className="flex-1 mr-2">
                        <label className="block mb-1">Nivel</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-black rounded-lg"
                            placeholder="Nivel"
                            defaultValue="Grado 1"
                        />
                    </div>
                    <div className="flex-1 mr-2">
                        <label className="block mb-1">Asignatura</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-black rounded-lg"
                            placeholder="Asignatura"
                            defaultValue="Ciencias"
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block mb-1">Número de preguntas</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-black rounded-lg"
                            placeholder="Número de preguntas"
                            defaultValue="Automático"
                        />
                    </div>
                </div>
                <div className="flex justify-end mb-8">
                    <button className="p-2 bg-purple-principal hover:bg-purple-700 text-white rounded-lg">+ Generar preguntas</button>
                </div>

            </div>
            <button className="flex items-center justify-between w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mt-10">
                <span>Utilice un documento existente</span>
                <FileCopyIcon className="ml-2" />
            </button>

            <button className="flex items-center justify-between w-full max-w-2xl p-6 bg-white rounded-lg shadow-md mt-5">
                <span>Añade cualquier enlace de la web</span>
                {/* <FileCopyIcon className="ml-2" /> */}
            </button>


        </div>
    );
}

export default CreateQuiz;
