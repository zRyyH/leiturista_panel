import React from 'react';
import { User } from 'lucide-react';
import styles from './InfoCard.module.css';

function InfoCard({
    image,
    valor1,
    valor2,
    valor3,
    titulo1 = 'Valor 1',
    titulo2 = 'Valor 2',
    titulo3 = 'Valor 3',
    altText = 'Imagem do perfil',
    className = '',
    onClick
}) {
    return (
        <div
            className={`${styles.card} ${className}`}
            onClick={onClick ? onClick : undefined}
            role={onClick ? 'button' : undefined}
        >
            <div className={styles.imageContainer}>
                {image ? (
                    <img src={image} alt={altText} className={styles.image} />
                ) : (
                    <div className={styles.placeholderImage}>
                        <User size={32} />
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>{titulo1}</span>
                    <span className={styles.infoValue}>{valor1}</span>
                </div>

                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>{titulo2}</span>
                    <span className={styles.infoValue}>{valor2}</span>
                </div>

                <div className={styles.infoItem}>
                    <span className={styles.infoLabel}>{titulo3}</span>
                    <span className={styles.infoValue}>{valor3}</span>
                </div>
            </div>
        </div>
    );
}

export default InfoCard;