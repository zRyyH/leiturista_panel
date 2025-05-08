'use client';

import { LogOut, User } from 'lucide-react';
import { useState } from 'react';
import styles from './UserBar.module.css';

export default function UserBar({
    userName = 'Usuário',
    avatarUrl = '',
    onLogout,
    className = '',
    size = 'medium', // 'small', 'medium', 'large'
    variant = 'light', // 'light', 'dark'
}) {
    const [imageError, setImageError] = useState(false);

    const sizeClasses = {
        small: styles.sizeSmall,
        medium: styles.sizeMedium,
        large: styles.sizeLarge,
    };

    const variantClasses = {
        light: styles.variantLight,
        dark: styles.variantDark,
    };

    const iconSize = size === 'small' ? 16 : size === 'medium' ? 20 : 24;

    const handleImageError = () => {
        setImageError(true);
    };

    return (
        <div
            className={`${styles.userBar} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        >
            <div className={styles.userInfo}>
                <div className={styles.avatarContainer}>
                    {!avatarUrl || imageError ? (
                        <div className={styles.avatarFallback}>
                            <User size={iconSize} />
                        </div>
                    ) : (
                        <img
                            src={avatarUrl}
                            alt={`Avatar de ${userName}`}
                            className={styles.avatar}
                            onError={handleImageError}
                        />
                    )}
                </div>
                <span className={styles.userName}>{userName}</span>
            </div>

            <button
                onClick={onLogout}
                className={styles.logoutButton}
                aria-label="Sair"
                type="button"
            >
                <LogOut size={iconSize} />
            </button>
        </div>
    );
}