import React, { useContext, useState, createContext } from 'react';

const QuizzContext = createContext();

const initialDummyQuizz = [
    {
        name: 'Introduction to Programming with Python', rating: '140.4K', isDraft: false, questions: [
            {
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            },
			{
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            },
			{
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            },
			{
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            }
        ],
		creator: 'admin'
    },

	{
        name: 'Visual Programming for Everyone', rating: '12.8K', isDraft: false, questions: [
            {
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            },
			{
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            },
			{
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            },
			{
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            }
        ],
		creator: 'ale'
    },
	
	{
        name: 'Logic and Control Structures', rating: '31.9K', isDraft: false, questions: [
            {
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            },
			{
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            },
			{
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            },
			{
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            }
        ],
		creator: 'admin'
    },
	{
        name: '	Multisensory Elements in Programming', rating: '31.9K', isDraft: true, questions: [
            {
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            },
			{
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            },
			{
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            },
			{
                question: 'What is the capital of France?',
                options: ['New York', 'London', 'Paris', 'Dublin'],
                correctAnswer: 'Paris'
            }
        ],
		creator: 'ale'
    }
];

const QuizzProvider = ({ children }) => {
    const [quizzes, setQuizzes] = useState(initialDummyQuizz);


    // const login = (username, password, callback) => {
    //     const foundUser = dummyQuizz.find(u => u.username === username && u.password === password);
    //     if (foundUser) {
    //         setUser(foundUser);
    //         callback();
    //     } else {
    //         alert("Invalid username or password");
    //         setUser(null);
    //     }
    // };

    // const logout = () => {
    //     setUser(null);
    // };

    // const createAccount = (username, password, callback) => {
    //     const existingUser = dummyQuizz.find(u => u.username === username);
    //     if (existingUser) {
    //         alert("Username already exists");
    //         return;
    //     }
    //     const newUser = { username, password };
    //     setDummyQuizz([...dummyQuizz, newUser]);
    //     //setUser(newUser);
    //     setNewUserEmail(username);
    //     callback();
    //};

    return (
        <QuizzContext.Provider
            value={{
                quizzes,
                // newUserEmail,
                // login,
                // logout,
                // createAccount,
            }}>
            {children}
        </QuizzContext.Provider>
    );

};

export {
    QuizzProvider
}

export default QuizzContext;