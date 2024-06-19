import React, { useContext, useEffect, useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import QuizzSidebar from '../../components/SidebarQuizz';
import '../../config/chartConfig';
import clienteAxios from '../../config/clientAxios';
import QuizzContext from '../../context/QuizzProvider';

const ReportQuizz = () => {
    const { quizzes } = useContext(QuizzContext);
    const [gameSessions, setGameSessions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredQuizzes, setFilteredQuizzes] = useState([]);

    useEffect(() => {
        const fetchGameSessions = async () => {
            try {
                const response = await clienteAxios.get('/gamesession');
                setGameSessions(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching game sessions:', error);
            }
        };
        fetchGameSessions();
    }, []);

    useEffect(() => {
        const playedQuizzes = quizzes.filter(quizz =>
            gameSessions.some(session => session.quizz._id === quizz._id)
        );
        setFilteredQuizzes(playedQuizzes);
    }, [gameSessions, quizzes]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <h2 className="text-2xl font-bold text-gray-700">Loading...</h2>
            </div>
        );
    }

    const getAveragePieChartData = () => {
        const totalCorrectAnswers = gameSessions.reduce((acc, session) => acc + session.correctAnswers, 0);
        const totalIncorrectAnswers = gameSessions.reduce((acc, session) => acc + session.incorrectAnswers, 0);
        const totalQuizzes = filteredQuizzes.length;

        const averageCorrectAnswers = totalQuizzes ? totalCorrectAnswers / totalQuizzes : 0;
        const averageIncorrectAnswers = totalQuizzes ? totalIncorrectAnswers / totalQuizzes : 0;

        return {
            labels: ['Promedio de Respuestas Correctas', 'Promedio de Respuestas Incorrectas'],
            datasets: [
                {
                    data: [averageCorrectAnswers, averageIncorrectAnswers],
                    backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(255, 99, 132, 0.2)'],
                    borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)'],
                    borderWidth: 1,
                },
            ],
        };
    };

    const getEfficiencyLineChartData = () => {
        const labels = filteredQuizzes.map(quizz => quizz.name);
        const efficiencyData = filteredQuizzes.map(quizz => {
            const quizzSessions = gameSessions.filter(session => session.quizz._id === quizz._id);
            const correctAnswers = quizzSessions.reduce((acc, session) => acc + session.correctAnswers, 0);
            const totalAnswers = correctAnswers + quizzSessions.reduce((acc, session) => acc + session.incorrectAnswers, 0);
            return totalAnswers ? (correctAnswers / totalAnswers) * 100 : 0;
        });
        const playsData = filteredQuizzes.map(quizz => {
            return gameSessions.filter(session => session.quizz._id === quizz._id).length;
        });

        return {
            labels,
            datasets: [
                {
                    label: 'Eficiencia (%)',
                    data: efficiencyData,
                    fill: false,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    yAxisID: 'y-axis-1',
                },
                {
                    label: 'Quizzes Jugados',
                    data: playsData,
                    fill: false,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    yAxisID: 'y-axis-2',
                },
            ],
        };
    };

    const getBarChartData = (quizzId) => {
        const quizzSessions = gameSessions.filter(session => session.quizz._id === quizzId);
        const correctAnswers = quizzSessions.reduce((acc, session) => acc + session.correctAnswers, 0);
        const incorrectAnswers = quizzSessions.reduce((acc, session) => acc + session.incorrectAnswers, 0);
        const totalPlays = quizzSessions.length;

        return {
            labels: ['Respuestas Correctas', 'Respuestas Incorrectas', 'Total de Jugadas'],
            datasets: [
                {
                    label: 'Número de Respuestas/Jugadas',
                    data: [correctAnswers, incorrectAnswers, totalPlays],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                    ],
                    borderWidth: 1,
                },
            ],
        };
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
    };

    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnArea: false,
                    },
                },
            ],
        },
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        },
    };

    return (
        <div className="flex">
            <QuizzSidebar />
            <div className="p-6 bg-gray-100 min-h-screen flex-grow">
                <h1 className="text-3xl font-bold text-purple-600 mb-4">Reportes de Quizzes</h1>
                
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Rendimiento General</h2>
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <div className="relative" style={{ height: '300px' }}>
                        <Pie data={getAveragePieChartData()} options={chartOptions} />
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quizzes Jugados y Eficiencia</h2>
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                    <div className="relative" style={{ height: '300px' }}>
                        <Line data={getEfficiencyLineChartData()} options={lineChartOptions} />
                    </div>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Quizzes Jugados</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredQuizzes.map((quizz) => (
                        <div key={quizz._id} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{quizz.name}</h3>
                            <div className="relative" style={{ height: '300px' }}>
                                <Bar data={getBarChartData(quizz._id)} options={chartOptions} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReportQuizz;
