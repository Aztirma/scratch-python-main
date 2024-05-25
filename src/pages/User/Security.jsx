import React from 'react';
import SidebarProfile from '../../components/SidebarProfile';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import SecurityIcon from '@mui/icons-material/Security';

const Security = () => {
    return (
        <div className="flex">
            <SidebarProfile />
            <div className="flex-1 p-8">
                <div className="flexmb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Security</h1>
                    <div className='flex w-full'>
                        <div className="flex  mb-4 mr-20 w-1/3 mt-5">
                            <LockOutlinedIcon className="text-gray-500 mr-2" />
                            <h2 className="text-2xl font-bold text-gray-700">Change Password</h2>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 w-2/3">
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="current-password">
                                        Current password
                                    </label>
                                    <input
                                        type="password"
                                        id="current-password"
                                        placeholder="Enter current password"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="new-password">
                                        New password
                                    </label>
                                    <input
                                        type="password"
                                        id="new-password"
                                        placeholder="Enter new password"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                                        Confirm password
                                    </label>
                                    <input
                                        type="password"
                                        id="confirm-password"
                                        placeholder="Confirm new password"
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Change password
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="flex items-center mb-4">
                        <SecurityIcon className="text-gray-500 mr-2" />
                        <h2 className="text-2xl font-bold text-gray-700">2-step Authentication</h2>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <p className="text-gray-600 mb-4">
                            Additional level of security for your account with a second authentication step</p>
                        <p className="text-gray-600 mb-4">
                            2-step authentication is disabled</p>
                        <p className="text-gray-600 mb-4">
                            If we detect a login from an unknown device or browser, we will ask for your password and a verification code</p>
                        <button
                            type="button"
                            className="bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Activar autenticación
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Security;
