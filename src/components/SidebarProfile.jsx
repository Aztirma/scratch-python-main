import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SidebarProfile = () => {
    const location = useLocation();

    const getLinkClassName = (path) => {
        console.log(location.pathname);
        return location.pathname === path
            ? 'flex items-center text-gray-800 bg-gray-200 rounded-lg p-2'
            : 'flex items-center text-gray-600 hover:text-gray-800';
    };

    return (
        <div className="w-64 h-full bg-white flex flex-col p-4">
            <div className="flex items-center mb-8">
                <Link to="/profile" className={getLinkClassName('/profile')}>
                <AccountCircleIcon className="text-gray-500 mr-3" />
                <span className="text-lg font-bold text-gray-700">Mi perfil</span>
                </Link>
            </div>
            <nav className="flex flex-col space-y-4">
                {/* <Link to="/progress" className={getLinkClassName('/progress')}>
                    <NotificationsOutlinedIcon className="mr-3" />
                    <span>Progress</span>
                </Link> */}
                <Link to="/security" className={getLinkClassName('/security')}>
                    <LockOutlinedIcon className="mr-3" />
                    <span>Seguridad</span>
                </Link>
                {/* <Link to="/appearance" className={getLinkClassName('/appearance')}>
                    <ArticleOutlinedIcon className="mr-3" />
                    <span>Apariencia</span>
                </Link> */}
                {/* <Link to="/audio" className={getLinkClassName('/audio')}>
                    <CodeOutlinedIcon className="mr-3" />
                    <span>Audio</span>
                </Link>
                <Link to="/language" className={getLinkClassName('/language')}>
                    <PublicOutlinedIcon className="mr-3" />
                    <span>Language</span>
                </Link> */}
                {/* <Link to="/published" className={getLinkClassName('/published')}>
                    <CheckCircleOutlineOutlinedIcon className="mr-3" />
                    <span>Published</span>
                </Link>
                <Link to="/schedule" className={getLinkClassName('/schedule')}>
                    <ScheduleIcon className="mr-3" />
                    <span>Today Schedule</span>
                </Link>
                <Link to="/bookmarks" className={getLinkClassName('/bookmarks')}>
                    <BookmarksOutlinedIcon className="mr-3" />
                    <span>Bookmarks</span>
                </Link> */}
            </nav>
        </div>
    );
};

export default SidebarProfile;
