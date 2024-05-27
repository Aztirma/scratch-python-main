import React from 'react';
import SidebarQuizz from '../../components/SidebarQuizz';
import { useState } from 'react';
import useQuizz from '../../hooks/useQuizz';
import useAuth from '../../hooks/useAuth';

const ExploreQuizz = () => {
    const {quizzes} = useQuizz();
    const {user} = useAuth();

    console.log("User");
    console.log(user);
    console.log("Quizzes");
    console.log(quizzes);
    return (
        <div className="flex h-screen">
            <SidebarQuizz />
            <div className="flex-1 p-8 bg-gray-100 overflow-auto">
                <div className="bg-white rounded-lg shadow p-6">
                    <h1 className="text-3xl font-bold mb-4">What are you looking for today?</h1>
                    <div className="flex justify-center mb-8">
                        <input
                            type="text"
                            placeholder="Search for tests on any topic"
                            className="py-3 px-6 w-2/3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Quizz</h2>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="bg-gray-200 p-4 rounded-lg shadow">
                            <div className="h-40 bg-pink-200 mb-2"></div>
                            <h3 className="text-lg font-bold">Introduction to Programming with Python</h3>
                            <p>4 Questions · 140.4K plays</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow">
                            <div className="h-40 bg-pink-200 mb-2"></div>
                            <h3 className="text-lg font-bold">Visual Programming for Everyone</h3>
                            <p>10 Slides · 12.8K plays</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow">
                            <div className="h-40 bg-pink-200 mb-2"></div>
                            <h3 className="text-lg font-bold">Logic and Control Structures</h3>
                            <p>10 Questions · 31.9K plays</p>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow">
                            <div className="h-40 bg-pink-200 mb-2"></div>
                            <h3 className="text-lg font-bold">Multisensory Elements in Programming</h3>
                            <p>10 Questions · 31.9K plays</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="bg-purple-500 text-white rounded-lg py-2 px-4">See more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreQuizz;
