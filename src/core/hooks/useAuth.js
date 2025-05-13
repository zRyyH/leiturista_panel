'use client';

import { useState, useEffect } from 'react';
import {
    login as serviceLogin,
    logout as serviceLogout,
    getCurrentUser,
    getUserDetails,
    tryRefresh,
} from '@/core/services/auth';

export default function useAuthProvider() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    async function init() {
        try {
            await tryRefresh();
            const profile = await getCurrentUser();
            setUser(await getUserDetails(profile.id));
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        init();
    }, []);

    const login = async (email, password) => {
        const profile = await serviceLogin(email, password);
        setUser(await getUserDetails(profile.id));
        return profile;
    };

    const logout = async () => {
        await serviceLogout();
        setUser(null);
    };

    return { user, loading, login, logout };
}
