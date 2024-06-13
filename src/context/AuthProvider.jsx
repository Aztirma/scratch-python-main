import React, { useContext, useState, createContext } from 'react';
import clienteAxios from '../config/clientAxios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [newUserEmail, setNewUserEmail] = useState('');

    const login = async (username, password, callback) => {
        try {
            const user = {username: username, password: password};
            const response = await clienteAxios.post('/user/login/', user);
            console.log(response.status);
            if (response.status !== 200) {
                alert("Invalid username or password");
                setUser(null);
                return;
            }
            setUser(response.data); // response.data es el usuario
            callback();
        }
        catch (error) {
            console.log(error);
            alert("Invalid username or password");
            setUser(null);
        }
    };

    const logout = () => {
        setUser(null);
    };

    const createAccount = async (username, password, callback) => {
        try {
            const user = {username: username, password: password};
            const response = await clienteAxios.post('/user/', user);
            console.log(response.data);
            setNewUserEmail(username); // response.data es el usuario
            callback();
        }
        catch (error) {
            console.log(error);
            // alert("Invalid username or password");
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                newUserEmail,
                login,
                logout,
                createAccount,
            }}>
            {children}
        </AuthContext.Provider>
    );

};

export {
    AuthProvider
}

export default AuthContext;