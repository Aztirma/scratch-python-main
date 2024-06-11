import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsIcon from '@mui/icons-material/Notifications';
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
                    <Link to="/home" className="text-purple-700 hover:text-purple-900">Inicio</Link>
                    {/* <a href='src/komi/index.html' className="text-purple-700 hover:text-purple-900">Crear</a> */}
                    <Link to="/create" className="text-purple-700 hover:text-purple-900">Create</Link>
                    <Link to="/tutorial" className="text-purple-700 hover:text-purple-900">Tutorial</Link>
                    <Link to="/quizz" className="text-purple-700 hover:text-purple-900">Quizz</Link>
                    <Link to="/support" className="text-purple-700 hover:text-purple-900">Sugerencias</Link>
                    {/* <Link to="/support" className="text-purple-700 hover:text-purple-900">Support</Link> */}
                    <Link to="/about" className="text-purple-700 hover:text-purple-900">Nosotros</Link>
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
                <NotificationsIcon
                    className="text-gray-700 cursor-pointer"
                    onClick={toggleNotificationsDropdown}
                />
                {notificationsDropdownVisible && (
                    <div className="absolute right-0 mt-60 w-80 bg-white border rounded-md shadow-lg">
                        <p className="px-4 py-2 text-gray-800 border-b">Notificaciones</p>
                        <div>
                            <p className="px-4 py-2 text-gray-800 hover:bg-purple-100">Notification 3</p>
                            <p className="px-4 py-2 text-gray-800 hover:bg-purple-100">Notification 2</p>
                            <p className="px-4 py-2 text-gray-800 hover:bg-purple-100">Notification 1</p>
                            <p className="px-4 py-2 text-gray-800 hover:bg-purple-100">Bienvenido a la aplicación</p>
                        </div>
                    </div>
                )}
                <div className="relative">
                    <AccountCircleIcon 
                        className="text-gray-700 cursor-pointer" 
                        style={{ fontSize: 40 }} 
                        onClick={toggleProfileDropdown} 
                    />
                    {profileDropdownVisible && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                            <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-purple-100">Perfil</Link>
                            <Link to="/security" className="block px-4 py-2 text-gray-800 hover:bg-purple-100">Seguridad</Link>
                            <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-purple-100">Salir</Link>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
