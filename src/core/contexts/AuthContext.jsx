'use client';

import { createContext, useContext } from 'react';
import useAuthProvider from '@/core/hooks/useAuth';

const AuthContext = createContext({
    user: null,
    loading: true,
    login: async () => { },
    logout: async () => { },
});

export function AuthProvider({ children }) {
    const auth = useAuthProvider();
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
