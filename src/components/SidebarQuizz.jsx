import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarQuizz = ({ onOpenModal }) => {
    const location = useLocation();

    const getLinkClassName = (path) => {
        return location.pathname === path
            ? 'flex items-center text-white bg-purple-500 rounded-lg p-2 pl-4'
            : 'flex items-center text-gray-600 hover:text-gray-800 pl-4';
    };

    return (
        <div className="w-64 h-full bg-white flex flex-col p-4 shadow-lg">
            <button 
                className="bg-purple-500 hover:bg-purple-700 text-white rounded-lg py-2 px-4 flex items-center mb-8"
                onClick={onOpenModal}
            >
                <AddCircleOutlineIcon className="mr-2" />
                <span>Create</span>
            </button>
            <nav className="flex flex-col space-y-4">
                <Link to="/explore" className={getLinkClassName('/explore')}>
                    <ExploreIcon className="mr-3" />
                    <span>Explore</span>
                </Link>
                <Link to="/library" className={getLinkClassName('/library')}>
                    <BorderAllIcon className="mr-3" />
                    <span>My Library</span>
                </Link>
                <Link to="/reports" className={getLinkClassName('/reports')}>
                    <HomeIcon className="mr-3" />
                    <span>Reports</span>
                </Link>
            </nav>
        </div>
    );
};

export default SidebarQuizz;
