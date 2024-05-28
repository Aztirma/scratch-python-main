import React, { useContext, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import SidebarQuizz from '../../components/SidebarQuizz';
import QuizzContext from '../../context/QuizzProvider';

const ReportQuizz = () => {
    const { quizzes } = useContext(QuizzContext);

    useEffect(() => {
        console.log(quizzes);
    }, [quizzes]);

    const quizNames = quizzes.map(quiz => quiz.name);
    const quizPlays = quizzes.map(quiz => parseFloat(quiz.plays.replace(/[^0-9.]/g, '')));
    const quizRatings = quizzes.map(quiz => quiz.rating);
    const userQuizzes = quizzes.filter(quiz => quiz.creator === 'current_user'); // Cambia 'current_user' por el usuario actual

    // Obtener la cantidad de quizzes por estado (Published/Drafts)
    const publishedQuizzes = userQuizzes.filter(quiz => !quiz.isDraft);
    const draftQuizzes = userQuizzes.filter(quiz => quiz.isDraft);

    const playsData = {
        labels: quizNames,
        datasets: [
            {
                label: 'Number of Plays',
                data: quizPlays,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const ratingsData = {
        labels: quizNames,
        datasets: [
            {
                label: 'Ratings',
                data: quizRatings,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
            },
        ],
    };

    const publishedDraftData = {
        labels: ['Published', 'Drafts'],
        datasets: [
            {
                data: [publishedQuizzes.length, draftQuizzes.length],
                backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)'],
                borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="flex h-screen">
            <SidebarQuizz />
            <div className="flex-1 p-8 bg-gray-100 overflow-auto">
                <h1 className="text-2xl font-bold mb-4">My Quiz Reports</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Number of Plays</h2>
                        <Bar data={playsData} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Ratings</h2>
                        <Bar data={ratingsData} />
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">Published vs Drafts</h2>
                        <Pie data={publishedDraftData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportQuizz;
