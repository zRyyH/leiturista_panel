'use-client';

import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import styles from './LoggedUserLayout.module.css';
import { INFO } from '@/core/config/global';
import UserBar from '../ui/UserBar';
import { useAuth } from '@/core/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { DIRECTUS } from '@/core/config/global';
import Logo from '@/components/ui/Logo';

const Layout = ({ children }) => {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <div className={styles.layout}>
            <Header
                logo={<Logo nome={INFO.APP_NAME} drescricao={INFO.APP_DESCRIPTION} />}
                actions={
                    <UserBar
                        onLogout={handleLogout}
                        userName={user?.nome}
                        avatarUrl={`${DIRECTUS.ASSETS_URL}/${user?.foto_id.id}`}
                    />
                }
            />

            <main className={styles.main}>
                {children}
            </main>

            <Footer companyName={INFO.COMPANY_NAME} copyright={INFO.COPYRIGHT} />
        </div>
    );
};

export default Layout;