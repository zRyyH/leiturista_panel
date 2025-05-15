'use-client';

import React from 'react';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import styles from './PublicUserLayout.module.css';
import { INFO } from '@/core/config/global';
import Logo from '@/components/ui/Logo';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header logo={<Logo nome={INFO.APP_NAME} drescricao={INFO.APP_DESCRIPTION} />} />

            <main className={styles.main}>
                {children}
            </main>

            <Footer companyName={INFO.COMPANY_NAME} copyright={INFO.COPYRIGHT} />
        </div>
    );
};

export default Layout;