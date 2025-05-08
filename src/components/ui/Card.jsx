"use client";

import React from 'react';
import styles from './Card.module.css';

/**
 * Card UI Component - Componente atômico para exibição de dados
 * 
 * @param {object} props - Propriedades do componente
 * @param {string} props.title - Título do card
 * @param {string} props.subtitle - Subtítulo opcional
 * @param {Array} props.data - Array com os dados a serem exibidos
 * @param {string} props.variant - Variante de estilo ('default', 'outlined', 'elevated')
 * @param {string} props.size - Tamanho do card ('small', 'medium', 'large')
 * @param {boolean} props.bordered - Se o card deve ter borda
 * @param {boolean} props.hoverable - Se o card deve ter efeito hover
 * @param {string} props.className - Classe CSS adicional
 * @param {React.ReactNode} props.children - Conteúdo adicional do card
 */
const Card = ({
    title,
    subtitle,
    data = [],
    variant = 'default',
    size = 'medium',
    bordered = false,
    hoverable = false,
    className = '',
    children,
}) => {
    // Construção das classes CSS baseadas nas props
    const cardClasses = [
        styles.card,
        styles[`card--${variant}`],
        styles[`card--${size}`],
        bordered ? styles['card--bordered'] : '',
        hoverable ? styles['card--hoverable'] : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={cardClasses}>
            {/* Cabeçalho do Card */}
            {(title || subtitle) && (
                <div className={styles.cardHeader}>
                    {title && <h3 className={styles.cardTitle}>{title}</h3>}
                    {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
                </div>
            )}

            {/* Conteúdo do Card */}
            <div className={styles.cardContent}>
                {data.length > 0 && (
                    <div className={styles.dataGrid}>
                        {data.map((item, index) => (
                            <div key={index} className={styles.dataItem}>
                                <span className={styles.dataLabel}>{item.label}</span>
                                <span className={styles.dataValue}>{item.value}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Conteúdo adicional como children */}
                {children}
            </div>
        </div>
    );
};

export default Card;