import React, { useContext, useState, createContext } from 'react';

const AuthContext = createContext();

const initialDummyUsers = [
    { username: 'admin', password: 'admin' },
    { username: 'user2', password: 'pass2' }
];

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [dummyUsers, setDummyUsers] = useState(initialDummyUsers);
    const [newUserEmail, setNewUserEmail] = useState('');
    const [variable1, setVariable1] = useState('initialValue1');
    const [variable2, setVariable2] = useState('initialValue2');
    const [variable3, setVariable3] = useState('initialValue3');

    
    const login = (username, password, callback) => {
        const foundUser = dummyUsers.find(u => u.username === username && u.password === password);
        if (foundUser) {
            setUser(foundUser);
            callback();
        } else {
            alert("Invalid username or password");
            setUser(null);
        }
    };

    const logout = () => {
        setUser(null);
    };

    const createAccount = (username, password, callback) => {

        const existingUser = dummyUsers.find(u => u.username === username); // base de datos

        if (existingUser) {
            alert("Username already exists");
            return;
        }
        
        const newUser = { username, password };
        setDummyUsers([...dummyUsers, newUser]);
        //setUser(newUser);
        setNewUserEmail(username);
        callback();
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