import React, { useState } from 'react';
import SidebarLibrary from '../../components/SidebarLibrary';
import SidebarQuizz from '../../components/SidebarQuizz';

const LibraryQuizz = () => {
    const [activeSection, setActiveSection] = useState('created');

    return (
        <div className="flex h-screen">
            <SidebarQuizz />
            <div className="flex flex-col w-64">
                <h2 className="text-2xl font-bold p-4 bg-white shadow">My Library</h2>
                <SidebarLibrary setActiveSection={setActiveSection} />
            </div>
            <div className="flex-1 p-8 bg-gray-100 overflow-auto">
                <div className="bg-white rounded-lg shadow p-6">
                    <div className="flex justify-between items-center mb-4">
                        <input
                            type="text"
                            placeholder="Search in my library"
                            className="py-2 px-4 w-2/3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>
                    <div className="flex mb-4 space-x-4">
                        <button className="py-2 px-4 bg-purple-500 text-white rounded-lg">Published (2)</button>
                        <button className="py-2 px-4 bg-gray-200 text-gray-800 rounded-lg">Drafts (0)</button>
                    </div>
                    <div className="space-y-4">
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="w-16 h-16 mr-4 bg-gray-300 rounded-full">
                                    <img src="https://via.placeholder.com/64" alt="Logo" className="rounded-full"/>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">Conseq</h3>
                                    <p className="text-gray-600">10 Questions · 1st Grade · Science</p>
                                    <p className="text-gray-400">a e · 16 days ago</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="bg-gray-200 text-gray-800 rounded-lg py-2 px-4">Share</button>
                                <button className="bg-purple-500 text-white rounded-lg py-2 px-4">Play</button>
                            </div>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center">
                            <div className="flex items-center">
                                <div className="w-16 h-16 mr-4 bg-gray-300 rounded-full">
                                    <img src="https://via.placeholder.com/64" alt="Logo" className="rounded-full"/>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">One Piece Challenge</h3>
                                    <p className="text-gray-600">10 Questions · 2nd Grade · Other</p>
                                    <p className="text-gray-400">a e · 19 days ago</p>
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button className="bg-gray-200 text-gray-800 rounded-lg py-2 px-4">Share</button>
                                <button className="bg-purple-500 text-white rounded-lg py-2 px-4">Play</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LibraryQuizz;
