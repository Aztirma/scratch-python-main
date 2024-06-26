import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import HeaderLogin from '../../components/HeaderLogin';

import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        login(username, password, () => {
            navigate('/home');
        });
    };

    return (
        <div>
            <HeaderLogin />

            <div className="flex flex-col items-center justify-center bg-white">
                <h1 className="text-5xl font-bold text-black mb-4 font-epilogue">Ingresar</h1>
                <h2 className="text-lg text-slate-400 mb-8">Ingrese sus datos para ingresar.</h2>

                <form onSubmit={handleSubmit} className="p-4 bg-white">
                    <div className="mb-1 w-[30rem]">
                        <label className="block text-gray-700 text-base font-bold mb-1" htmlFor="user">
                            Email
                        </label>
                        <input
                            type="text"
                            id="user"
                            placeholder="e.g. username@kinety.com"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-7 w-[30rem]">
                        <label className="block text-gray-700 text-base font-bold mb-1" htmlFor="pass">
                            Password
                        </label>
                        <input
                            type="password"
                            id="pass"
                            placeholder='enter your password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <div className="flex justify-end mt-2">
                            <a href="/forgot-password" className="text-base text-purple-principal hover:underline">
                                Olvido su contraseña?
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center justify-center mb-6">
                        <button
                            type="submit"
                            className="rounded-full bg-purple-principal hover:bg-purple-700 text-white font-bold py-3 px-5 w-full focus:outline-none focus:shadow-outline transition duration-300"
                        >
                            Continuar
                        </button>
                    </div>

                    <div className="mt-5 text-center mb-10">
                        <p className="text-base text-neutral-500">
                            No tienes una cuenta?{' '}
                            <a href="/create-account" className="text-purple-principal hover:underline">
                                Regístrate
                            </a>
                        </p>
                    </div>

                    <div className="flex items-center justify-center mb-6 mt-4">
                        <div className="border-t border-gray-300 w-1/4"></div>
                        <p className="text-base text-gray-600 px-3">O regístrate con</p>
                        <div className="border-t border-gray-300 w-1/4"></div>
                    </div>
                    <div className="flex justify-center space-x-5">
                        <button className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-5 text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none">
                            <GoogleIcon className="h-6 w-6 mr-2" />
                            Google
                        </button>
                        <button className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-5 text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none">
                            <AppleIcon className="h-6 w-6 mr-2" />
                            Apple
                        </button>
                        <button className="flex items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-5 text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none">
                            <FacebookIcon className="h-6 w-6 mr-2" />
                            Facebook
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );




}

export default Login;
