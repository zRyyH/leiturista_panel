'use-client';

import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import styles from './PublicUserLayout.module.css';
import { INFO } from '@/constants/global';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header logo={<Image src={logo.src} alt='logo' width={40} height={40} />} />

            <main className={styles.main}>
                {children}
            </main>

            <Footer companyName={INFO.COMPANY_NAME} copyright={INFO.COPYRIGHT} />
        </div>
    );
};

export default Layout;