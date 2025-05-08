import React from 'react';
import styles from './Footer.module.css';


function Footer({
    logoSrc,
    companyName = 'Company',
    links = [],
    copyright = '© 2025',
    children
}) {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    {/* Logo ou nome da empresa */}
                    <div className={styles.brand}>
                        {logoSrc ? (
                            <img src={logoSrc} alt={companyName} className={styles.logo} />
                        ) : (
                            <span className={styles.companyName}>{companyName}</span>
                        )}
                    </div>

                    {/* Links opcionais */}
                    {links.length > 0 && (
                        <nav className={styles.nav}>
                            <ul className={styles.navList}>
                                {links.map((link, index) => (
                                    <li key={index} className={styles.navItem}>
                                        <a
                                            href={link.url}
                                            className={styles.navLink}
                                            target={link.external ? '_blank' : undefined}
                                            rel={link.external ? 'noopener noreferrer' : undefined}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    )}

                    {/* Mensagem de copyright */}
                    <div className={styles.copyright}>
                        {copyright}
                    </div>

                    {/* Conteúdo adicional customizado */}
                    {children && (
                        <div className={styles.custom}>
                            {children}
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}

export default Footer;