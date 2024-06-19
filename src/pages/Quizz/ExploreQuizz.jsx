import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExploreQuizzCard from '../../components/ExploreQuizzCard';
import FilteredQuizzesContainer from '../../components/FilteredQuizzesContainer';
import ModalCreateQuizz from '../../components/ModalCreateQuizz';
import SidebarQuizz from '../../components/SidebarQuizz';
import SortSelect from '../../components/SortSelect';
import useAuth from '../../hooks/useAuth';

const ExploreQuizz = () => {
    const { user } = useAuth();
    const [searchInput, setSearchInput] = useState('');
    const [sortOption, setSortOption] = useState('Most played');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const onSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    const onSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleQuizzClick = (id) => {
        console.log('Quiz ID:', id); // Agrega este console.log para verificar el ID
        navigate(`/quizz/game/${id}`);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="flex h-screen">
            <SidebarQuizz onOpenModal={handleOpenModal} />
            <div className="flex-1 p-8 bg-gray-100 overflow-auto">
                <div className="bg-white rounded-lg shadow p-6">
                    <h1 className="text-3xl font-bold mb-4">¿Qué busca hoy?</h1>
                    <div className="flex justify-center mb-8">
                        <input
                            type="text"
                            placeholder="Search for tests on any topic"
                            className="py-3 px-6 w-2/3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={searchInput}
                            onChange={onSearchChange}
                        />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold">Quizzes</h2>
                        <SortSelect value={sortOption} onChange={onSortChange} />
                    </div>
                    <FilteredQuizzesContainer searchTerm={searchInput} sortOption={sortOption}>
                        {(filteredQuizzes) => (
                            <div className="grid grid-cols-4 gap-4">
                                {filteredQuizzes && filteredQuizzes.map((quizz, index) => (
                                    <ExploreQuizzCard
                                        key={index}
                                        quizz={quizz}
                                        onClick={() => handleQuizzClick(quizz._id)} // Asegúrate de que estás pasando el ID correcto
                                    />
                                ))}
                            </div>
                        )}
                    </FilteredQuizzesContainer>
                </div>
            </div>
            <ModalCreateQuizz show={showModal} onClose={handleCloseModal} />
        </div>
    );
};

export default ExploreQuizz;
