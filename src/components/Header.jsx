import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
    const [notificationsDropdownVisible, setNotificationsDropdownVisible] = useState(false);

    const toggleProfileDropdown = () => {
        if (notificationsDropdownVisible) {
            setNotificationsDropdownVisible(false);
        }
        setProfileDropdownVisible(!profileDropdownVisible);
    };

    const toggleNotificationsDropdown = () => {
        if (profileDropdownVisible) {
            setProfileDropdownVisible(false);
        }
        setNotificationsDropdownVisible(!notificationsDropdownVisible);
    };

    return (
        <header className="flex items-center justify-between px-6 py-4 bg-purple-100 w-full">
            <div className="flex items-center">
                <Link to="/home" className="flex items-center">
                    <img src={logo} alt="Logo" className="h-12" />
                    <p className="ml-4 font-epilogue text-[18px] leading-[26px] font-bold text-purple-900">KOMI</p>
                </Link>
                <nav className="ml-8 space-x-4">
                    <Link to="/home" className="text-purple-700 hover:text-purple-900">Home</Link>
                    <a href='src/komi/index.html' className="text-purple-700 hover:text-purple-900">Create</a>
                    {/* <Link to="/create" className="text-purple-700 hover:text-purple-900">Create</Link> */}
                    <Link to="/tutorial" className="text-purple-700 hover:text-purple-900">Tutorial</Link>
                    <Link to="/quizz" className="text-purple-700 hover:text-purple-900">Quizz</Link>

                    <a href='https://creator.voiceflow.com/prototype/664fbc81e8061fd0e82cd75e' className="text-purple-700 hover:text-purple-900" target='_blank'>Suggestions</a>

                    {/* <Link to="/support" className="text-purple-700 hover:text-purple-900">Support</Link> */}
                    <Link to="/about" className="text-purple-700 hover:text-purple-900">About us</Link>
                </nav>
            </div>
            <div className="flex items-center space-x-4">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="py-2 px-4 pl-10 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button>
                        <KeyboardVoiceIcon className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                    </button>
                </div>
                {/* <SettingsIcon className="text-gray-700 cursor-pointer" /> */}
                <NotificationsIcon
                    className="text-gray-700 cursor-pointer"
                    onClick={toggleNotificationsDropdown}
                />
                {notificationsDropdownVisible && (
                    <div className="absolute right-0 mt-60 w-80 bg-white border rounded-md shadow-lg">
                        <p className="px-4 py-2 text-gray-800 border-b">Notifications</p>
                        <div >
                            <p className="px-4 py-2 text-gray-800 hover:bg-purple-100">Notification 1</p>
                            <p className="px-4 py-2 text-gray-800 hover:bg-purple-100">Notification 2</p>
                            <p className="px-4 py-2 text-gray-800 hover:bg-purple-100">Notification 3</p>
                            <p className="px-4 py-2 text-gray-800 hover:bg-purple-100">Notification 4</p>
                        </div>
                    </div>
                )}                <div className="relative">
                    <img
                        src="/path/to/profile-pic.jpg"
                        alt="Profile"
                        className="h-10 w-10 rounded-full cursor-pointer"
                        onClick={toggleProfileDropdown}
                    />
                    {profileDropdownVisible && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                            <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-purple-100">Profile</Link>
                            <Link to="/security" className="block px-4 py-2 text-gray-800 hover:bg-purple-100">Security</Link>
                            <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-purple-100">Logout</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
