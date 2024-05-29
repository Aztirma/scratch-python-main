import { Chart } from 'chart.js/auto';
import React, { useContext, useEffect } from 'react';
import SidebarQuizz from '../../components/SidebarQuizz';
import QuizzContext from '../../context/QuizzProvider';

const ReportQuizz = () => {
    const { quizzes } = useContext(QuizzContext);
    console.log(quizzes);

    const quizNames = quizzes.map(quiz => quiz.name);
    const quizPlays = quizzes.map(quiz => parseFloat(quiz.plays.replace(/[^0-9.]/g, '')));
    const quizRatings = quizzes.map(quiz => quiz.rating);

    useEffect(() => {
        const playsCtx = document.getElementById('playsChart').getContext('2d');
        const ratingsCtx = document.getElementById('ratingsChart').getContext('2d');

        let playsChart;
        let ratingsChart;

        if (Chart.getChart('playsChart')) {
            Chart.getChart('playsChart').destroy();
        }
        if (Chart.getChart('ratingsChart')) {
            Chart.getChart('ratingsChart').destroy();
        }

        playsChart = new Chart(playsCtx, {
            type: 'bar',
            data: {
                labels: quizNames,
                datasets: [{
                    label: 'Number of Plays',
                    data: quizPlays,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        ratingsChart = new Chart(ratingsCtx, {
            type: 'bar',
            data: {
                labels: quizNames,
                datasets: [{
                    label: 'Ratings',
                    data: quizRatings,
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: 'rgba(153, 102, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        return () => {
            if (playsChart) playsChart.destroy();
            if (ratingsChart) ratingsChart.destroy();
        };
    }, [quizzes]);

    return (
        <div className="flex h-screen">
            <SidebarQuizz />
            <div className="flex-1 p-8 bg-gray-100 overflow-auto">
                <div className="bg-white rounded-lg shadow p-6">
                    <h2 className="text-2xl font-bold mb-4">Report of Quizzes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-4">Number of Plays</h3>
                            <div className="relative h-64">
                                <canvas id="playsChart"></canvas>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow">
                            <h3 className="text-xl font-semibold mb-4">Ratings</h3>
                            <div className="relative h-64">
                                <canvas id="ratingsChart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportQuizz;
