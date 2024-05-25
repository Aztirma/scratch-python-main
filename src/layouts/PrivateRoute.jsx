import { Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Header from '../components/Header';

const PrivateRoute = ({ children }) => {
    const { user } = useAuth();

    return user ? (
        <div>

    <Header />

            {children}
        </div>
        
    ) : <Navigate to="/" replace />;
};

export default PrivateRoute;