"use client";

import React from 'react';
import styles from './TituloCard.module.css';

const TituloCard = ({ titulo, descricao, variante = 'padrao' }) => {
    return (
        <div className={`${styles.container} ${styles[variante]}`}>
            <h2 className={styles.titulo}>{titulo}</h2>
            {descricao && <p className={styles.descricao}>{descricao}</p>}
        </div>
    );
};

export default TituloCard;