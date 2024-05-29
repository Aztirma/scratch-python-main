import ExploreIcon from '@mui/icons-material/Explore';
import HomeIcon from '@mui/icons-material/Home';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import React from 'react';
import { useLocation } from 'react-router-dom';

const SidebarTutorial = () => {
    const location = useLocation();

    const getLinkClassName = (path) => {
        return location.pathname === path
            ? 'flex items-center text-white bg-purple-500 rounded-lg p-2 pl-4'
            : 'flex items-center text-gray-600 hover:text-gray-800 p-2 pl-4';
    };

    return (
        <div className="w-64 h-full bg-white flex flex-col p-4 shadow-lg">
            <nav className="flex flex-col space-y-4">
                <a href="http://localhost:5173/tutorial" className={getLinkClassName('/tutorial')}>
                    <HomeIcon className="mr-3" />
                    <span>Home</span>
                </a>
                <a href="http://localhost:5173/tutorial/explore" className={getLinkClassName('/tutorial/explore')}>
                    <ExploreIcon className="mr-3" />
                    <span>Explore</span>
                </a>
                <a href="http://localhost:5173/tutorial/library" className={getLinkClassName('/tutorial/library')}>
                    <VideoLibraryIcon className="mr-3" />
                    <span>My Library</span>
                </a>
            </nav>
        </div>
    );
};

export default SidebarTutorial;
