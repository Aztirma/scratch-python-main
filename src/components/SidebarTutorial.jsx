// SidebarTutorial.jsx
import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarTutorial = () => {
    const location = useLocation();

    const getLinkClassName = (path) => {
        return location.pathname === path
            ? 'flex items-center text-white bg-lavender-500 rounded-lg p-2 pl-4'
            : 'flex items-center text-gray-600 hover:text-gray-800 pl-4';
    };

    return (
        <div className="w-64 h-full bg-white flex flex-col p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
                <Link to="/tutorial/home" className={getLinkClassName('/tutorial/home')}>
                    <HomeIcon className="mr-3" />
                    <span>Home</span>
                </Link>
                <Link to="/tutorial/explore" className={getLinkClassName('/tutorial/explore')}>
                    <ExploreIcon className="mr-3" />
                    <span>Explore</span>
                </Link>
                <Link to="/tutorial/library" className={getLinkClassName('/tutorial/library')}>
                    <VideoLibraryIcon className="mr-3" />
                    <span>My Library</span>
                </Link>
            </nav>
        </div>
    );
};

export default SidebarTutorial;

