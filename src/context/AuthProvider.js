import React, { createContext } from 'react';
import useeFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContext = useeFirebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;