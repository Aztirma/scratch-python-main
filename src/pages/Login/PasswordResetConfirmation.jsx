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
                    Click en el enlace que enviamos a <strong>{newUserEmail}</strong> para finalizar su solicitud.
                </p>
                <a href="/" className="text-purple-principal hover:underline text-lg">
                    Regresar al Login
                </a>
            </div>
        </div>
    );
};

export default PasswordResetConfirmation;
