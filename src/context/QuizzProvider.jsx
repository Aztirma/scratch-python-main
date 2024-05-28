import React, { createContext, useEffect, useState } from 'react';

// Crear el contexto
const QuizzContext = createContext();

// Datos iniciales de ejemplo
const initialDummyQuizz = [
    {
        name: 'Introduction to Programming with Python',
        plays: '140.4K',
        isDraft: false,
        creator: 'admin',
        rating: 4.5,
        questions: [
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
        ],
        isImported: false,
        isPreviouslyUsed: false,
    },
    {
        name: 'Visual Programming for Everyone',
        plays: '12.8K',
        isDraft: false,
        creator: 'ale',
        rating: 4.7,
        questions: [
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
        ],
        isImported: true,
        isPreviouslyUsed: true,
    },
    {
        name: 'Logic and Control Structures',
        plays: '31.9K',
        isDraft: true,
        creator: 'admin',
        rating: 3.7,
        questions: [
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
        ],
        isImported: false,
        isPreviouslyUsed: false,
    },
    {
        name: 'Multisensory Elements in Programming',
        plays: '31.9K',
        isDraft: true,
        creator: 'ale',
        rating: 3.0,
        questions: [
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
        ],
        isImported: true,
        isPreviouslyUsed: true,
    },
    {
        name: 'Multisensory Elements',
        plays: '30.9K',
        isDraft: true,
        creator: 'ale',
        rating: 4.0,
        questions: [
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
        ],
        isImported: false,
        isPreviouslyUsed: true,
    }
];

// Función para filtrar quizzes
const filterQuizzes = (quizzes, searchTerm) => {
    return quizzes.filter(quizz => quizz.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
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

// Componente funcional que provee el contexto
const QuizzProvider = ({ children }) => {
    const [quizzes, setQuizzes] = useState(initialDummyQuizz);

    // Estados y funciones para ExploreQuizz
    const [filteredQuizzesExplore, setFilteredQuizzesExplore] = useState([]);
    const [searchTermExplore, setSearchTermExplore] = useState('');
    const [sortOptionExplore, setSortOptionExplore] = useState('Most played');

    // Estados y funciones para LibraryQuizz
    const [filteredQuizzesLibrary, setFilteredQuizzesLibrary] = useState([]);
    const [searchTermLibrary, setSearchTermLibrary] = useState('');
    const [sortOptionLibrary, setSortOptionLibrary] = useState('Most played');
    const [libraryCategory, setLibraryCategory] = useState('all');

    useEffect(() => {
        let filtered = filterQuizzes(quizzes, searchTermExplore);
        let sorted = sortQuizzes(filtered, sortOptionExplore);
        setFilteredQuizzesExplore(sorted);
    }, [quizzes, searchTermExplore, sortOptionExplore]);

    useEffect(() => {
        let filtered = filterQuizzes(quizzes, searchTermLibrary);

        switch (libraryCategory) {
            case 'created':
                filtered = filtered.filter(quizz => quizz.creator == 'admin');
                break;
            case 'imported':
                filtered = filtered.filter(quizz => quizz.isImported);
                break;
            case 'previouslyUsed':
                filtered = filtered.filter(quizz => quizz.isPreviouslyUsed);
                break;
            case 'published':
                filtered = filtered.filter(quizz => quizz.creator == 'admin' && !quizz.isDraft);
                break;
            case 'drafts':
                filtered = filtered.filter(quizz => quizz.creator == 'admin' && quizz.isDraft);
                break;
            case 'all':
            default:
                break;
        }

        let sorted = sortQuizzes(filtered, sortOptionLibrary);
        setFilteredQuizzesLibrary(sorted);
    }, [quizzes, searchTermLibrary, sortOptionLibrary, libraryCategory]);

    return (
        <QuizzContext.Provider
            value={{
                quizzes,
                filteredQuizzesExplore,
                setSearchTermExplore,
                setSortOptionExplore,
                filteredQuizzesLibrary,
                setSearchTermLibrary,
                setSortOptionLibrary,
                setLibraryCategory,
            }}
        >
            {children}
        </QuizzContext.Provider>
    );
};

export { QuizzProvider };
export default QuizzContext;
