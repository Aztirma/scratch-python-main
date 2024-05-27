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
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' }
        ],

    },
    {
        name: 'Visual Programming for Everyone',
        plays: '12.8K',
        isDraft: false,
        creator: 'ale',
        rating: 4.7,
        questions: [
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' }
        ],

    },
    {
        name: 'Logic and Control Structures',
        plays: '31.9K',
        isDraft: false,
        creator: 'admin',
        rating: 3.7,
        questions: [
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' }
        ],
    },
    {
        name: 'Multisensory Elements in Programming',
        plays: '31.9K',
        isDraft: true,
        creator: 'ale',
        rating: 3.0,
        questions: [
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' }
        ],
    },
    {
        name: 'Multisensory Elements',
        plays: '30.9K',
        isDraft: true,
        creator: 'ale',
        rating: 4.0,
        questions: [
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' },
            { question: 'What is the capital of France?', options: ['New York', 'London', 'Paris', 'Dublin'], correctAnswer: 'Paris' }
        ],
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
        case 'Newest':
            sortedQuizzes.sort((a, b) => parseFloat(b.plays) - parseFloat(a.plays));
            break;
        case 'Oldest':
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
    // Definimos el estado para los quizzes y otras variables de estado necesarias
    const [quizzes, setQuizzes] = useState(initialDummyQuizz);
    const [filteredQuizzes, setFilteredQuizzes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('Newest');

    // useEffect para filtrar y ordenar los quizzes cada vez que cambian
    useEffect(() => {
        let filtered = filterQuizzes(quizzes, searchTerm);
        let sorted = sortQuizzes(filtered, sortOption);
        setFilteredQuizzes(sorted);
    }, [quizzes, searchTerm, sortOption]);

    const handleSearchChange = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    const handleSortChange = (sortOption) => {
        setSortOption(sortOption);
    };

    // Retornamos el proveedor del contexto con los valores y funciones que queremos compartir
    return (
        <QuizzContext.Provider 
            value={{ 
                quizzes, 
                filteredQuizzes, 
                handleSearchChange,
                handleSortChange }}>
            {children}
        </QuizzContext.Provider>
    );
};

export { QuizzProvider };
export default QuizzContext;
