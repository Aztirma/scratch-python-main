import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SidebarLibrary from '../../components/SidebarLibrary';
import SidebarQuizz from '../../components/SidebarQuizz';
import useQuizz from '../../hooks/useQuizz';

const LibraryQuizz = () => {
    const { filteredQuizzesLibrary, setSearchTermLibrary, setSortOptionLibrary, setLibraryCategory } = useQuizz();
    const [searchInput, setSearchInput] = useState('');
    const [activeSection, setActiveSection] = useState('all');
    const navigate = useNavigate();

    const onSearchChange = (e) => {
        setSearchInput(e.target.value);
        setSearchTermLibrary(e.target.value);
    };

    const onSortChange = (e) => {
        setSortOptionLibrary(e.target.value);
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
        setLibraryCategory(section);
    };

    const renderCreatedByMeButtons = () => {
        return (
            <div className="flex mb-4 space-x-4">
                <button
                    className={`py-2 px-4 ${activeSection === 'published' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg`}
                    onClick={() => handleSectionChange('published')}
                >
                    Published
                </button>
                <button
                    className={`py-2 px-4 ${activeSection === 'drafts' ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg`}
                    onClick={() => handleSectionChange('drafts')}
                >
                    Drafts
                </button>
            </div>
        );
    };

    const handlePlayClick = (id) => {
        navigate(`/quizz/game/${id}`);
    };

    return (
        <div className="flex h-screen">
            <SidebarQuizz />
            <div className="flex flex-col w-64">
                <h2 className="text-2xl font-bold p-4 bg-white shadow">My Library</h2>
                <SidebarLibrary setActiveSection={handleSectionChange} />
            </div>
            <div className="flex-1 p-8 bg-gray-100 overflow-auto">
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            placeholder="Search in my library"
                            className="py-2 px-4 w-2/3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={searchInput}
                            onChange={onSearchChange}
                        />
                        <select
                            className="border border-gray-300 rounded p-2 text-gray-600"
                            onChange={onSortChange}
                        >
                            <option value="Most played">Ordenar por: Más jugados</option>
                            <option value="Least played">Ordenar por: Menor jugados</option>
                            <option value="Highest Rated">Ordenar por: Más populares</option>
                        </select>
                    </div>
                    {activeSection === 'created' && renderCreatedByMeButtons()}
                    <div className="space-y-4">
                        {filteredQuizzesLibrary.map((quizz, index) => (
                            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="w-16 h-16 mr-4 bg-gray-300 rounded-full">
                                        <img src="https://via.placeholder.com/64" alt="Logo" className="rounded-full"/>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold">{quizz.name}</h3>
                                        <p className="text-gray-600">{quizz.questions.length} Preguntas · {quizz.plays} plays · Rating: {quizz.rating}</p>
                                        <p className="text-gray-400">Creado por {quizz.creator}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button className="bg-gray-200 text-gray-800 rounded-lg py-2 px-4">Share</button>
                                    <button 
                                        className="bg-purple-500 text-white rounded-lg py-2 px-4"
                                        onClick={() => handlePlayClick(quizz.id)}
                                    >
                                        Play
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryQuizz;
