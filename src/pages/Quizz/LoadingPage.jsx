import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-purple-100">
            <div className="text-center">
                <div className="loader border-t-4 border-purple-500 rounded-full w-16 h-16 mb-4 animate-spin"></div>
                <p className="text-xl font-semibold text-purple-700">Cargando...</p>
            </div>
        </div>
    );
};

export default LoadingPage;
