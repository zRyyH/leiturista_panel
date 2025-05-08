"use client";

import { createContext, useState, useContext } from 'react';
import Notification from '@/components/ui/Notification';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([]);

    const showNotification = ({ onClose: userOnClose, ...props }) => {
        const id = Date.now();

        const internalOnClose = () => {
            setNotifications(prev => prev.filter(n => n.id !== id));
            if (typeof userOnClose === 'function') userOnClose();
        };

        setNotifications(prev => [
            ...prev,
            { id, onClose: internalOnClose, ...props }
        ]);

        return id;
    };

    const closeNotification = (id) => {
        setNotifications(prev =>
            prev.filter(notification => notification.id !== id)
        );
    };

    return (
        <NotificationContext.Provider value={{ showNotification, closeNotification }}>
            {children}
            <div className="notifications-container">
                {notifications.map(n => (
                    <Notification
                        key={n.id}
                        {...n}
                        onClose={n.onClose}
                    />
                ))}
            </div>
        </NotificationContext.Provider>
    );
};

export const useNotification = () => useContext(NotificationContext);
