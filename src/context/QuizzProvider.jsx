import React, { createContext, useEffect, useState } from 'react';

// Crear el contexto
const QuizzContext = createContext();

// Datos iniciales de ejemplo
const initialDummyQuizz = [
    {
        id: 1,
        name: 'Introduction to Programming with Python',
        plays: '140.4K',
        isDraft: false,
        creator: 'admin',
        rating: 4.5,
        questions: [
            { 
                question: 'What is a variable in Python?', 
                options: ['A type of function', 'A storage location', 'An operator', 'A loop'], 
                correctAnswer: 'A storage location' 
            },
            { 
                question: 'How do you write a comment in Python?', 
                options: ['//', '<!-- -->', '#', '--'], 
                correctAnswer: '#' 
            },
            { 
                question: 'Which of the following is a correct way to create a list in Python?', 
                options: ['list = (1, 2, 3)', 'list = [1, 2, 3]', 'list = {1, 2, 3}', 'list = <1, 2, 3>'], 
                correctAnswer: 'list = [1, 2, 3]' 
            },
            { 
                question: 'What is the output of print(2 ** 3)?', 
                options: ['5', '6', '8', '9'], 
                correctAnswer: '8' 
            },
            { 
                question: 'How do you create a function in Python?', 
                options: ['function myFunction()', 'create myFunction()', 'def myFunction()', 'function:myFunction()'], 
                correctAnswer: 'def myFunction()' 
            }
        ],
    },
    {
        id: 2,
        name: 'Visual Programming for Everyone',
        plays: '12.8K',
        isDraft: false,
        creator: 'ale',
        rating: 4.7,
        questions: [
            { 
                question: 'What is visual programming?', 
                options: ['Programming with text', 'Programming with graphical elements', 'Programming with sounds', 'Programming with numbers'], 
                correctAnswer: 'Programming with graphical elements' 
            },
            { 
                question: 'Which tool is commonly used for visual programming?', 
                options: ['Jupyter Notebook', 'Eclipse', 'Scratch', 'PyCharm'], 
                correctAnswer: 'Scratch' 
            },
            { 
                question: 'In visual programming, what represents a function?', 
                options: ['A loop', 'A block', 'A variable', 'An operator'], 
                correctAnswer: 'A block' 
            },
            { 
                question: 'What is an advantage of visual programming?', 
                options: ['Requires no logic', 'Easier for beginners', 'No need for hardware', 'Faster than text programming'], 
                correctAnswer: 'Easier for beginners' 
            },
            { 
                question: 'Which of the following is a visual programming language?', 
                options: ['Python', 'JavaScript', 'Snap!', 'C++'], 
                correctAnswer: 'Snap!' 
            }
        ],
    },
    {
        id: 3,
        name: 'Logic and Control Structures',
        plays: '31.9K',
        isDraft: false,
        creator: 'admin',
        rating: 3.7,
        questions: [
            { 
                question: 'What is a control structure?', 
                options: ['A data storage format', 'A block of code that controls the flow of execution', 'A type of variable', 'A type of function'], 
                correctAnswer: 'A block of code that controls the flow of execution' 
            },
            { 
                question: 'Which of the following is a conditional control structure?', 
                options: ['for loop', 'while loop', 'if statement', 'def statement'], 
                correctAnswer: 'if statement' 
            },
            { 
                question: 'How do you start a for loop in Python?', 
                options: ['for i = 1 to 10', 'for (i = 1; i <= 10; i++)', 'for i in range(10)', 'for (i in 1..10)'], 
                correctAnswer: 'for i in range(10)' 
            },
            { 
                question: 'What does the continue statement do?', 
                options: ['Exits the loop', 'Skips the current iteration and continues with the next one', 'Ends the program', 'Pauses the loop'], 
                correctAnswer: 'Skips the current iteration and continues with the next one' 
            },
            { 
                question: 'Which of the following is used to create a function in Python?', 
                options: ['function', 'define', 'def', 'func'], 
                correctAnswer: 'def' 
            }
        ],
    },
    {
        id: 4,
        name: 'Multisensory Elements in Programming',
        plays: '31.9K',
        isDraft: true,
        creator: 'ale',
        rating: 3.0,
        questions: [
            { 
                question: 'What are multisensory elements in programming?', 
                options: ['Elements that engage multiple senses', 'Elements that are only visual', 'Elements that are only auditory', 'Elements that are only textual'], 
                correctAnswer: 'Elements that engage multiple senses' 
            },
            { 
                question: 'Which of the following is an example of a multisensory element?', 
                options: ['Text', 'Images', 'Audio and video', 'None of the above'], 
                correctAnswer: 'Audio and video' 
            },
            { 
                question: 'What is the benefit of using multisensory elements in learning?', 
                options: ['Makes learning slower', 'Engages only visual learners', 'Engages multiple learning styles', 'Reduces understanding'], 
                correctAnswer: 'Engages multiple learning styles' 
            },
            { 
                question: 'Which tool can be used to create multisensory learning experiences?', 
                options: ['Notepad', 'Excel', 'PowerPoint', 'Audacity'], 
                correctAnswer: 'PowerPoint' 
            },
            { 
                question: 'How can video elements enhance learning?', 
                options: ['By providing static information', 'By engaging auditory and visual senses', 'By reducing interaction', 'By focusing only on text'], 
                correctAnswer: 'By engaging auditory and visual senses' 
            }
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
                filtered = filtered.filter(quizz => quizz.creator !== 'admin');
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
