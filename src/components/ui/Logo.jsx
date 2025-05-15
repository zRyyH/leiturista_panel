'use-client';

import React from 'react';
import styles from './Logo.module.css';

const Logo = ({ nome, drescricao }) => {
    return (
        <div className={styles.logoWithTagline}>
            <span className={`${styles.logoMain} ${styles.geometric}`}>{nome}</span>
            <span className={styles.logoTagline}>{drescricao}</span>
        </div>
    );
};

export default Logo;