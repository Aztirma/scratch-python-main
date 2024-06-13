import React, { useContext, useEffect, useState } from 'react';
import QuizzContext from '../context/QuizzProvider';

// Función para filtrar quizzes
const filterQuizzes = (quizzes, searchTerm) => {
    return quizzes.filter(quizz => quizz.name.toLowerCase().includes(searchTerm.toLowerCase()));
};

// Función para ordenar quizzes
const sortQuizzes = (quizzes, sortOption) => {
    let sortedQuizzes = [...quizzes];
    switch (sortOption) {
        case 'Most played':
            sortedQuizzes.sort((a, b) => parseFloat(b.plays) - parseFloat(a.plays));
            break;
        case 'Least played':
            sortedQuizzes.sort((a, b) => parseFloat(a.plays) - parseFloat(b.plays));
            break;
        case 'Highest Rated':
            sortedQuizzes.sort((a, b) => b.rating - a.rating);
            break;
        default:
            break;
    }
    return sortedQuizzes;
};

const FilteredQuizzesContainer = ({ children, searchTerm, sortOption, category }) => {
    const { quizzes } = useContext(QuizzContext);
    const [filteredQuizzes, setFilteredQuizzes] = useState([]);

    useEffect(() => {
        let filtered = filterQuizzes(quizzes, searchTerm);

        if (category) {
            switch (category) {
                case 'created':
                    filtered = filtered.filter(quizz => quizz.creator === 'admin');
                    break;
                case 'imported':
                    filtered = filtered.filter(quizz => quizz.creator !== 'admin');
                    break;
                case 'previouslyUsed':
                    filtered = filtered.filter(quizz => quizz.isPreviouslyUsed);
                    break;
                case 'published':
                    filtered = filtered.filter(quizz => quizz.creator === 'admin' && !quizz.isDraft);
                    break;
                case 'drafts':
                    filtered = filtered.filter(quizz => quizz.creator === 'admin' && quizz.isDraft);
                    break;
                case 'all':
                default:
                    break;
            }
        }

        const sorted = sortQuizzes(filtered, sortOption);
        setFilteredQuizzes(sorted);
    }, [quizzes, searchTerm, sortOption, category]);

    return (
        <>
            {children(filteredQuizzes)}
        </>
    );
};

export default FilteredQuizzesContainer;
