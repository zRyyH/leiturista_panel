'use client';

import { useState } from 'react';
import styles from './ToggleButton.module.css';

const ToggleButton = ({
    label = 'Toggle',
    activeLabel,
    inactiveLabel,
    activeIcon: ActiveIcon,
    inactiveIcon: InactiveIcon,
    defaultActive = false,
    onChange,
    disabled = false,
    className = '',
    size = 'medium',
    variant = 'primary',
}) => {
    const [isActive, setIsActive] = useState(defaultActive);

    const handleToggle = () => {
        if (disabled) return;

        const newState = !isActive;
        setIsActive(newState);

        if (onChange) {
            onChange(newState);
        }
    };

    const buttonText = isActive
        ? (activeLabel || label)
        : (inactiveLabel || label);

    const buttonClasses = [
        styles.toggleButton,
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        isActive ? styles.active : styles.inactive,
        disabled ? styles.disabled : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <button
            className={buttonClasses}
            onClick={handleToggle}
            disabled={disabled}
            type="button"
            aria-pressed={isActive}
        >
            {isActive && ActiveIcon && (
                <span className={styles.icon}>
                    <ActiveIcon size={size === 'small' ? 16 : size === 'large' ? 24 : 20} />
                </span>
            )}
            {!isActive && InactiveIcon && (
                <span className={styles.icon}>
                    <InactiveIcon size={size === 'small' ? 16 : size === 'large' ? 24 : 20} />
                </span>
            )}
            <span className={styles.label}>{buttonText}</span>
        </button>
    );
};

export default ToggleButton;