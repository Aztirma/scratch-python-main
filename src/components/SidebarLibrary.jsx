import AllInboxIcon from '@mui/icons-material/AllInbox';
import HistoryIcon from '@mui/icons-material/History';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import React from 'react';
import { useLocation } from 'react-router-dom';

const SidebarLibrary = ({ setActiveSection }) => {
    const location = useLocation();

    const getLinkClassName = (section) => {
        return section === location.pathname
            ? 'flex items-center text-purple-500 bg-purple-100 rounded-lg p-2 pl-4'
            : 'flex items-center text-gray-600 hover:text-gray-800 pl-4';
    };

    return (
        <div className="w-64 h-full bg-white flex flex-col p-4 shadow-lg mt-4">
            <nav className="flex flex-col space-y-4">
                <button
                    onClick={() => setActiveSection('created')}
                    className={getLinkClassName('created')}
                >
                    <LibraryBooksIcon className="mr-3" />
                    <span>Created by me</span>
                </button>
                <button
                    onClick={() => setActiveSection('imported')}
                    className={getLinkClassName('imported')}
                >
                    <ImportContactsIcon className="mr-3" />
                    <span>Imported</span>
                </button>
                <button
                    onClick={() => setActiveSection('used')}
                    className={getLinkClassName('used')}
                >
                    <HistoryIcon className="mr-3" />
                    <span>Previously used</span>
                </button>
                <button
                    onClick={() => setActiveSection('all')}
                    className={getLinkClassName('all')}
                >
                    <AllInboxIcon className="mr-3" />
                    <span>All my content</span>
                </button>
            </nav>
        </div>
    );
};

export default SidebarLibrary;





