'use client';

import { useState, useRef } from 'react';
import * as LucideIcons from 'lucide-react';
import styles from './GenericCard.module.css';

export default function GenericCard({
    // Campos de conteúdo (até 3)
    title = 'Título',
    field1Label = '',
    field1Value = '',
    field2Label = '',
    field2Value = '',
    field3Label = '',
    field3Value = '',

    // Configurações visuais
    icon = 'Info',          // Nome do ícone do Lucide (ex: 'Droplet', 'Flame', 'Activity')
    color = 'blue',         // Nome do tema de cor: 'blue', 'red', 'green', 'purple', 'orange', 'gray'
    customColor = '',       // Substitui 'color' se fornecido (valor hexadecimal, ex: '#1e88e5')

    // Configurações de layout
    size = 'medium',        // 'compact', 'small', 'medium'
    layout = 'horizontal',  // 'horizontal', 'vertical'

    // Tooltip informativo
    infoText = '',          // Texto que será exibido no tooltip

    // Props adicionais
    className = '',
    onClick,
}) {
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef(null);

    // Selecionando o ícone correto do Lucide
    const IconComponent = LucideIcons[icon] || LucideIcons.Info;
    const iconSize = size === 'compact' ? 14 : size === 'small' ? 16 : 18;

    // Definir o tema de cores
    const colorThemes = {
        blue: styles.themeBlue,
        red: styles.themeRed,
        green: styles.themeGreen,
        purple: styles.themePurple,
        orange: styles.themeOrange,
        gray: styles.themeGray,
    };

    const colorClass = customColor ? styles.themeCustom : (colorThemes[color] || colorThemes.blue);

    // Definir o tamanho
    const sizeClasses = {
        compact: styles.sizeCompact,
        small: styles.sizeSmall,
        medium: styles.sizeMedium,
    };

    // Definir o layout
    const layoutClasses = {
        horizontal: styles.layoutHorizontal,
        vertical: styles.layoutVertical,
    };

    // Estilo personalizado para cor customizada
    const customStyle = customColor ? {
        '--custom-color': customColor,
        '--custom-color-light': `${customColor}15`,
    } : {};

    // Manipuladores de eventos para o tooltip de informação
    const handleInfoMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleInfoMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <div
            className={`
        ${styles.card} 
        ${colorClass} 
        ${sizeClasses[size]} 
        ${layoutClasses[layout]} 
        ${className}
      `}
            onClick={onClick}
            style={customStyle}
        >
            {/* Header com título e ícone */}
            <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                    <IconComponent size={iconSize} />
                </div>
                <h3 className={styles.title}>{title}</h3>

                {/* Ícone de informação com tooltip */}
                {infoText && (
                    <div
                        className={styles.infoIconContainer}
                        onMouseEnter={handleInfoMouseEnter}
                        onMouseLeave={handleInfoMouseLeave}
                    >
                        <LucideIcons.HelpCircle
                            size={size === 'compact' ? 12 : size === 'small' ? 14 : 16}
                        />

                        {showTooltip && (
                            <div className={styles.tooltip} ref={tooltipRef}>
                                {infoText}
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Campos personalizáveis */}
            <div className={styles.fieldsContainer}>
                {field1Label && (
                    <div className={styles.fieldRow}>
                        <span className={styles.fieldLabel}>{field1Label}</span>
                        <span className={styles.fieldValue}>{field1Value}</span>
                    </div>
                )}

                {field2Label && (
                    <div className={styles.fieldRow}>
                        <span className={styles.fieldLabel}>{field2Label}</span>
                        <span className={styles.fieldValue}>{field2Value}</span>
                    </div>
                )}

                {field3Label && (
                    <div className={styles.fieldRow}>
                        <span className={styles.fieldLabel}>{field3Label}</span>
                        <span className={styles.fieldValue}>{field3Value}</span>
                    </div>
                )}
            </div>
        </div>
    );
}