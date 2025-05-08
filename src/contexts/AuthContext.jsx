"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import {
    login as serviceLogin,
    logout as serviceLogout,
    getCurrentUser,
    tryRefresh,
} from '@/services/auth';

const AuthContext = createContext({
    user: null,
    loading: true,
    login: async () => { },
    logout: async () => { },
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function initAuth() {
            try {
                await tryRefresh();
                const profile = await getCurrentUser();
                setUser(profile);
                console.log(profile);
            } catch {
                setUser(null);
            } finally {
                setLoading(false);
            }
        }
        initAuth();
    }, []);

    const login = async (email, password) => {
        const profile = await serviceLogin(email, password);
        setUser(profile);
        return profile;
    };

    const logout = async () => {
        await serviceLogout();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
