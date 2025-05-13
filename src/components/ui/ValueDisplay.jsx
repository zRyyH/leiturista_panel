import React from 'react';
import styles from './ValueDisplay.module.css';

/**
 * ValueDisplay - Componente para exibição de valores em sequência com cabeçalhos e operadores
 * 
 * @param {object} props
 * @param {Array} props.items - Array de objetos contendo {header, value}
 * @param {Array} props.operators - Array de caracteres/operadores entre os valores (ex: "=", ">", etc)
 * @param {string} props.variant - Variante do componente ("primary", "secondary", "outlined")
 * @param {string} props.size - Tamanho do componente ("sm", "md", "lg")
 * @param {string} props.className - Classes CSS adicionais
 */
const ValueDisplay = ({
    items = [],
    operators = [],
    variant = "primary",
    size = "md",
    className = "",
}) => {
    // Verifica se temos pelo menos um item
    if (!items.length) return null;

    return (
        <div
            className={`${styles.container} ${styles[variant]} ${styles[size]} ${className}`}
        >
            {items.map((item, index) => (
                <React.Fragment key={`item-${index}`}>
                    <div className={styles.itemWrapper}>
                        <div className={styles.itemContent}>
                            <div className={styles.header}>{item.header}</div>
                            <div className={styles.value}>{item.value}</div>
                        </div>
                    </div>

                    {/* Renderiza operador se não for o último item */}
                    {index < items.length - 1 && (
                        <div className={styles.operator}>
                            {operators[index] || "="}
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default ValueDisplay;