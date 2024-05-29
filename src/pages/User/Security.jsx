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
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Seguridad</h1>
                    <div className='flex w-full'>
                        <div className="flex  mb-4 mr-20 w-1/3 mt-5">
                            <LockOutlinedIcon className="text-gray-500 mr-2" />
                            <h2 className="text-2xl font-bold text-gray-700">Cambiar contraseña</h2>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 w-2/3">
                            <form>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="current-password">
                                        Contraseña actual
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
                                        Nueva contraseña
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
                                        Confirmar contraseña
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
                                    Cambiar contraseña
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
                <div>
                    <div className="flex items-center mb-4">
                        <SecurityIcon className="text-gray-500 mr-2" />
                        <h2 className="text-2xl font-bold text-gray-700">Autenticación con 2 pasos</h2>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <p className="text-gray-600 mb-4">
                        Nivel adicional de seguridad para su cuenta con un segundo paso de autenticación</p>
                        <p className="text-gray-600 mb-4">
                        Autenticación con 2 pasos está deshabilitada</p>
                        <p className="text-gray-600 mb-4">
                        Si detectamos un inicio de sesión desde un dispositivo o navegador desconocido, le solicitaremos su contraseña y un código de verificación.                            </p>
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
