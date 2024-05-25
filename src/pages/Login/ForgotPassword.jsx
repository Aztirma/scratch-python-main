import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignpostIcon from '@mui/icons-material/Signpost';
import HeaderLogin from '../../components/HeaderLogin';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes agregar la lógica para enviar el correo de recuperación de contraseña.
        console.log('Email sent to:', email);
        navigate('/password-reset-confirmation');
    };

    return (
        <div>
            <HeaderLogin />
            <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                <SignpostIcon style={{ fontSize: 150 }} className="mb-4 text-purple-principal" />
                <h1 className="text-3xl font-bold mb-2">Forgot your password?</h1>
                <p className="text-lg text-gray-600 mb-8">
                    Enter your email so that we can send you password reset link.
                </p>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-base font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="e.g. username@kinety.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded-full w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="flex items-center justify-center mb-6">
                        <button
                            type="submit"
                            className="w-full bg-purple-principal hover:bg-purple-700 text-white font-bold py-3 px-5 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
                        >
                            Send Email
                        </button>
                    </div>
                </form>
                <div className="flex items-center justify-center mt-4">
                    <ArrowBackIosIcon className="mr-2 text-purple-principal" />
                    <a href="/" className="text-purple-principal hover:underline text-lg">
                        Back to Login
                    </a>
                </div>
            </div>

        </div>

    );
};

export default ForgotPassword;
