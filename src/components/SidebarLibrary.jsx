import React from 'react';

const SidebarLibrary = ({ setActiveSection }) => {
    return (
        <div className="p-4 bg-white shadow flex flex-col space-y-2">
            <button 
                className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded"
                onClick={() => setActiveSection('created')}
            >
                <i className="icon-class-name"></i>
                <span>Created by me</span>
            </button>
            <button 
                className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded"
                onClick={() => setActiveSection('imported')}
            >
                <i className="icon-class-name"></i>
                <span>Imported</span>
            </button>
            <button 
                className="flex items-center space-x-2 text-gray-700 hover:bg-gray-200 p-2 rounded"
                onClick={() => setActiveSection('all')}
            >
                <i className="icon-class-name"></i>
                <span>All my content</span>
            </button>
        </div>
    );
};

export default SidebarLibrary;





