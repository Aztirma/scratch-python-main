
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderLogin from '../../components/HeaderLogin';
import useAuth from '../../hooks/useAuth';

import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

const CreateAccount = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const { createAccount } = useAuth();


    const handleSubmit = (event) => {
        event.preventDefault();

        if (password !== password2) {
            alert("Passwords do not match!");
            return;
        }

        const user = {
            username: username,
            email: email,
            fullName: fullName,
            password: password,
        };

        createAccount(user, () => {
            navigate('/account-confirmation');
        });
    };


    return (
        <div>
            <HeaderLogin />
            <div className="flex flex-col items-center justify-center bg-white">
                <h1 className="text-5xl font-bold text-black mb-4 font-epilogue">Crear una cuenta</h1>
                <h2 className="text-lg text-slate-400 mb-8">Ingresa tus datos.</h2>

                <form onSubmit={handleSubmit} className="p-4 bg-white">
                    <div className="mb-1 w-[30rem]">
                        <label className="block text-gray-700 text-base font-bold mb-1" htmlFor="user">
                            Email
                        </label>
                        <input
                            type="text"
                            id="user"
                            placeholder="e.g. username@kinety.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>


                    <div className="mb-1 w-[30rem]">
                        <label className="block text-gray-700 text-base font-bold mb-1" htmlFor="user">
                            Fullname
                        </label>
                        <input
                            type="text"
                            id="user"
                            placeholder="Fullname"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-1 w-[30rem]">
                        <label className="block text-gray-700 text-base font-bold mb-1" htmlFor="user">
                            Username
                        </label>
                        <input
                            type="text"
                            id="user"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-1 w-[30rem]">
                        <label className="block text-gray-700 text-base font-bold mb-1" htmlFor="pass1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="pass1"
                            placeholder='create password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="mb-7 w-[30rem]">
                        <label className="block text-gray-700 text-base font-bold mb-1" htmlFor="pass2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="pass2"
                            placeholder='confirm password'
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        <div className="flex justify-end mt-2">
                            <p>
                                Ya tienes una cuenta?{' '}

                                <a href="/" className="text-base text-purple-principal hover:underline">
                                    Login
                                </a>
                            </p>
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


                    <div className="flex items-center justify-center mb-6 mt-4">
                        <div className="border-t border-gray-300 w-1/4"></div>
                        <p className="text-base text-gray-600 px-3">Or Sign up with</p>
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
};

export default CreateAccount;
