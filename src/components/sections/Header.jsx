import React from 'react';
import styles from './Header.module.css';


const Header = ({
    variant = 'light',
    logo,
    actions,
    showShadow = false,
    className = '',
    customStyles = {}
}) => {
    // Construir classes CSS combinadas
    const headerClasses = [
        styles.header,
        styles[variant],
        showShadow ? styles.shadow : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <header className={headerClasses} style={customStyles}>
            {/* Área do logo */}
            <div className={styles.logoArea}>
                {logo}
            </div>

            {/* Área de ações */}
            {actions && (
                <div className={styles.actionsArea}>
                    {actions}
                </div>
            )}
        </header>
    );
};

export default Header;