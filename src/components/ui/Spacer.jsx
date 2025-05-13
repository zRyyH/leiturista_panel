import React from 'react';
import styles from './Spacer.module.css';

/**
 * Componente Spacer - Cria espaçamento vertical ou horizontal com opção de título
 * @param {string} direction - Direção do espaçamento ('horizontal' ou 'vertical')
 * @param {string} size - Tamanho do espaçamento ('xs', 'sm', 'md', 'lg', 'xl')
 * @param {string} title - Texto opcional para título no espaçador
 * @param {string} titleAlign - Alinhamento do título ('left', 'center', 'right')
 * @param {string} className - Classes adicionais para estilização
 * @param {object} style - Estilos inline adicionais
 */

const Spacer = ({
    direction = 'vertical',
    size = 'md',
    title = '',
    titleAlign = 'center',
    className = '',
    style = {}
}) => {
    const spacerClasses = [
        styles.spacer,
        styles[direction],
        styles[size],
        title && styles.withTitle,
        title && styles[`title${titleAlign.charAt(0).toUpperCase() + titleAlign.slice(1)}`],
        className
    ].filter(Boolean).join(' ');

    if (!title) {
        return <div className={spacerClasses} style={style} aria-hidden="true" />;
    }

    return (
        <div className={spacerClasses} style={style}>
            <span className={styles.titleText}>{title}</span>
        </div>
    );
};

export default Spacer;