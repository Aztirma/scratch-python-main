import React from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const Home = () => {
    return (
        <div className="flex flex-row items-center justify-center mt-10 bg-white px-4 py-16">
            <div className="text-center mr-16">
                <h1 className="text-4xl font-semibold text-gray-700 mb-4">
                    PYTHON <span className="text-black">VISUAL</span>: APRENDE Y DOMINA
                </h1>
                <p className="text-xl text-gray-500 mb-8">
                    TU ASISTENTE INTELIGENTE PARA LA PROGRAMACIÓN VISUAL EN PYTHON
                </p>
                <div className="flex justify-center space-x-4">
                    <button className="flex items-center bg-purple-principal text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 hover:bg-purple-700">
                        <PlayArrowIcon className="mr-2" />
                        Crear
                    </button>
                    <button className="bg-white text-gray-700 border border-gray-300 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 hover:bg-gray-100">
                        More info
                    </button>
                </div>
            </div>
            <div className="mt-16">
                <div className="w-96 h-64 bg-gray-100 flex items-center justify-center">
                    <img src="/path/to/placeholder-image.png" alt="Placeholder" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Home;
