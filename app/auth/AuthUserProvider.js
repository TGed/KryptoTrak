import React, {useState, createContext} from 'react';

export const AuthUserProviderContext = createContext({});

export const AuthUserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthUserProviderContext.Provider value={{ user, setUser }}>
            {children}
        </AuthUserProviderContext.Provider>
    );
};