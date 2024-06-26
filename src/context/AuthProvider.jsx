import React, { useContext, useState, createContext, useEffect } from 'react';
import clienteAxios from '../config/clientAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [newUserEmail, setNewUserEmail] = useState('');

    useEffect(() => {
        // Intentar recuperar la información del usuario del local storage al cargar
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (email, password, callback) => {
        try {
            const userData = { email, password };
            const response = await clienteAxios.post('/user/login/', userData);

            if (response.status !== 200) {
                alert("Invalid username or password");
                setUser(null);
                return;
            }

            localStorage.setItem('user', JSON.stringify(response.data.user)); // Guardar el usuario en local storage
            setUser(response.data.user);
            callback();
        }
        catch (error) {
            console.error(error);
            alert("Invalid username or password");
            setUser(null);
        }
    };

    const logout = () => {
        localStorage.removeItem('user'); // Remover el usuario del local storage
        setUser(null);
    };

    const createAccount = async (userDetails, callback) => {
        try {
            console.log(userDetails);
            const response = await clienteAxios.post('/user/', userDetails);
            console.log(response.data);
            setNewUserEmail(userDetails.email); // Guardar el email del nuevo usuario
            callback();
        }
        catch (error) {
            console.error(error);
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ user, newUserEmail, login, logout, createAccount }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
export default AuthContext;
