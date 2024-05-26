import BarChartIcon from '@mui/icons-material/BarChart';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import React from 'react';
import SidebarQuizz from '../../components/SidebarQuizz';

const ReportQuizz = () => {
  const quizData = [
    { title: 'Math Basics', plays: 120, highScore: 98 },
    { title: 'Science Facts', plays: 150, highScore: 95 },
    { title: 'History 101', plays: 100, highScore: 92 },
  ];

  return (
    <div className="flex h-screen bg-gray-200">
      <SidebarQuizz />
      <div className="flex-1 p-8 overflow-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-6 text-purple-800">Reports</h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-purple-100 p-4 rounded-lg shadow flex items-center">
              <InsertChartIcon className="text-purple-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold mb-1">Total Quizzes Created</h2>
                <p className="text-purple-800 text-4xl">29</p>
              </div>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow flex items-center">
              <BarChartIcon className="text-purple-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold mb-1">Total Plays</h2>
                <p className="text-purple-800 text-4xl">1500</p>
              </div>
            </div>
            <div className="bg-purple-100 p-4 rounded-lg shadow flex items-center">
              <EmojiEventsIcon className="text-purple-600 mr-4" />
              <div>
                <h2 className="text-2xl font-bold mb-1">Average Score</h2>
                <p className="text-purple-800 text-4xl">85%</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Quiz Performance</h2>
          <div className="grid grid-cols-1 gap-6">
            {quizData.map((quiz, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2 text-purple-800">{quiz.title}</h3>
                <div className="flex items-center mb-2">
                  <span className="w-20 text-gray-700 font-bold">Plays</span>
                  <div className="bg-gray-300 h-6 flex-1 mx-2 rounded">
                    <div
                      className="bg-blue-500 h-6 rounded"
                      style={{ width: `${quiz.plays / 10}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-700 font-bold">{quiz.plays}</span>
                </div>
                <div className="flex items-center">
                  <span className="w-20 text-gray-700 font-bold">High Score</span>
                  <div className="bg-gray-300 h-6 flex-1 mx-2 rounded">
                    <div
                      className="bg-green-500 h-6 rounded"
                      style={{ width: `${quiz.highScore}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-700 font-bold">{quiz.highScore}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-6 text-purple-800">Recent Activity</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">User X created a new quiz <span className="font-bold text-purple-800">"Math Basics"</span></li>
            <li className="mb-2">User Y played <span className="font-bold text-purple-800">"Science Facts"</span> quiz</li>
            <li className="mb-2">User Z achieved a high score on <span className="font-bold text-purple-800">"History 101"</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReportQuizz;





