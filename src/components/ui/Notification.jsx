"use client";

import React, { useEffect, useState } from 'react';
import { AlertCircle, CheckCircle, Info, X, AlertTriangle } from 'lucide-react';
import styles from './Notification.module.css';

const Notification = ({
    title = '',
    message = '',
    type = 'info',
    duration = 5000,
    position = 'top-right',
    onClose,
    icon,
    showClose = true,
    className = '',
    autoClose = true,
}) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let timer;
        if (autoClose && duration > 0) {
            timer = setTimeout(() => {
                handleClose();
            }, duration);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [duration, autoClose]);

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    if (!isVisible) return null;

    const getIcon = () => {
        if (icon) return icon;

        switch (type) {
            case 'success':
                return <CheckCircle size={20} />;
            case 'error':
                return <AlertCircle size={20} />;
            case 'warning':
                return <AlertTriangle size={20} />;
            case 'info':
            default:
                return <Info size={20} />;
        }
    };

    return (
        <div className={`${styles.notification} ${styles[position]} ${styles[type]} ${className}`}>
            <div className={styles.iconContainer}>
                {getIcon()}
            </div>
            <div className={styles.content}>
                {title && <h4 className={styles.title}>{title}</h4>}
                {message && <p className={styles.message}>{message}</p>}
            </div>
            {showClose && (
                <button
                    className={styles.closeButton}
                    onClick={handleClose}
                    aria-label="Fechar notificação"
                >
                    <X size={16} />
                </button>
            )}
            {autoClose && <div className={styles.progressBar} style={{ animationDuration: `${duration}ms` }} />}
        </div>
    );
};

export default Notification;