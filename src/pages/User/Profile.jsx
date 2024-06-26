import EditIcon from '@mui/icons-material/Edit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React, { useEffect, useState } from 'react';
import SidebarProfile from '../../components/SidebarProfile';
import useAuth from '../../hooks/useAuth';

const Profile = () => {
    const { user } = useAuth();
    const [newFullName, setNewFullName] = useState('');
    const [newUserName, setNewUserName] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState(null);

    useEffect(() => {
        // Inicializa los estados con los datos del usuario actual
        if (user) {
            setFullName(user.fullName);
            setUserName(user.username);
            setEmail(user.email);
            setNewFullName(user.fullName);
            setNewUserName(user.username);
            setNewEmail(user.email);
        }
    }, [user]);

    const handleProfilePicChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setProfilePic(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleUpdateInfo = () => {
        // Actualiza la información mostrada con los nuevos valores ingresados
        setFullName(newFullName);
        setUserName(newUserName);
        setEmail(newEmail);
        alert('Profile updated!');
    };

    const handleCancelUpdate = () => {
        // Restablece los campos de entrada con los valores originales
        setNewFullName(fullName);
        setNewUserName(userName);
        setNewEmail(email);
        alert('Update canceled');
    };

    return (
        <div className='flex'>
            <SidebarProfile />
            <div className="flex-1 p-8 flex space-x-8">
                <div className="bg-white shadow-md rounded-lg p-6 w-1/3 relative">
                    <div className="text-center">
                        <div className="relative mb-4">
                            <img
                                src={profilePic || 'default_profile_pic.png'}
                                alt="Profile"
                                className="h-24 w-24 rounded-full mx-auto"
                            />
                            <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer">
                                <EditIcon className="text-gray-500" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={handleProfilePicChange}
                                />
                            </label>
                        </div>
                        <p>{userName}</p>
                        <h1 className="text-2xl font-bold text-gray-800">{fullName}</h1>
                        <p className="text-gray-600">{email}</p>
                        <div className="flex items-center text-gray-500 mt-2 justify-center">
                            <LocationOnIcon className="mr-1" />
                            <span>Lima - 02:15 AM</span>
                        </div>
                        <div className="text-gray-500 mt-4">
                            <StarBorderIcon className="mr-1" />
                            Top rated
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 w-2/3">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Edit Profile</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            value={newFullName}
                            onChange={(e) => setNewFullName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email Address</label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex space-x-4">
                        <button
                            className="px-6 py-2 bg-purple-500 hover:bg-purple-700 text-white rounded-lg"
                            onClick={handleUpdateInfo}
                        >
                            Save Changes
                        </button>
                        <button
                            className="px-6 py-2 bg-gray-300 hover:bg-gray-500 text-black rounded-lg"
                            onClick={handleCancelUpdate}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
