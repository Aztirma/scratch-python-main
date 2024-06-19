import React, { createContext, useEffect, useState } from 'react';
import clienteAxios from '../config/clientAxios';

// Crear el contexto
const CourseContext = createContext();

// Datos iniciales de ejemplo

const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);
    const [questions, setQuestions] = useState([{ question: '', options: ['', ''], correctAnswer: '' }]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await clienteAxios.get('/quizz');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }
        };
        fetchQuizzes();
    }, []);

    const handleQuestionChange = (index, value) => {
        const newQuestions = [...questions];
        newQuestions[index].question = value;
        setQuestions(newQuestions);
    };

    const handleOptionChangeAtIndex = (qIndex, oIndex, value) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options[oIndex] = value;
        setQuestions(newQuestions);
    };

    const handleCorrectAnswerChange = (index, value) => {
        const newQuestions = [...questions];
        newQuestions[index].correctAnswer = value;
        setQuestions(newQuestions);
    };

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: '', options: ['', ''], correctAnswer: '' }]);
    };

    const handleAddOption = (qIndex) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options.push('');
        setQuestions(newQuestions);
    };

    const handleRemoveOption = (qIndex, oIndex) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].options.splice(oIndex, 1);
        setQuestions(newQuestions);
    };

    const addQuiz = async (quiz) => {
        try {
            console.log('Creating quiz with data:', JSON.stringify(quiz, null, 2)); // Debugging line
            const response = await clienteAxios.post('/quizz', quiz);
            setCourses([...courses, response.data]);
        } catch (error) {
            console.error('Error adding quiz:', error);
        }
    };

    return (
        <CourseContext.Provider
            value={{
                quizzes: courses,
                questions,
                setQuizzes: setCourses,
                handleQuestionChange,
                handleOptionChangeAtIndex,
                handleCorrectAnswerChange,
                handleAddQuestion,
                handleAddOption,
                handleRemoveOption,
                addQuiz
            }}
        >
            {children}
        </CourseContext.Provider>
    );
};

export { CourseProvider as QuizzProvider };
export default CourseContext;