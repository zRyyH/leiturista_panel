import React from 'react';
import { ExternalLink } from 'lucide-react';
import styles from './ImageCard.module.css';

/**
 * Componente Card para apresentação de imagens (sempre quadrado)
 * 
 * @param {Object} props
 * @param {string} props.src - URL da imagem
 * @param {string} props.alt - Texto alternativo para a imagem
 * @param {string} [props.title] - Título do card (opcional)
 * @param {string} [props.description] - Descrição do card (opcional)
 * @param {string} [props.footer] - Texto do rodapé (opcional)
 * @param {string} [props.linkUrl] - URL para onde o card deve direcionar (opcional)
 * @param {string} [props.linkText] - Texto do link (opcional, usado com linkUrl)
 * @param {string} [props.size] - Tamanho do card: 'small', 'medium', 'large' (padrão: 'medium')
 * @param {string} [props.variant] - Variante do card: 'glass', 'flat', 'elevated', 'bordered' (padrão: 'elevated')
 * @param {boolean} [props.imagePadding] - Adiciona padding em volta da imagem (padrão: false)
 * @param {string} [props.titlePosition] - Posição do título e descrição: 'overlay', 'bottom' (padrão: 'overlay')
 * @param {string} [props.overlayAlignment] - Alinhamento do overlay: 'top', 'center', 'bottom' (padrão: 'bottom')
 * @param {string} [props.titleStyle] - Estilo do título: 'elegant', 'minimal', 'bold' (padrão: 'minimal')
 * @param {string} [props.className] - Classes CSS adicionais para o card
 * @param {React.ReactNode} [props.children] - Conteúdo adicional a ser renderizado no card
 * @param {Function} [props.onClick] - Função a ser executada ao clicar no card
 */
const ImageCard = ({
    src,
    alt,
    title,
    description,
    footer,
    linkUrl,
    linkText,
    size = 'medium',
    variant = 'elevated',
    imagePadding = false,
    titlePosition = 'overlay',
    overlayAlignment = 'bottom',
    titleStyle = 'minimal',
    className,
    children,
    onClick
}) => {
    const cardClasses = [
        styles.card,
        styles[`size-${size}`],
        styles[`variant-${variant}`],
        onClick ? styles.clickable : '',
        className
    ].filter(Boolean).join(' ');

    const imageContainerClasses = [
        styles.imageContainer,
        styles.squareContainer,
        imagePadding ? styles.imagePadding : ''
    ].filter(Boolean).join(' ');

    const titleClasses = [
        styles.title,
        styles[`title-${titleStyle}`]
    ].filter(Boolean).join(' ');

    const overlayClasses = [
        styles.overlay,
        styles[`overlay-${overlayAlignment}`]
    ].filter(Boolean).join(' ');

    const handleClick = () => {
        if (onClick) onClick();
    };

    const hasValidImage = src && src.trim() !== '';

    if (!hasValidImage) {
        return
    }

    return (
        <div className={cardClasses} onClick={handleClick}>
            <div className={imageContainerClasses}>
                {hasValidImage ? (
                    <img src={src} alt={alt || title || 'Card image'} className={styles.image} />
                ) : (
                    <div className={styles.imagePlaceholder}>
                        <span className={styles.placeholderIcon}>🏞️</span>
                        <span className={styles.placeholderText}>Imagem não disponível</span>
                    </div>
                )}

                {titlePosition === 'overlay' && (title || description) && (
                    <div className={overlayClasses}>
                        {title && <h3 className={titleClasses}>{title}</h3>}
                        {description && <p className={styles.description}>{description}</p>}
                        {children}
                    </div>
                )}
            </div>

            {titlePosition === 'bottom' && (title || description) && (
                <div className={styles.content}>
                    {title && <h3 className={titleClasses}>{title}</h3>}
                    {description && <p className={styles.description}>{description}</p>}
                    {children}
                </div>
            )}

            {(footer || (linkUrl && linkText)) && (
                <div className={styles.footer}>
                    {footer && <span className={styles.footerText}>{footer}</span>}
                    {linkUrl && linkText && (
                        <a href={linkUrl} className={styles.link} onClick={(e) => e.stopPropagation()}>
                            <span>{linkText}</span>
                            <ExternalLink size={14} />
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageCard;