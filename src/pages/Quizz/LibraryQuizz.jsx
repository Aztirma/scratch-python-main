import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FilteredQuizzesContainer from '../../components/FilteredQuizzesContainer';
import LibraryQuizzCard from '../../components/LibraryQuizzCard';
import ModalCreateQuizz from '../../components/ModalCreateQuizz';
import SidebarLibrary from '../../components/SidebarLibrary';
import SidebarQuizz from '../../components/SidebarQuizz';
import SortSelect from '../../components/SortSelect';

const LibraryQuizz = () => {
    const [searchInput, setSearchInput] = useState('');
    const [sortOption, setSortOption] = useState('Most played');
    const [activeSection, setActiveSection] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handlePlayClick = (id) => {
        navigate(`/quizz/game/${id}`);
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const renderCreatedByMeButtons = () => (
        <div className="flex mb-4 space-x-4">
            {['published', 'drafts'].map((section) => (
                <button
                    key={section}
                    className={`py-2 px-4 ${activeSection === section ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-lg`}
                    onClick={() => handleSectionChange(section)}
                >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
            ))}
        </div>
    );

    return (
        <div className="flex h-screen">
            <SidebarQuizz onOpenModal={handleOpenModal} />
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
                            onChange={handleSearchChange}
                        />
                        <SortSelect value={sortOption} onChange={handleSortChange} />
                    </div>
                    {activeSection === 'created' && renderCreatedByMeButtons()}
                    {['published', 'drafts'].includes(activeSection) && renderCreatedByMeButtons()}
                    <FilteredQuizzesContainer searchTerm={searchInput} sortOption={sortOption} category={activeSection}>
                        {(filteredQuizzes) => (
                            <div className="space-y-4">
                                {filteredQuizzes.map((quizz) => (
                                    <LibraryQuizzCard
                                        key={quizz.id}
                                        quizz={quizz}
                                        onClick={() => handlePlayClick(quizz.id)}
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

export default LibraryQuizz;
