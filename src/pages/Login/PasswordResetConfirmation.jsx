import HeaderLogin from '../../components/HeaderLogin';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const PasswordResetConfirmation = () => {
    const { newUserEmail } = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <HeaderLogin />

            <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                <p className="text-lg text-gray-600 mb-8 text-center">
                    Click on the link we sent to <strong>{newUserEmail}</strong> to finish your account setup.
                </p>
                <a href="/" className="text-purple-principal hover:underline text-lg">
                    Back to login
                </a>
            </div>
        </div>
    );
};

export default PasswordResetConfirmation;
