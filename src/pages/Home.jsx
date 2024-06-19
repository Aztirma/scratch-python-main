import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import React from 'react';
import useAuth from '../hooks/useAuth';

const Home = () => {
    const { user } = useAuth();
    const handleCreateClick = () => {
        window.location.href = 'http://localhost:5173/create';
    };

    const handleMoreInfoClick = () => {
        window.location.href = 'http://localhost:5173/about';
    };

    return (
        <div className="w-full bg-gradient-to-r from-[#F4E8FF] via-[#F7EEFF] to-[#F4E8FF] flex justify-center items-center" style={{ minHeight: 'calc(100vh - 72px)' }}>
            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center p-8">
                <div className="text-center lg:text-left lg:mr-8 lg:ml-16">
                    <h1 className="text-4xl font-semibold text-gray-700 mb-2">
                        PYTHON <span className="text-black">VISUAL</span>: APRENDE Y DOMINA
                    </h1>
                    <p className="text-lg text-gray-500 mb-4">
                        TU ASISTENTE INTELIGENTE PARA LA PROGRAMACIÓN VISUAL EN PYTHON
                    </p>
                    <p>{user.username}</p>
                    <div className="flex justify-center lg:justify-start space-x-2">
                        <button
                            onClick={handleCreateClick}
                            className="flex items-center bg-purple-principal text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 hover:bg-purple-700"
                        >
                            <PlayArrowIcon className="mr-1" />
                            Crear
                        </button>
                        <button
                            onClick={handleMoreInfoClick}
                            className="bg-white text-gray-700 border border-gray-300 font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition duration-300 hover:bg-gray-100"
                        >
                            More info
                        </button>
                    </div>
                </div>
                <div className="w-112 h-84 bg-gray-100 flex items-center justify-center rounded-lg">
                    <img src="src/assets/Demo.gif" alt="Demo GIF" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Home;
