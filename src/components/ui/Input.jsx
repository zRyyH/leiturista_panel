"use client";

import React, { useState } from 'react';
import styles from './Input.module.css';

const Input = ({
    label,
    type = 'text',
    placeholder = '',
    value = '',
    onChange,
    name,
    required = false,
    error = '',
    success = false,
    icon = null,
    disabled = false,
    fullWidth = true,
    className = '',
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const inputClasses = [
        styles.input,
        error ? styles.error : '',
        success ? styles.success : '',
        icon ? styles.hasIcon : '',
        isFocused ? styles.focused : '',
        disabled ? styles.disabled : '',
        fullWidth ? styles.fullWidth : '',
        className
    ].filter(Boolean).join(' ');

    const containerClasses = [
        styles.inputContainer,
        fullWidth ? styles.fullWidth : '',
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses}>
            {label && (
                <label className={styles.label}>
                    {label}
                    {required && <span className={styles.required}>*</span>}
                </label>
            )}

            <div className={styles.inputWrapper}>
                {icon && <div className={styles.icon}>{icon}</div>}

                <input
                    type={type}
                    name={name}
                    className={inputClasses}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    required={required}
                />
            </div>

            {error && <p className={styles.errorMessage}>{error}</p>}
        </div>
    );
};

export default Input;