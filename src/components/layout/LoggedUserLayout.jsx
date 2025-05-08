'use-client';

import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import styles from './LoggedUserLayout.module.css';
import { INFO } from '@/constants/global';
import UserBar from '../ui/UserBar';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { DIRECTUS } from '@/constants/global';
import logo from '@/assets/logo.png';
import Image from 'next/image';

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
                logo={<Image src={logo.src} alt='logo' width={40} height={40} />}
                actions={
                    <UserBar
                        onLogout={handleLogout}
                        userName={user?.first_name}
                        avatarUrl={`${DIRECTUS.ASSETS_URL}/${user?.avatar}`}
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