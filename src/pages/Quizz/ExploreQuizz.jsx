import React, { useState } from 'react';
import SidebarQuizz from '../../components/SidebarQuizz';
import useAuth from '../../hooks/useAuth';
import useQuizz from '../../hooks/useQuizz';

const ExploreQuizz = () => {
    const { filteredQuizzes, handleSearchChange, handleSortChange } = useQuizz();
    const { user } = useAuth();
    const [searchInput, setSearchInput] = useState('');

    const onSearchChange = (e) => {
        setSearchInput(e.target.value);
        handleSearchChange(e.target.value);
    };

    const onSortChange = (e) => {
        handleSortChange(e.target.value);
    };

    return (
        <div className="flex h-screen">
            <SidebarQuizz />
            <div className="flex-1 p-8 bg-gray-100 overflow-auto">
                <div className="bg-white rounded-lg shadow p-6">
                    <h1 className="text-3xl font-bold mb-4">What are you looking for today?</h1>
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
                        <select
                            className="border border-gray-300 rounded p-2 text-gray-600"
                            onChange={onSortChange}
                        >
                            <option value="Newest">Sort by: Most played</option>
                            <option value="Oldest">Sort by: Least playe</option>
                            <option value="Highest Rated">Sort by: Highest Rated</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {filteredQuizzes.map((quizz, index) => (
                            <QuizzCard key={index} quizz={quizz} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const QuizzCard = ({ quizz }) => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow">
            <div className="h-40 bg-pink-200 mb-2"></div>
            <h3 className="text-lg font-bold">{quizz.name}</h3>
            <p>{quizz.questions.length} Questions · {quizz.plays} play · Rating: {quizz.rating}</p>
        </div>
    );
};

export default ExploreQuizz;
